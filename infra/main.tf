provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "frontend" {
  bucket = var.bucket_name
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "frontend_policy" {
  bucket = aws_s3_bucket.frontend.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.frontend.arn}/*"]
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
  }
}

resource "aws_route53_zone" "main" {
  name = var.domain_name
}

resource "aws_route53_record" "frontend" {
  zone_id = aws_route53_zone.main.zone_id
  name    = var.domain_name
  type    = "A"
  alias {
    name                   = aws_s3_bucket.frontend.website_domain
    zone_id                = aws_s3_bucket.frontend.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_iam_user" "github_actions" {
  name = "github-actions-deployer"
}

resource "aws_iam_access_key" "github_actions" {
  user = aws_iam_user.github_actions.name
}

resource "aws_iam_user_policy" "github_actions_policy" {
  name   = "github-actions-s3-policy"
  user   = aws_iam_user.github_actions.name
  policy = data.aws_iam_policy_document.github_actions_s3.json
}

data "aws_iam_policy_document" "github_actions_s3" {
  statement {
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:DeleteObject",
      "s3:ListBucket"
    ]
    resources = [
      aws_s3_bucket.frontend.arn,
      "${aws_s3_bucket.frontend.arn}/*"
    ]
  }
}

variable "bucket_name" {
  description = "Nombre del bucket S3 para el frontend"
  type        = string
  default     = "platzi-design-thinking"
}

variable "domain_name" {
  description = "Dominio para la app en Route53"
  type        = string
  default     = "platzi-design-thinking.com"
}

output "github_actions_access_key_id" {
  description = "AWS Access Key ID para GitHub Actions"
  value       = aws_iam_access_key.github_actions.id
}

output "github_actions_secret_access_key" {
  description = "AWS Secret Access Key para GitHub Actions"
  value       = aws_iam_access_key.github_actions.secret
  sensitive   = true
}

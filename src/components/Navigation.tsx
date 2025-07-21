import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Navigation(): ReactElement {
	return (
		<nav className="border-b bg-[var(--sidebar)] shadow-sm border-[var(--sidebar-border)]">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link to="/" className="flex items-center">
							<div className="text-2xl font-bold text-green-400">
								Platzi
							</div>
						</Link>
					</div>

					{/* Search Bar */}
					<div className="flex-1 max-w-lg mx-8">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
							<Input
								type="search"
								placeholder="Buscar cualquier cosa"
								className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:bg-slate-600 focus:border-green-400 focus:ring-green-400/20"
							/>
						</div>
					</div>

					{/* Right side */}
					<div className="flex items-center space-x-4">
						{/* Mi aprendizaje */}
						<Button
							variant="ghost"
							className="text-white hover:text-green-400 hover:bg-slate-700 transition-colors"
							onClick={() => {/* No hacer nada por ahora */}}
						>
							Mi aprendizaje
						</Button>

						{/* User Dropdown */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-10 w-10 rounded-full p-0 hover:bg-slate-700">
									<Avatar className="h-10 w-10">
										<AvatarImage
											src="/user-avatar.jpg"
											alt="Usuario"
										/>
										<AvatarFallback className="bg-green-600 text-white">
											JD
										</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-64 bg-slate-800 border-slate-600" align="end">
								<div className="flex items-center space-x-3 p-4">
									<Avatar className="h-12 w-12">
										<AvatarImage
											src="/user-avatar.jpg"
											alt="Joe Doe"
										/>
										<AvatarFallback className="bg-green-600 text-white">
											JD
										</AvatarFallback>
									</Avatar>
									<div className="flex-1">
										<div className="font-medium text-sm text-white">Joe Doe</div>
										<div className="text-xs text-slate-300">
											joe.doe@example.com
										</div>
									</div>
								</div>
								<DropdownMenuSeparator className="bg-slate-600" />
								<DropdownMenuItem
									className="cursor-pointer hover:bg-slate-700 focus:bg-slate-700 text-slate-200 hover:text-white focus:text-white"
									onClick={() => {/* No hacer nada por ahora */}}
								>
									Mi aprendizaje
								</DropdownMenuItem>
								<DropdownMenuSeparator className="bg-slate-600" />
								<DropdownMenuItem
									className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-900/30 focus:text-red-300 focus:bg-red-900/30"
									onClick={() => {/* No hacer nada por ahora */}}
								>
									Cerrar sesión
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;

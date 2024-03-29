import { NavLink } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { routes } from "~/libs/routes";

interface ComponentProps {
	label: string;
	to: string;
}

export function SidebarNavigationLink({
	label,
	to,
	children,
}: PropsWithChildren<ComponentProps>) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`flex flex-col items-center gap-3 py-5 text-gray-300 border-l-4 transition ${
					isActive
						? "border-l-sky-500 text-white bg-blue-800 pointer-events-none"
						: "bg-blue-600 border-l-transparent hover:border-l-sky-500 hover:text-white hover:bg-blue-800"
				}`
			}
		>
			{children && <span className="w-10">{children}</span>}
			<span className="text-sm font-bold uppercase">{label}</span>
		</NavLink>
	);
}

export default function SidebarNavigationLinks() {
	return (
		<nav>
			<SidebarNavigationLink label="dashboard" to={routes.admin.DASHBOARD}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-full"
				>
					<title>presentation-chart-bar</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
					/>
				</svg>
			</SidebarNavigationLink>
			<SidebarNavigationLink label="users" to={routes.admin.USERS}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-full"
				>
					<title>users</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
					/>
				</svg>
			</SidebarNavigationLink>
			<SidebarNavigationLink label="posts" to={routes.admin.POSTS}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-full"
				>
					<title>sharp</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
					/>
				</svg>
			</SidebarNavigationLink>
			<SidebarNavigationLink label="talks" to={routes.admin.TALKS}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-full"
				>
					<title>chats</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
					/>
				</svg>
			</SidebarNavigationLink>
		</nav>
	);
}

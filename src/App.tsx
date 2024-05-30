import { useEffect, useState } from "react";
import { check_network_status } from "./utils";

const App = () => {

	const [is_online, set_is_online] = useState<boolean>(false);

	useEffect(() => {
		const I = setInterval(() => {
			// Check every 500ms whether the app is online or offline
			const network_status = check_network_status();
			set_is_online(network_status);
		}, 500);

		return () => {
			clearInterval(I);
		};
	}, []);

	return (
		<div className='w-full h-[calc(100dvh)] overflow-y-auto max-w-md mx-auto relative'>
			{/* Display application network status on top right */}
			<div className='absolute top-2 right-2 p-2 border border-zinc-200 hover:bg-zinc-100 rounded-md text-xs w-24 cursor-pointer select-none'>
				{is_online ? (
					<div className="flex flex-row gap-2 text-sm items-center justify-center">
						<div className="rounded-full w-4 h-4 bg-green-500"></div>
						<span>Online</span>
					</div>
				) : (
					<div className="flex flex-row gap-2 text-sm items-center justify-center">
						<div className="rounded-full w-4 h-4 bg-red-500"></div>
						<span>Offline</span>
					</div>
				)}
			</div>

			<div className="flex items-center justify-center w-full h-full">
				PWA TEMPLATE
			</div>
		</div>
	)
}

export default App;

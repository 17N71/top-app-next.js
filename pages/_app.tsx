import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "@next/font/google";
const notoSans = Noto_Sans({
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal"],
});
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${notoSans.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</>
	);
}

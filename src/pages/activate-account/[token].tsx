import Head from "next/head";

import ActivateAccount from "@modules/activateAccount/activateAccount.module";

export default function ActivateAccountPage() {
	return (
		<>
			<Head>
				<title>Activate account | keystone</title>
			</Head>

			<ActivateAccount />
		</>
	);
}

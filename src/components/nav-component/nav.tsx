import { useRouter } from "next/router";

import styles from "./nav.module.scss";

import VaultIcon from "@components/icon-components/vault-icon";
import GenerateIcon from "@components/icon-components/generate-icon";
import AccountIcon from "@components/icon-components/account-icon";
import LogoutIcon from "@components/icon-components/logout-icon";

import NavItem from "@components/nav-item-component/nav-item";
import Logo from "@components/logo-component/logo";

export default function Nav() {
	const router = useRouter();

	const baseUrl = "/app";

	return (
		<div className={styles.container}>
			<div className={styles.container__logo}>
				<Logo width="130" />
			</div>

			<div className={styles.container__nav}>
				<div
					className={`
						${router.pathname == `${baseUrl}/vault` ? `${styles.active}` : undefined}
						${styles.container__nav__item}
					`}>
					<NavItem text="Vault">
						<VaultIcon size="26" />
					</NavItem>
				</div>

				<div
					className={`
						${router.pathname == `${baseUrl}/generate` ? `${styles.active}` : undefined}
						${styles.container__nav__item}
					`}>
					<NavItem text="Generate">
						<GenerateIcon size="26" />
					</NavItem>
				</div>

				<div
					className={`
						${router.pathname == `${baseUrl}/account` ? `${styles.active}` : undefined}
						${styles.container__nav__item}
					`}>
					<NavItem text="Account">
						<AccountIcon size="26" />
					</NavItem>
				</div>
			</div>

			<div className={`${styles.container__nav__item} ${styles.container__logoutContainer}`}>
				<NavItem text="Logout">
					<LogoutIcon size="26" />
				</NavItem>
			</div>
		</div>
	);
}
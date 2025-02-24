import React from 'react';
import { Button, Banner, Image } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

export const Footer: FC = () => {

	return (
		<Banner
			before={<Image size={48} />}
			callout="Urgent notification"
			description="Start exploring TON in a new, better way"
			header="Introducing TON Space"
			onCloseIcon={function noRefCheck() { }}
			type="section"
		>
			<React.Fragment key=".0">
				<Button size="s">
					Try it out
				</Button>
				<Button
					mode="plain"
					size="s"
				>
					Поробуйте позже
				</Button>
			</React.Fragment>
		</Banner>
	)
}
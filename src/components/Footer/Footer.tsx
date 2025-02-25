import React, { useState } from 'react';
import { Tabbar } from '@telegram-apps/telegram-ui';
import HomeIcon from '@/components/Icons/HomeIcon.tsx';
import ContactsIcon from '@/components/Icons/ContactsIcon.tsx';
//import React from 'react';
//import type { FC } from 'react';

export default function Footer() {

	const tabs = [
		{
			id: 'home',
			text: 'О нас',
			Icon: <HomeIcon />,
		},
		{
			id: 'search',
			text: 'Контакты',
			Icon: <ContactsIcon />,
		},
	];

	const [currentTab, setCurrentTab] = useState(tabs[0].id);

	return (
		<div>
			<Tabbar>
				{tabs.map(({ id, text, Icon }) => (
					<Tabbar.Item
						key={id}
						text={text}
						selected={id === currentTab}
						onClick={() => setCurrentTab(id)}
					>
						{Icon}
					</Tabbar.Item>
				))}
			</Tabbar>
		</div>
	);
}


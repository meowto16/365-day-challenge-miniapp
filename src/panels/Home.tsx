import React, {MouseEventHandler} from 'react';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import {UserInfo} from "@vkontakte/vk-bridge";

interface HomeProps {
	id: string
	go: MouseEventHandler<HTMLElement>
	fetchedUser: UserInfo | null
}

const Home: React.FC<HomeProps> = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Home;

import React, {MouseEventHandler} from 'react';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

interface PersikProps {
	id: string;
	go: MouseEventHandler<HTMLElement>
}

const Persik: React.FC<PersikProps> = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>
			Persik
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);

export default Persik;

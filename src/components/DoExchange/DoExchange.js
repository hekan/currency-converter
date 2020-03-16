import React from 'react';
import {appConfig} from '../../appConfigs';
import './DoExchange.css';

const DoExchange = (props) => {
	return (
		<div className="bottom-area">
			<div className="flex-container flex-container--centered">
				<button disabled={props.disabled} onClick={props.onConvert} className="exchange-button">
					{appConfig.convertButtonName}
				</button>
			</div>

		</div>
	);
};

export default DoExchange;

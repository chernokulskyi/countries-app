import React from 'react';
import styled from 'styled-components';

export const Spinner: React.FC = () => (
	<SWrapper>
		<SSpinner viewBox='0 0 50 50'>
			<circle
				className='path'
				cx='25'
				cy='25'
				r='20'
				fill='none'
				strokeWidth='4'
			/>
		</SSpinner>
	</SWrapper>
);

const SWrapper = styled.div`
	width: 400px;
	margin: 0 auto;
	text-align: center;
`;

const SSpinner = styled.svg`
	animation: rotate 2s linear infinite;
	margin: -25px 0 0 -25px;
	width: 50px;
	height: 50px;

	& .path {
		stroke: var(--colors-text);
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`;

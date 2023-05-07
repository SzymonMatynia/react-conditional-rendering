import {PropsWithChildren, type ReactNode} from 'react';

interface Props {
	when: boolean;
	fallback: ReactNode;
}

const Show = ({when, fallback, children}: PropsWithChildren<Props>) => {
	return (
		<>
			{
				when ?
					children :
					fallback
			}
		</>
	)
}

export default Show;

import React from 'react'
import styles from './style.module.scss'

export default function Circle({ 
	backgroundColor = '#fff', 
	borderColor = '#fff',
	children,
	style
}) {
	
	return (
		<div 
			className={styles.circle} 
			style={{ 
				...style, 
				backgroundColor,
				border: `1px solid ${borderColor}` 
			}}
		>
			{children}
		</div>
	)
}

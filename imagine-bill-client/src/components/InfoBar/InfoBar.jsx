import React from 'react'
import './infobar.css'

export default function InfoBar({ data }) {
	return (
		<div className='secundary-color-background-400 content-infobar'>
			<p className='body-regular grises-1000 title-infobar'>
				{data}
			</p>
		</div>
	)
}

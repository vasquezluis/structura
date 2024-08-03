'use client'

import { useState, useEffect } from 'react'

import MarkmapView from '@/components/response/Markmap'
import Tables from '@/components/response/Tables'
import Flow from '@/components/response/Flow'

const code = `
# SQL Schema Overview
## Tables
`

const page = () => {
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		setMarkdown(code)
	}, [])

	return (
		<main className='flex flex-col h-screen w-full items-center justify-center'>
			{/* <div>
				<textarea
					value={markdown}
					onChange={(e) => {
						setMarkdown(e.target.value)
					}}
				/>
			</div> */}
			{/* <button
				onClick={() => {
					setmermaidCode(mermaid2)
				}}
			>
				Change mermaid
			</button> */}
			<div>
				
			</div>
			<div className='flex h-1/2 w-1/2 items-center justify-center'>
				<Tables dataStream={markdown} />
				<MarkmapView markdown={markdown} />
				<Flow />
			</div>
		</main>
	)
}

export default page

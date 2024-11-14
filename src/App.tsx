import DomainTitle from "./components/DomainTitle"
import Underline from "./components/ui/underline"
import Centering from "./layouts/Centering"
import Editor from 'react-simple-code-editor'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import { useCallback, useState } from "react";
import { sleep } from "./lib/utils";
import { useEffectOnce } from "./hooks/useEffectOnce";
import Techstack from "./components/Techstack";


const initialCode = `
function introduction(...args){
   const [name = "Emanuel Eirich", role="Software engineer"] = args
   To who it may concern,

   my name is Emanuel Eirich, I'm an steadily improving software engineer with a passion for web development, 
   but I am also interested in every other aspect of programming. 
   
   I have experience with React, Next.js, Node.js, CSS, HTML, Flask, MongoDB, Postgres and several frameworks for web development. 
   
   Furthermore, I am acquainted with Git, Docker, Python, Java, Nginx and I'm always looking for new challenges and opportunities to learn and grow. 
   I'm a fast learner and a team player, and I'm always looking for ways to improve my skills and knowledge.
   
   Feel free to roam around my website and check out my projects, or contact me if you have any questions or opportunities for me.

   Kind regards,

   Emanuel Eirich
}
introduction()
   `.split("")

function App() {
   const [code, setCode] = useState<string>("")
   const [mount, setMount] = useState<boolean>(false)

   const typeCode = useCallback(async () => {
      if (mount) return
		for (let i = 0; i < initialCode.length; ++i) {
			await sleep(~~(Math.random() * 10))
			setCode((prev) => prev + initialCode[i])
		}
      setMount(true)
   }, [mount])

   useEffectOnce(() => {
		typeCode()
   })


   return (
		<>
			<Centering className="mt-20 flex-col">
				<h1 className="text-center">
					<DomainTitle />
					<Underline className="my-2" />
				</h1>
				<Editor
					className="mt-6 rounded-lg bg-secondary text-primary"
					value={code}
					onValueChange={(code) => mount && setCode(code)}
					highlight={(code) => highlight(code, languages.js)}
					padding={10}
					disabled={!mount}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 12,
					}}
               />
               {mount && <Techstack className="mt-6" />}
			</Centering>
		</>
   )
}

export default App

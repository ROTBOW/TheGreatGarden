

const Hibiscus = ({color}) => {

    return (
        <div className="w-full flex justify-center">
        <div className="border flex flex-col justify-center w-fit h-auto rounded-xl p-2 mb-5">
            <pre className="font-mono md:text-xl text-xs">
                <code style={{color: color}}>{`
                                     ▓▓▓▓▓▓                     
                                   ▓▓▒▒▒▒▒▒▓▓▓▓          ▒▒  ▒▒ 
                                   ▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓        ░░   
                             ▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓  ░░  ▒▒ 
                         ▓▓▓▓▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒░░       
                       ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▓▓▒▒░░▒▒▒▒     
                     ▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▓▓▒▒░░▒▒▒▒▓▓     
                     ▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▓▓░░░░▒▒▒▒▒▒▒▒▓▓   
                       ▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓██░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓`}</code><br/>
<code className="text-green-600">{`          ██████▓▓██`}</code><code style={{color:color}}>{`     ▓▓▓▓▒▒▒▒▓▓▓▓██████░░██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓  `}</code><br/>
<code className="text-green-600">{`     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`}</code><code style={{color:color}}>{`        ▓▓▓▓▓▓▓▓▓▓██░░████▓▓▓▓▒▒▓▓▓▓▓▓▓▓    `}</code><br/>
<code className="text-green-600">{`   ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ▓▓`}</code><code style={{color:color}}>{`▓▓▓▓▒▒▒▒▓▓████████▓▓▒▒▒▒▒▒▒▒▒▒▓▓    `}</code><br/>
<code className="text-green-600">{` ▓▓▓▓▓▓▓▓  ░░  ░░░░  ▓▓    ▓▓`}</code><code style={{color:color}}>{`▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  `}</code><br/>
<code className="text-green-600">{` ▓▓          ▓▓▓▓▓▓    ▓▓▓▓  `}</code><code style={{color:color}}>{`▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓  `}</code><br/>
<code className="text-green-600">{`         ░░░░▓▓▓▓▓▓▓▓    ▓▓  `}</code><code style={{color:color}}>{`▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▓▓  `}</code><br/>
<code className="text-green-600">{`     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓  `}</code><code style={{color:color}}>{`▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▒▒▓▓  `}</code><br/>
<code className="text-green-600">{`   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ▓▓  `}</code><code style={{color:color}}>{`▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒▒▒▒▒▓▓    `}</code><br/>
<code className="text-green-600">{` ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    ▓▓  `}</code><code style={{color:color}}>{`▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓  ▓▓▒▒▒▒▒▒▓▓    `}</code><br/>
<code className="text-green-600">{` ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓        ▓▓    `}</code><code style={{color:color}}>{`▓▓▓▓▒▒▒▒▒▒▒▒▓▓      ▓▓▓▓▓▓      `}</code><br/>
<code className="text-green-600">{`       ▓▓▓▓▓▓░░    ▓▓    ▓▓         `}</code><code style={{color:color}}>{` ▓▓▓▓▓▓▓▓                    `}</code><br/>
<code className="text-green-600">{`       ░░  ▒▒      ░░▒▒  ▓▓            `}</code><code style={{color:color}}>{`░░░░░░                    `}</code><br/>
<code className="text-green-600">{`                     ▓▓  ▓▓                                     
                     ▓▓  ▓▓                                     
                       ▓▓▓▓                                     
                       ▓▓                                       
                       ▓▓                                       
                       ▓▓                                       
                       ▓▓                                       
                       ▓▓`}
                </code>
            </pre>
        </div>
        </div>
    )
}


export default Hibiscus;
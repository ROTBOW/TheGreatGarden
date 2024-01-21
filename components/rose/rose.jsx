



const Rose = ({color}) => {

    return (
        <div className="w-full flex justify-center">
        <div className="border flex flex-col justify-center w-fit h-auto rounded-xl p-2 mb-5">
            <pre>
                <code className="font-mono md:text-xl text-xs" style={{color: color}}>{`                            __
                     ___  _// \\
                   _/   \\/__|_ \\
                  /  __//_/==\\_| ___
                / | / /|// == \\ \\   /
                |  | |\\\\|| //_\\ | |_/
                \\  \\ \\\\ / \\_/| || \\
                  \\___/\\\\| _  ///___\\
                    \\__|\\_\\=//_// _\\_|
                       \\___\\_____/
                         \\____/`}</code> <br/>
                <code className="font-mono md:text-xl text-xs text-green-600">{`                     !!
                      !!
           ___        !!      __ ___ _
          |\\|  \\       !!_.-~~ /|\\-  \\~-._
          | -\\| |      !!/   /  | |\\- | |\\ \\
           \\__-\\|______ !!  |    \\___\\|  \\_\\|
     _____ _.-~/|\\     \\\\!!  \\  |  /       ~-.
   /     /|  / /|  \\    \\\\!!    \\ /          |\\~-
 /  ---/| | |   |\\  |     !!                 \\__|
| ---/| | |  \\ /|  /      !!
| -/| |  /     \\|/        !!
|/____ /                  !!
                          !!`}</code>
            </pre>
        </div>
        </div>
    )
}

export default Rose;
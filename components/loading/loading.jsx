import style from './loading.module.css';


const Loading = () => {

    return (
        <div className="flex flex-col space-between items-center pt-20 leading-tight">
            <div className={`${style.layer} text-5xl text-red-500`} style={{animationDelay: '1.5s', padding: '0'}}>❀</div>
            <div className={`${style.layer} text-green-500`} style={{animationDelay: '1s', padding: '0'}}>🙕|⠀⠀</div>
            <div className={`${style.layer} text-green-500`} style={{animationDelay: '0.5s'}}>⠀|🙓</div>
            <div className={`${style.layer} text-yellow-800`} style={{padding: '0'}}>▃▃▃▃</div>
        </div>
    )
}


export default Loading;
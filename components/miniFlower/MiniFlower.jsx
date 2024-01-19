import style from './miniFlower.module.css';



const MiniFlower = ({color}) => {
    return (
        <div className="flex flex-col items-center leading-none">
            <div className={style.layer} style={{color: color, animationDelay: '1.5s', padding: '0', fontSize: '24px'}}>❀</div>
            <div className={`${style.layer} text-green-500`} style={{animationDelay: '1s', padding: '0', fontSize: '12px'}}>🙕|🙓</div>
        </div>
    )
}

export default MiniFlower;
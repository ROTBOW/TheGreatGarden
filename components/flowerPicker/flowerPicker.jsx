import Rose from '../rose/rose';
import Hibiscus from '../hibiscus/hibiscus';



const FlowerPicker = ({flower, color}) => {

    switch (flower) {
        
        case 'hibiscus':
            return <Hibiscus color={color}/>

        case "rose":
        default:
            return <Rose color={color}/>
        
    }
}



export default FlowerPicker;
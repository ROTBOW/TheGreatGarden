import Rose from '../rose/rose';



const FlowerPicker = ({flower, color}) => {

    switch (flower) {
        
        
        case "rose":
        default:
            return <Rose color={color}/>
        
    }
}



export default FlowerPicker;
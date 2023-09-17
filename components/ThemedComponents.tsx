import { Text, View } from "react-native"

type HeadingPropTypes={
    title:string,
    size?:number
}
export const Heading=({title,size=18}:HeadingPropTypes)=>{
    return (
        <View >
            <Text style={{color:'#000',fontSize:size,fontWeight:'bold'}}>
             {title}
            </Text>
        </View>
    )
}

export const Divider=()=>{
    return (
        <View style={{height:8,backgroundColor:'#F5F5F5'}}/>
    )
}
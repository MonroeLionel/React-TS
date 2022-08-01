import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {Story} from "@storybook/react";
import {actions} from "@storybook/addon-actions";


type OnOff = {
   onOff: boolean
   onChange: (e: boolean) => void
}


export default {
   title: 'OnOff ',
   component: OnOff,
}
const callback = actions()

const Template: Story<OnOff> = (args) => <OnOff {...args}/>;

export const OnMode = Template.bind({})
OnMode.args = {
   onOff: true,
}


// OnMode.args = {onOff: true}
//
// export const OffMode = Template.bind({})
// // @ts-ignore
//
// OffMode.args = {onOff: false}
//
//
// // export const testMode = () => (<OnOff {...actions('onClick')} onOff={true} onChange={x => x}/>);
// // export const OffMode = () => <OnOff onOff={false} onChange={actions}/>;
// // @ts-ignore
// // export const OffMode2 = () => <OnOff onOff={false} onChange={() => actions(true)}/>;
// //
// export const ModeChange = (arg) => {
//    console.log(arg, 'ModeChange')
//    const [value, setValue] = useState<boolean>(arg.switcher)
//    return <OnOff {...arg} onOff={arg.switcher} onChange={setValue}/>
// };
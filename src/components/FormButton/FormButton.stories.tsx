import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import { FormButton } from './FormButton'


export default {
    title: 'Example/FormButton',
    component: FormButton,
} as ComponentMeta<typeof FormButton>

const Template: ComponentStory<typeof FormButton> = (args) =>
    <FormButton {...args} />

export const FormButtonExample = Template.bind({})
FormButtonExample.args = {
    primary: true,
    value: 'Send',
    size: 'medium',
    position: 'end'
}
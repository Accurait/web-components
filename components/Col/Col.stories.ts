import type { Meta, StoryObj } from '@storybook/vue3'

import Col from './Col.vue'
import Row from '../Row/Row.vue'

const cols = ['DEFAULT', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'full']

const meta: Meta<typeof Col> = {
  title: 'Grid',
  component: Col,
  render: (args) => ({
    components: { Col, Row },
    setup() {
      return { args }
    },
    template: `
      <Row>
        <Col v-bind="args" class="bg-red-50"> {{args.content}} </Col>
        <Col v-bind="args" class="bg-green-50"> {{args.content}} </Col>
        <Col v-bind="args" class="bg-blue-50"> {{args.content}} </Col>
        <Col v-bind="args" class="bg-yellow-50"> {{args.content}} </Col>
        <Col v-bind="args" class="bg-purple-50"> {{args.content}} </Col>
      </Row>
    `,
  }),
  argTypes: {
    sm: { control: 'select', options: cols },
    md: { control: 'select', options: cols },
    lg: { control: 'select', options: cols },
    xl: { control: 'select', options: cols },
    '2xl': { control: 'select', options: cols },
  },
  args: {
    content:
      'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et  me',
    class: 'p-2',
  },
}

export default meta
type Story = StoryObj<typeof Col>

export const RowAndColumns: Story = {
  args: {},
}

import { Text, View } from '@tarojs/components'

import { SUBDIV_CHAIKIN_OPEN, subdivide } from '@thi.ng/geom-subdiv-curve'
import { Component, PropsWithChildren } from 'react'
import { AtButton } from 'taro-ui'

import 'taro-ui/dist/style/components/button.scss' // 按需引入
import './index.scss'

subdivide(
  [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100],
  ],
  SUBDIV_CHAIKIN_OPEN,
  1
)

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {
    subdivide(
      [
        [0, 0],
        [100, 0],
        [100, 100],
        [0, 100],
      ],
      SUBDIV_CHAIKIN_OPEN,
      1
    )
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>
          来
        </AtButton>
      </View>
    )
  }
}

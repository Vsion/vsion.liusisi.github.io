/**
 * Licensed Materials - Property of xxx.com
 * (C) Copyright 2022 xxx. All Rights Reserved.
 */

/**
 *
 * test
 *
 * @author rensiwei
 * @date 2022-12-19
 *
 */

import * as React from 'react';
import { useLocation, useSelector, history, Outlet } from '@umijs/max';
import { Input, NumberKeyboard, Toast, PasscodeInput, Button } from 'antd-mobile';
import { theme } from 'antd';
import { DemoBlock } from '@/components/demos';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import styles from './index.less';
import { audios } from '@/utils/constants'

let audio_ele: any
const pre = window.location.pathname === '/' ? '' : window.location.pathname
const audio_eles: any = {}
Object.keys(audios).forEach(item => {
  const src = pre + audios[item]
  const temp = new Audio(src);
  temp.src = src;
  temp.preload = 'auto';
  audio_eles[item] = temp
})

const Index = (props: any) => {
  const location = useLocation();
  const { token } = theme.useToken();
  // console.log('token', token)
  const user = useSelector((state: any) => state?.app?.user);
  React.useEffect(() => {}, []);
  const [visible, setVisible] = React.useState<any>('demo3')
  const [value, setValue] = React.useState<any>('0000')
  const [ending, setEnd] = React.useState<any>(false)
  const [playing, setPlaying] = React.useState<any>(false)

  const actions = {
    onClose: () => {
      Toast.show('closed')
      setVisible('')
    },
    onInput: (key: string) => {
      Toast.show(key)
      debugger
      setValue(key)
    },
    onDelete: () => {
      Toast.show('delete')
    },
    onConfirm: () => {
      debugger
    }
  }
  const play = () => {
    setPlaying(true)
    audio_ele && (audio_ele = null);
    const arr = [ audio_eles.before ]
    value.split('').forEach(item => {
      arr.push(audio_eles[parseInt(item)])
    })
    arr.push(audio_eles.after)
    let idx = 0
    const _deep = () => {
      audio_ele = arr[idx]
      if (audio_ele) {
        audio_ele.play();
        audio_ele.onended = () => {
          if (idx < arr.length -1) {
            idx++;
            _deep()
          } else {
            setPlaying(false)
          }
          return
        }
      }
    }
    _deep()
  }
  const onCancel = () => {
    setEnd(true)
    setPlaying(false)
    if (audio_ele) {
      audio_ele.pause()
      audio_ele && (audio_ele.currentTime = 0);
      audio_ele = null
    }
    setTimeout(() => {
      setEnd(false)
    }, 500)
  }
  const add = (count: number) => {
    const temp = (parseInt(value) + count) + ''
    const arr = temp.split('')
    while (arr.length < 4) {
      arr.unshift('0')
    }
    setValue(arr.join(''))
  }
  return (
    <div className={styles.wrapper}>
      <DemoBlock className={styles.inputwrapper}>
        <Button
          disabled={ending || playing}
          className={styles.leftbtn}
          onClick={() => {
            add(-1)
          }}
        >
          <MinusOutlined />
        </Button>
        <PasscodeInput
          seperated
          onChange={(_value: any) => {
            if (isNaN(_value)) return
            setValue(_value)
          }}
          className={styles.input}
          length={4}
          value={value}
          plain
          // keyboard={<NumberKeyboard
          //   confirmText="确定"
          //   onInput={() => {
          //     debugger
          //   }}
          // />}
        />
        <Button
          className={styles.rightbtn}
          disabled={ending || playing}
          onClick={() => {
            add(1)
          }}
        >
          <PlusOutlined />
        </Button>
        <div className={styles.btns}>
          <Button loading={playing} block color="primary" onClick={play} className={styles.primary} size="large">
            叫号
          </Button>
          <Button loading={ending} onClick={onCancel} block color="danger" size="large">
            取消
          </Button>
          <Button className={styles.reset} onClick={() => {
            onCancel()
            setValue('0000')
            audio_ele = null
          }} block color="danger" size="large">
            重置
          </Button>
        </div>
      </DemoBlock>
    </div>
  )
}

export default Index;

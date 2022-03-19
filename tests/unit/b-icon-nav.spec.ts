import { shallowMount, VueWrapper } from '@vue/test-utils'
import BIconNav from '@/components/b-icon-nav/b-icon-nav.vue'

let wrapper: VueWrapper<any>

describe('b-icon-nav', () => {
  beforeAll(() => {
    wrapper = shallowMount(BIconNav, {
      props: {
        title: '主站',
      },
      slots: {
        default: '<span>是主站啊</span>'
      }
    })
  })

  it('renders slot when passed', () => {
    expect(wrapper.findAll('span').length).toBe(2)
    expect(wrapper.get('span:first-child').text()).toBe('是主站啊')
    expect(wrapper.get('.title').text()).toBe('主站')  
  })
})

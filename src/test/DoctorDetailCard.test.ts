import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DoctorDetailCard from '@/components/DoctorDetailCard.vue'

const mockDoctor = {
  id: '1',
  firstName: 'Jane',
  lastName: 'Doe',
  state: 'New York',
  dob: '1990-01-01',
  signedUpDate: '2023-01-01'
}

describe('DoctorDetailCard.vue', () => {
  it('renders doctor details when doctor is provided', () => {
    const wrapper = mount(DoctorDetailCard, {
      props: {
        doctor: mockDoctor,
        loading: false,
        error: null
      }
    })

    expect(wrapper.text()).toContain('Dr. Jane Doe')
    expect(wrapper.text()).toContain('New York')
  })

  it('shows loading state', () => {
    const wrapper = mount(DoctorDetailCard, {
      props: { doctor: undefined, loading: true, error: null }
    })

    expect(wrapper.text()).toContain('Loading doctor details...')
  })

  it('shows error message', () => {
    const wrapper = mount(DoctorDetailCard, {
      props: { doctor: undefined, loading: false, error: 'Something went wrong' }
    })

    expect(wrapper.text()).toContain('Something went wrong')
  })

  it('shows not found when no doctor', () => {
    const wrapper = mount(DoctorDetailCard, {
      props: { doctor: undefined, loading: false, error: null }
    })

    expect(wrapper.text()).toContain('Doctor not found.')
  })
})

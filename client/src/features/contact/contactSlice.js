import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const encodeFormData = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export const submitContact = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': 'contact', ...formData }),
      })
      if (!res.ok) return rejectWithValue('Failed to send message.')
      return { success: true }
    } catch {
      return rejectWithValue('Network error. Please try again.')
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    form: { name: '', email: '', subject: '', message: '' },
    status: 'idle', // idle | loading | success | error
    error: null,
  },
  reducers: {
    updateField(state, action) {
      state.form[action.payload.field] = action.payload.value
    },
    resetForm(state) {
      state.form = { name: '', email: '', subject: '', message: '' }
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitContact.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(submitContact.fulfilled, state => {
        state.status = 'success'
        state.form = { name: '', email: '', subject: '', message: '' }
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload
      })
  },
})

export const { updateField, resetForm } = contactSlice.actions
export default contactSlice.reducer

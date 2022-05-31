<template>
  <div class="file-reader">
    <slot
      name="reader"
      :accept="accept"
      :onchange="handleOnChange"
    >
    <v-icon v-show="isPencilActive==false" @click="isPencilActive = true" class="pencil">mdi-pencil</v-icon>
      <input
      v-if="isPencilActive== true"
        type="file"
        class="file-reader__control"
        :accept="accept"
        @change="handleOnChange"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'file-reader',
  props: {
    accept: {
      type: String,
      default: () => ('')
    },
    output: {
      type: String,
      default: () => ('text')
    }
  },
  data(){
    return{
      isPencilActive : false,
    }
  },
  methods: {
    handleOnChange (evt) {
      const file = evt.target.files[0]
      if (!file) {
        return
      }
      if (!(file instanceof Blob)) {
        throw new TypeError('Must be a File or Blob')
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        const evtData = {
          file,
          data: e.target.result
        }
        this.$emit('reader-load', evtData)
      }
      reader.onerror = e => (new Error(`Error reading ${file.name}: ${e.target.result}`))
      switch (this.output) {
        case 'array':
          reader.readAsArrayBuffer(file)
          break
        case 'binary':
          reader.readAsBinaryString(file)
          break
        case 'data':
          reader.readAsDataURL(file)
          break
        default: reader.readAsText(file)
      }
      this.isPencilActive = false;
    }
  }
}
</script>

<style scoped>
.file-reader__control {
  padding: 5px;
  border: 1px solid #414141;
  outline: none!important;
}
.pencil{
  position: absolute;
  top: 58px;
  left: 500px;
}
</style>
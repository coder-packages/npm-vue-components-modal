# Vue modal

import modal
```html
<template>
	<div>
		<modal>
	      <div class="my-content">
	        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae dicta repellendus esse. Culpa impedit odio necessitatibus iusto, blanditiis excepturi.
	      </div>
	    </modal>

		<portal-target name="modals"></portal-target>
	</div>
</template>

<script>
import Modal from 'coder-vue-components-modal'
export default {
  components: {
    Modal
  }
}
<script>
```

in main.js add
```js
import PortalVue from 'portal-vue'

Vue.use(PortalVue)
```

/**
 * https://vuejs.org/guide/components/attrs.html#accessing-fallthrough-attributes-in-javascript
 * @description: make fall-through class attributes reactive
 */

export const useReactiveAttr = () => {
  const attrClass = ref('')
  const attrRest = ref<Record<string, unknown>>({})
  const { class: defaultAttrClass, ...rest } = useAttrs()
  attrClass.value = (defaultAttrClass || '') as string
  attrRest.value = rest

  onBeforeUpdate(() => {
    const { class: updatedAttrClass, ...rest } = useAttrs()
    attrClass.value = (updatedAttrClass || '') as string
    attrRest.value = rest
  })

  return {
    attrClass,
    attrRest,
  }
}

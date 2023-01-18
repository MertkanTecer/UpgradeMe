export default {
   addItem(state,payload)
   {
    state.inventory.push(payload)
   },
   placeItem(state,payload)
   {
      state.item = payload;
   },
   removeItem(state,payload)
   {
      const deletedItem = state.inventory.indexOf(payload)
      state.inventory.splice(deletedItem,1)
   },
   removeItemSlot(state)
   {
      state.item = null
      state.upgradedItem = null
      state.isUpgraded = false
   },
   upgradeItem(state,payload)
   {
      state.item = null
      state.upgradedItem = payload;
   },
   addScroll(state)
   {
      state.isScrollSlotted = true
   },
   removeScroll(state)
   {
      state.isScrollSlotted = false
   }

}
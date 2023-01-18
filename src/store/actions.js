export default {
    addItem(context,payload)
    {
        const item = payload;
        context.commit('addItem',item)
    },
    placeItem(context,payload)
    {   
        const item = payload
        context.commit('placeItem',item)
    },
    removeItem(context,payload)
    {
        context.commit('removeItem',payload)
    },
    removeItemSlot(context)
    {
        context.commit('removeItemSlot')
    },
    upgradeItem(context,payload)
    {
        let upgradeChance = 100
        let blessedChance = 0
        const rollDice = Math.floor(Math.random() * 101);
        console.log(rollDice);
        if(context.state.isScrollSlotted)
        {
            blessedChance = 20 / 100 ; 
        }
        else {
            blessedChance = 0 ; 
        }
        if(payload.rate == 1)
        {
             upgradeChance = 80 + (80 * blessedChance)
             console.log(upgradeChance);
        }
        else if (payload.rate == 2)
        {
            upgradeChance = 50 + (50 * blessedChance)
            console.log(upgradeChance);
        }
        else if (payload.rate == 3)
        {
            upgradeChance = 20 + (20 * blessedChance)
            console.log(upgradeChance);
        }
        else if ( payload.rate == 4)
        {
            upgradeChance = 4 + (4 * blessedChance)
            console.log(upgradeChance);
        }
        if(rollDice <= upgradeChance)
        {
        const index = context.state.items.indexOf(payload)
        const newItem = context.state.items[index + 1]
        context.commit("upgradeItem",newItem)
        console.log(newItem);
        context.state.isUpgraded = true
        }
        else {
            context.commit("removeItemSlot")
        }
    },
    addScroll(context)
    {
        context.commit("addScroll")
    },
    removeScroll(context)
    {
        context.commit("removeScroll")
    }
}
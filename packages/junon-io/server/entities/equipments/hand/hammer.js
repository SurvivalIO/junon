const MeleeEquipment = require("./melee_equipment")

const Protocol = require('../../../../common/util/protocol')
const Constants = require("../../../../common/constants.json")


class Hammer extends MeleeEquipment {
  onEquipmentConstructed() {
  }

  getType() {
    return Protocol.definition().BuildingType.Hammer
  }

  getConstantsTable() {
    return "Equipments.Hammer"
  }
}

module.exports = Hammer

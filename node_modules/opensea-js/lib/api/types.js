"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitDisplayType = exports.CollectionOrderByOption = void 0;
var CollectionOrderByOption;
(function (CollectionOrderByOption) {
    CollectionOrderByOption["CREATED_DATE"] = "created_date";
    CollectionOrderByOption["ONE_DAY_CHANGE"] = "one_day_change";
    CollectionOrderByOption["SEVEN_DAY_VOLUME"] = "seven_day_volume";
    CollectionOrderByOption["SEVEN_DAY_CHANGE"] = "seven_day_change";
    CollectionOrderByOption["NUM_OWNERS"] = "num_owners";
    CollectionOrderByOption["MARKET_CAP"] = "market_cap";
})(CollectionOrderByOption || (exports.CollectionOrderByOption = CollectionOrderByOption = {}));
/**
 * Trait display type returned by OpenSea API.
 * @category API Models
 */
var TraitDisplayType;
(function (TraitDisplayType) {
    TraitDisplayType["NUMBER"] = "number";
    TraitDisplayType["BOOST_PERCENTAGE"] = "boost_percentage";
    TraitDisplayType["BOOST_NUMBER"] = "boost_number";
    TraitDisplayType["AUTHOR"] = "author";
    TraitDisplayType["DATE"] = "date";
    /** "None" is used for string traits */
    TraitDisplayType["NONE"] = "None";
})(TraitDisplayType || (exports.TraitDisplayType = TraitDisplayType = {}));
//# sourceMappingURL=types.js.map
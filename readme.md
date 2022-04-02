al-pasaun or whatever not implemented yet.
pawns aren't checking the King.
BUG ALERT! - potentialPositionIdsBlack has length= 0, when filteringCheckedPositions of white, but only initially.
king is killing pieces where it'll get checked. Cause that positions isn't yet stored in potentialPositionIds.
# Happiness

Welcome to the Saturation and Happiness Information Site.

The Saturation and Happiness system for the Citizens are locked in one to the other. Which means that the Citizens require food (just like the player does) to be able to Work. The Citizens however will NOT die if their saturation goes down to 0, they will simply stop leveling anymore and will also request food in chat regularly as well as have slowness slowness effect. The Workers will stop working. This will also affect the overall happiness of each Citizen a well as the entire Town.

There is an overall colony happiness + individual worker happiness: Overall colony happiness is between 1-10 (initially set to 5)

Happiness depends on several factors; security, housing and saturation.

Every night there is a recalculation of the happiness based on the following:

If average colonist saturation is greater than 5 (+0.1 per level) if it's less than 5 (-0.1 per level).

If average colonist housing is greater than 1 (+0.1 per level)

If 1 guard level exists for each worker level (worker level 5 needs guard level 5 (hut))

+ 0.1 for each average level more -0.1 for each average worker less.

Each time a citizen is killed by a player it will decerease by -9 (Reset to lowest level = 1)

Each natural death of a citizen it will decrease by -1. Currently, their skills have NO level cap at all.

The Citizen Hunger System: The Citizen hunger system is between 0-10.

On 0 = no leveling anymore + he requests food in chat regularly + slowness effect. Workere stops working.

On less than 3 = no healing and -25% leveling speed.

Between 3 and 5 = - 10% leveling speed.

Between 5 and 7 = + 10% leveling speed.

Between 7 and 10 = + 25% leveling speed.

On 10 = double healing speed +25% leveling speed.

They refresh their saturation by eating, just like the player.

Saturation is displayed with the saturation bar in the citizen's GUI.

Every time they go to sleep (start the walk back to their Citizen Hut), they will decrease their saturation by 0.2 * worker hut level.

When they get home they search their chest for food and eat it if they have less than 10 in saturation.

The Deliveryman will not remove any type of food there is in the citizens' hut chests.

If the citizen has a happiness less than 7, the citizen will check his personal inventory and his own hut chest for food at night (quite constantly at night).

If he doesn't find any he sends a request to the deliveryman to fill up his hut chest with food (the deliveryman will take hutLevel food to that hut).

If there is no food in the warehouse -> player will receive the message.
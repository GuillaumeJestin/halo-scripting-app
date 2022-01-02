import FunctionType from "../types/function-type/FunctionType";

const CommonFunctions: FunctionType[] = [
	{
		symbol: "and",
		name: "and",
		description: "Returns true if all specified expressions are true.",
		arguments: [],
		additionalArguments: "boolean",
		returns: "boolean",
		id: "and"
	},
	{
		symbol: "or",
		name: "or",
		description: "Returns true if any specified expressions are true.",
		arguments: [],
		additionalArguments: "boolean",
		returns: "boolean",
		id: "or"
	},
	{
		symbol: "+",
		name: "+",
		description: "Returns the sum of all specified expressions.",
		arguments: [],
		additionalArguments: [
			"real",
			"short",
			"long"
		],
		returns: "real",
		id: "+"
	},
	{
		symbol: "-",
		name: "-",
		description: "Returns the difference of two expressions.",
		arguments: [
			[
				"real",
				"short",
				"long"
			],
			[
				"real",
				"short",
				"long"
			]
		],
		returns: "real",
		id: "-"
	},
	{
		symbol: "*",
		name: "*",
		description: "Returns the product of all specified expressions.",
		arguments: [],
		additionalArguments: [
			"real",
			"short",
			"long"
		],
		returns: "real",
		id: "*"
	},
	{
		symbol: "/",
		name: "/",
		description: "Returns the quotient of two expressions.",
		arguments: [
			[
				"real",
				"short",
				"long"
			],
			[
				"real",
				"short",
				"long"
			]
		],
		returns: "real",
		id: "/"
	},
	{
		symbol: "min",
		name: "min",
		description: "Returns the minimum of all specified expressions.",
		arguments: [],
		additionalArguments: [
			"real",
			"short",
			"long"
		],
		returns: "real",
		id: "min"
	},
	{
		symbol: "max",
		name: "max",
		description: "Returns the maximum of all specified expressions.",
		arguments: [],
		additionalArguments: [
			"real",
			"short",
			"long"
		],
		returns: "real",
		id: "max"
	},
	{
		symbol: "=",
		name: "=",
		description: "Returns true if two expressions are equal",
		arguments: [
			"any",
			"any"
		],
		returns: "boolean",
		id: "="
	},
	{
		symbol: "!=",
		name: "!=",
		description: "Returns true if two expressions are not equal",
		arguments: [
			"any",
			"any"
		],
		returns: "boolean",
		id: "!="
	},
	{
		symbol: ">",
		name: ">",
		description: "Returns true if the first number is larger than the second.",
		arguments: [
			[
				"real",
				"short",
				"long"
			],
			[
				"real",
				"short",
				"long"
			]
		],
		returns: "boolean",
		id: ">"
	},
	{
		symbol: "<",
		name: "<",
		description: "Returns true if the first number is smaller than the second.",
		arguments: [
			[
				"real",
				"short",
				"long"
			],
			[
				"real",
				"short",
				"long"
			]
		],
		returns: "boolean",
		id: "<"
	},
	{
		symbol: ">=",
		name: ">=",
		description: "Returns true if the first number is larger than or equal to the second.",
		arguments: [
			[
				"real",
				"short",
				"long"
			],
			[
				"real",
				"short",
				"long"
			]
		],
		returns: "boolean",
		id: ">="
	},
	{
		symbol: "<=",
		name: "<=",
		description: "Returns true if the first number is smaller than or equal to the second.",
		arguments: [
			[
				"real",
				"short",
				"long"
			],
			[
				"real",
				"short",
				"long"
			]
		],
		returns: "boolean",
		id: "<="
	},
	{
		symbol: "unit",
		name: "unit",
		description: "Converts an object to a unit.",
		arguments: [
			"object"
		],
		returns: "unit",
		id: "unit"
	},
	{
		symbol: "not",
		name: "not",
		description: "Returns the opposite of the expression.",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "not"
	},
	{
		symbol: "pin",
		name: "pin",
		description: "Returns the first value pinned between the second two",
		arguments: [
			"real",
			"real",
			"real"
		],
		returns: "real",
		id: "pin"
	},
	{
		symbol: "print",
		name: "print",
		description: "Prints a string to the console.",
		arguments: [
			"string"
		],
		id: "print"
	},
	{
		symbol: "players",
		name: "players",
		description: "Returns a list of the players (DO NOT USE TO COUNT PLAYERS IN COOP GAME, USE game_coop_player_count)",
		arguments: [],
		returns: "object_list",
		id: "players"
	},
	{
		symbol: "volume_teleport_players_not_inside",
		name: "volume_teleport_players_not_inside",
		description: "Moves all players outside a specified trigger volume to a specified flag.",
		arguments: [
			"trigger_volume",
			"cutscene_flag"
		],
		id: "volume_teleport_players_not_inside"
	},
	{
		symbol: "volume_test_object",
		name: "volume_test_object",
		description: "Returns true if the specified object is within the specified volume.",
		arguments: [
			"trigger_volume",
			"object"
		],
		returns: "boolean",
		id: "volume_test_object"
	},
	{
		symbol: "volume_test_objects",
		name: "volume_test_objects",
		description: "Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
		arguments: [
			"trigger_volume",
			"object_list"
		],
		returns: "boolean",
		id: "volume_test_objects"
	},
	{
		symbol: "volume_test_objects_all",
		name: "volume_test_objects_all",
		description: "Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
		arguments: [
			"trigger_volume",
			"object_list"
		],
		returns: "boolean",
		id: "volume_test_objects_all"
	},
	{
		symbol: "object_teleport",
		name: "object_teleport",
		description: "Moves the specified object to the specified flag.",
		arguments: [
			"object",
			"cutscene_flag"
		],
		id: "object_teleport"
	},
	{
		symbol: "object_set_facing",
		name: "object_set_facing",
		description: "Turns the specified object in the direction of the specified flag.",
		arguments: [
			"object",
			"cutscene_flag"
		],
		id: "object_set_facing"
	},
	{
		symbol: "object_set_shield",
		name: "object_set_shield",
		description: "Sets the shield vitality of the specified object (between 0 and 1).",
		arguments: [
			"object",
			"real"
		],
		id: "object_set_shield"
	},
	{
		symbol: "object_create",
		name: "object_create",
		description: "Creates an object from the scenario.",
		arguments: [
			"object_name"
		],
		id: "object_create"
	},
	{
		symbol: "object_destroy",
		name: "object_destroy",
		description: "Destroys an object.",
		arguments: [
			"object"
		],
		id: "object_destroy"
	},
	{
		symbol: "object_create_anew",
		name: "object_create_anew",
		description: "Creates an object, destroying it first if it already exists.",
		arguments: [
			"object_name"
		],
		id: "object_create_anew"
	},
	{
		symbol: "object_create_containing",
		name: "object_create_containing",
		description: "Creates all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		],
		id: "object_create_containing"
	},
	{
		symbol: "object_create_anew_containing",
		name: "object_create_anew_containing",
		description: "Creates anew all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		],
		id: "object_create_anew_containing"
	},
	{
		symbol: "object_destroy_containing",
		name: "object_destroy_containing",
		description: "Destroys all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		],
		id: "object_destroy_containing"
	},
	{
		symbol: "object_destroy_all",
		name: "object_destroy_all",
		description: "Destroys all non player objects.",
		arguments: [],
		id: "object_destroy_all"
	},
	{
		symbol: "objects_delete_by_definition",
		name: "objects_delete_by_definition",
		description: "Deletes all objects of type <definition>",
		arguments: [
			"object_definition"
		],
		id: "objects_delete_by_definition"
	},
	{
		symbol: "list_get",
		name: "list_get",
		description: "Returns an item in an object list.",
		arguments: [
			"object_list",
			"short"
		],
		returns: "object",
		id: "list_get"
	},
	{
		symbol: "list_count",
		name: "list_count",
		description: "Returns the number of objects in a list",
		arguments: [
			"object_list"
		],
		returns: "short",
		id: "list_count"
	},
	{
		symbol: "list_count_not_dead",
		name: "list_count_not_dead",
		description: "Returns the number of objects in a list that aren't dead",
		arguments: [
			"object_list"
		],
		returns: "short",
		id: "list_count_not_dead"
	},
	{
		symbol: "effect_new",
		name: "effect_new",
		description: "Starts the specified effect at the specified flag.",
		arguments: [
			"effect",
			"cutscene_flag"
		],
		id: "effect_new"
	},
	{
		symbol: "damage_new",
		name: "damage_new",
		description: "Causes the specified damage at the specified flag.",
		arguments: [
			"damage",
			"cutscene_flag"
		],
		id: "damage_new"
	},
	{
		symbol: "objects_can_see_object",
		name: "objects_can_see_object",
		description: "Returns true if any of the specified units are looking within the specified number of degrees of the object.",
		arguments: [
			"object_list",
			"object",
			"real"
		],
		returns: "boolean",
		id: "objects_can_see_object"
	},
	{
		symbol: "objects_can_see_flag",
		name: "objects_can_see_flag",
		description: "Returns true if any of the specified units are looking within the specified number of degrees of the flag.",
		arguments: [
			"object_list",
			"cutscene_flag",
			"real"
		],
		returns: "boolean",
		id: "objects_can_see_flag"
	},
	{
		symbol: "objects_distance_to_object",
		name: "objects_distance_to_object",
		description: "Returns minimum distance from any of the specified objects to the specified destination object. (returns -1 if there are no objects to check)",
		arguments: [
			"object_list",
			"object"
		],
		returns: "real",
		id: "objects_distance_to_object"
	},
	{
		symbol: "objects_distance_to_flag",
		name: "objects_distance_to_flag",
		description: "Returns minimum distance from any of the specified objects to the specified flag. (returns -1 if there are no objects, or no flag, to check)",
		arguments: [
			"object_list",
			"cutscene_flag"
		],
		returns: "real",
		id: "objects_distance_to_flag"
	},
	{
		symbol: "script_recompile",
		name: "script_recompile",
		description: "Recompiles scripts.",
		arguments: [],
		id: "script_recompile"
	},
	{
		symbol: "script_doc",
		name: "script_doc",
		description: "Saves a file called hs_doc.txt with parameters for all script commands.",
		arguments: [],
		id: "script_doc"
	},
	{
		symbol: "help",
		name: "help",
		description: "Prints a description of the named function.",
		arguments: [
			"string"
		],
		id: "help"
	},
	{
		symbol: "random_range",
		name: "random_range",
		description: "Returns a random value in the range [lower bound, upper bound)",
		arguments: [
			"short",
			"short"
		],
		returns: "short",
		id: "random_range"
	},
	{
		symbol: "real_random_range",
		name: "real_random_range",
		description: "Returns a random value in the range [lower bound, upper bound)",
		arguments: [
			"real",
			"real"
		],
		returns: "real",
		id: "real_random_range"
	},
	{
		symbol: "physics_constants_reset",
		name: "physics_constants_reset",
		description: "Resets all physics constants to earthly values",
		arguments: [],
		id: "physics_constants_reset"
	},
	{
		symbol: "physics_set_gravity",
		name: "physics_set_gravity",
		description: "Set global gravity acceleration relative to halo standard gravity",
		arguments: [
			"real"
		],
		id: "physics_set_gravity"
	},
	{
		symbol: "breakable_surfaces_enable",
		name: "breakable_surfaces_enable",
		description: "Enables or disables breakability of all breakable surfaces on level",
		arguments: [
			"boolean"
		],
		id: "breakable_surfaces_enable"
	},
	{
		symbol: "recording_play",
		name: "recording_play",
		description: "Make the specified unit run the specified cutscene recording.",
		arguments: [
			"unit",
			"cutscene_recording"
		],
		returns: "boolean",
		id: "recording_play"
	},
	{
		symbol: "recording_play_and_delete",
		name: "recording_play_and_delete",
		description: "Make the specified unit run the specified cutscene recording, deletes the unit when the animation finishes.",
		arguments: [
			"unit",
			"cutscene_recording"
		],
		returns: "boolean",
		id: "recording_play_and_delete"
	},
	{
		symbol: "recording_play_and_hover",
		name: "recording_play_and_hover",
		description: "Make the specified vehicle run the specified cutscene recording, hovers the vehicle when the animation finishes.",
		arguments: [
			"vehicle",
			"cutscene_recording"
		],
		returns: "boolean",
		id: "recording_play_and_hover"
	},
	{
		symbol: "recording_kill",
		name: "recording_kill",
		description: "Kill the specified unit's cutscene recording.",
		arguments: [
			"unit"
		],
		id: "recording_kill"
	},
	{
		symbol: "recording_time",
		name: "recording_time",
		description: "Return the time remaining in the specified unit's cutscene recording.",
		arguments: [
			"unit"
		],
		returns: "short",
		id: "recording_time"
	},
	{
		symbol: "object_set_ranged_attack_inhibited",
		name: "object_set_ranged_attack_inhibited",
		description: "FALSE prevents object from using ranged attack",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_ranged_attack_inhibited"
	},
	{
		symbol: "object_set_melee_attack_inhibited",
		name: "object_set_melee_attack_inhibited",
		description: "FALSE prevents object from using melee attack",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_melee_attack_inhibited"
	},
	{
		symbol: "objects_dump_memory",
		name: "objects_dump_memory",
		description: "Debugs object memory usage",
		arguments: [],
		id: "objects_dump_memory"
	},
	{
		symbol: "object_set_scale",
		name: "object_set_scale",
		description: "Sets the scale for a given object and interpolates over the given number of frames to achieve that scale",
		arguments: [
			"object",
			"real",
			"short"
		],
		id: "object_set_scale"
	},
	{
		symbol: "objects_detach",
		name: "objects_detach",
		description: "Detaches from the given parent object the given child object",
		arguments: [
			"object",
			"object"
		],
		id: "objects_detach"
	},
	{
		symbol: "garbage_collect_now",
		name: "garbage_collect_now",
		description: "Causes all garbage objects except those visible to a player to be collected immediately",
		arguments: [],
		id: "garbage_collect_now"
	},
	{
		symbol: "object_cannot_take_damage",
		name: "object_cannot_take_damage",
		description: "Prevents an object from taking damage",
		arguments: [
			"object_list"
		],
		id: "object_cannot_take_damage"
	},
	{
		symbol: "object_can_take_damage",
		name: "object_can_take_damage",
		description: "Allows an object to take damage again",
		arguments: [
			"object_list"
		],
		id: "object_can_take_damage"
	},
	{
		symbol: "objects_predict",
		name: "objects_predict",
		description: "Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
		arguments: [
			"object_list"
		],
		id: "objects_predict"
	},
	{
		symbol: "object_type_predict",
		name: "object_type_predict",
		description: "Loads textures necessary to draw an object that's about to come on-screen.",
		arguments: [
			"object_definition"
		],
		id: "object_type_predict"
	},
	{
		symbol: "render_lights",
		name: "render_lights",
		description: "Enables/disables dynamic lights",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "render_lights"
	},
	{
		symbol: "scenery_get_animation_time",
		name: "scenery_get_animation_time",
		description: "Returns the number of ticks remaining in a custom animation (or zero, if the animation is over).",
		arguments: [
			"scenery"
		],
		returns: "short",
		id: "scenery_get_animation_time"
	},
	{
		symbol: "unit_can_blink",
		name: "unit_can_blink",
		description: "Allows a unit to blink or not (units never blink when they are dead)",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_can_blink"
	},
	{
		symbol: "unit_open",
		name: "unit_open",
		description: "Opens the hatches on the given unit",
		arguments: [
			"unit"
		],
		id: "unit_open"
	},
	{
		symbol: "unit_close",
		name: "unit_close",
		description: "Closes the hatches on a given unit",
		arguments: [
			"unit"
		],
		id: "unit_close"
	},
	{
		symbol: "unit_kill",
		name: "unit_kill",
		description: "Kills a given unit, no saving throw",
		arguments: [
			"unit"
		],
		id: "unit_kill"
	},
	{
		symbol: "unit_kill_silent",
		name: "unit_kill_silent",
		description: "Kills a given unit silently (doesn't make them play their normal death animation or sound)",
		arguments: [
			"unit"
		],
		id: "unit_kill_silent"
	},
	{
		symbol: "unit_get_custom_animation_time",
		name: "unit_get_custom_animation_time",
		description: "Returns the number of ticks remaining in a unit's custom animation (or zero, if the animation is over).",
		arguments: [
			"unit"
		],
		returns: "short",
		id: "unit_get_custom_animation_time"
	},
	{
		symbol: "unit_stop_custom_animation",
		name: "unit_stop_custom_animation",
		description: "Stops the custom animation running on the given unit.",
		arguments: [
			"unit"
		],
		id: "unit_stop_custom_animation"
	},
	{
		symbol: "unit_is_playing_custom_animation",
		name: "unit_is_playing_custom_animation",
		description: "Returns TRUE if the given unit is still playing a custom animation",
		arguments: [
			"unit"
		],
		returns: "boolean",
		id: "unit_is_playing_custom_animation"
	},
	{
		symbol: "unit_aim_without_turning",
		name: "unit_aim_without_turning",
		description: "Allows a unit to aim in place without turning",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_aim_without_turning"
	},
	{
		symbol: "unit_set_enterable_by_player",
		name: "unit_set_enterable_by_player",
		description: "Can be used to prevent the player from entering a vehicle",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_set_enterable_by_player"
	},
	{
		symbol: "unit_exit_vehicle",
		name: "unit_exit_vehicle",
		description: "Makes a unit exit its vehicle",
		arguments: [
			"unit"
		],
		id: "unit_exit_vehicle"
	},
	{
		symbol: "unit_set_maximum_vitality",
		name: "unit_set_maximum_vitality",
		description: "Sets a unit's maximum body and shield vitality",
		arguments: [
			"unit",
			"real",
			"real"
		],
		id: "unit_set_maximum_vitality"
	},
	{
		symbol: "units_set_maximum_vitality",
		name: "units_set_maximum_vitality",
		description: "Sets a group of units' maximum body and shield vitality",
		arguments: [
			"object_list",
			"real",
			"real"
		],
		id: "units_set_maximum_vitality"
	},
	{
		symbol: "unit_set_current_vitality",
		name: "unit_set_current_vitality",
		description: "Sets a unit's current body and shield vitality",
		arguments: [
			"unit",
			"real",
			"real"
		],
		id: "unit_set_current_vitality"
	},
	{
		symbol: "units_set_current_vitality",
		name: "units_set_current_vitality",
		description: "Sets a group of units' current body and shield vitality",
		arguments: [
			"object_list",
			"real",
			"real"
		],
		id: "units_set_current_vitality"
	},
	{
		symbol: "magic_melee_attack",
		name: "magic_melee_attack",
		description: "Causes player's unit to start a melee attack",
		arguments: [],
		id: "magic_melee_attack"
	},
	{
		symbol: "vehicle_riders",
		name: "vehicle_riders",
		description: "Returns a list of all riders in a vehicle",
		arguments: [
			"unit"
		],
		returns: "object_list",
		id: "vehicle_riders"
	},
	{
		symbol: "vehicle_driver",
		name: "vehicle_driver",
		description: "Returns the driver of a vehicle",
		arguments: [
			"unit"
		],
		returns: "unit",
		id: "vehicle_driver"
	},
	{
		symbol: "vehicle_gunner",
		name: "vehicle_gunner",
		description: "Returns the gunner of a vehicle",
		arguments: [
			"unit"
		],
		returns: "unit",
		id: "vehicle_gunner"
	},
	{
		symbol: "unit_get_health",
		name: "unit_get_health",
		description: "Returns the health [0,1] of the unit, returns -1 if the unit does not exist",
		arguments: [
			"unit"
		],
		returns: "real",
		id: "unit_get_health"
	},
	{
		symbol: "unit_get_shield",
		name: "unit_get_shield",
		description: "Returns the shield [0,1] of the unit, returns -1 if the unit does not exist",
		arguments: [
			"unit"
		],
		returns: "real",
		id: "unit_get_shield"
	},
	{
		symbol: "unit_get_total_grenade_count",
		name: "unit_get_total_grenade_count",
		description: "Returns the total number of grenades for the given unit, 0 if it does not exist",
		arguments: [
			"unit"
		],
		returns: "short",
		id: "unit_get_total_grenade_count"
	},
	{
		symbol: "unit_has_weapon",
		name: "unit_has_weapon",
		description: "Returns TRUE if the <unit> has <object> as a weapon, FALSE otherwise",
		arguments: [
			"unit",
			"object_definition"
		],
		returns: "boolean",
		id: "unit_has_weapon"
	},
	{
		symbol: "unit_has_weapon_readied",
		name: "unit_has_weapon_readied",
		description: "Returns TRUE if the <unit> has <object> as the primary weapon, FALSE otherwise",
		arguments: [
			"unit",
			"object_definition"
		],
		returns: "boolean",
		id: "unit_has_weapon_readied"
	},
	{
		symbol: "unit_doesnt_drop_items",
		name: "unit_doesnt_drop_items",
		description: "Prevents any of the given units from dropping weapons or grenades when they die",
		arguments: [
			"object_list"
		],
		id: "unit_doesnt_drop_items"
	},
	{
		symbol: "unit_impervious",
		name: "unit_impervious",
		description: "Prevents any of the given units from being knocked around or playing ping animations",
		arguments: [
			"object_list",
			"boolean"
		],
		id: "unit_impervious"
	},
	{
		symbol: "unit_suspended",
		name: "unit_suspended",
		description: "Stops gravity from working on the given unit",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_suspended"
	},
	{
		symbol: "device_set_never_appears_locked",
		name: "device_set_never_appears_locked",
		description: "Changes a machine's never_appears_locked flag, but only if paul is a bastard",
		arguments: [
			"device",
			"boolean"
		],
		id: "device_set_never_appears_locked"
	},
	{
		symbol: "device_get_power",
		name: "device_get_power",
		description: "Gets the current power of a named device",
		arguments: [
			"device"
		],
		returns: "real",
		id: "device_get_power"
	},
	{
		symbol: "device_set_power",
		name: "device_set_power",
		description: "Immediately sets the power of a named device to the given value",
		arguments: [
			"device",
			"real"
		],
		id: "device_set_power"
	},
	{
		symbol: "device_set_position",
		name: "device_set_position",
		description: "Set the desired position of the given device (used for devices without explicit device groups)",
		arguments: [
			"device",
			"real"
		],
		returns: "boolean",
		id: "device_set_position"
	},
	{
		symbol: "device_get_position",
		name: "device_get_position",
		description: "Gets the current position of the given device (used for devices without explicit device groups)",
		arguments: [
			"device"
		],
		returns: "real",
		id: "device_get_position"
	},
	{
		symbol: "device_set_position_immediate",
		name: "device_set_position_immediate",
		description: "Instantaneously changes the position of the given device (used for devices without explicit device groups",
		arguments: [
			"device",
			"real"
		],
		id: "device_set_position_immediate"
	},
	{
		symbol: "device_group_get",
		name: "device_group_get",
		description: "Returns the desired value of the specified device group.",
		arguments: [
			"device_group"
		],
		returns: "real",
		id: "device_group_get"
	},
	{
		symbol: "device_group_set_immediate",
		name: "device_group_set_immediate",
		description: "Instantaneously changes the value of the specified device group.",
		arguments: [
			"device_group",
			"real"
		],
		id: "device_group_set_immediate"
	},
	{
		symbol: "device_one_sided_set",
		name: "device_one_sided_set",
		description: "TRUE makes the given device one-sided (only able to be opened from one direction), FALSE makes it two-sided",
		arguments: [
			"device",
			"boolean"
		],
		id: "device_one_sided_set"
	},
	{
		symbol: "device_operates_automatically_set",
		name: "device_operates_automatically_set",
		description: "TRUE makes the given device open automatically when any biped is nearby, FALSE makes it not",
		arguments: [
			"device",
			"boolean"
		],
		id: "device_operates_automatically_set"
	},
	{
		symbol: "device_group_change_only_once_more_set",
		name: "device_group_change_only_once_more_set",
		description: "TRUE allows a device to change states only once",
		arguments: [
			"device_group",
			"boolean"
		],
		id: "device_group_change_only_once_more_set"
	},
	{
		symbol: "breakable_surfaces_reset",
		name: "breakable_surfaces_reset",
		description: "Restores all breakable surfaces",
		arguments: [],
		id: "breakable_surfaces_reset"
	},
	{
		symbol: "cheat_all_powerups",
		name: "cheat_all_powerups",
		description: "Drops all powerups near player",
		arguments: [],
		id: "cheat_all_powerups"
	},
	{
		symbol: "cheat_all_weapons",
		name: "cheat_all_weapons",
		description: "Drops all weapons near player",
		arguments: [],
		id: "cheat_all_weapons"
	},
	{
		symbol: "cheat_all_vehicles",
		name: "cheat_all_vehicles",
		description: "Drops all vehicles on player",
		arguments: [],
		id: "cheat_all_vehicles"
	},
	{
		symbol: "cheat_teleport_to_camera",
		name: "cheat_teleport_to_camera",
		description: "Teleports player to camera location",
		arguments: [],
		id: "cheat_teleport_to_camera"
	},
	{
		symbol: "cheats_load",
		name: "cheats_load",
		description: "Reloads the cheats.txt file",
		arguments: [],
		id: "cheats_load"
	},
	{
		symbol: "ai_attach",
		name: "ai_attach",
		description: "Attaches the specified unit to the specified encounter.",
		arguments: [
			"unit",
			"ai"
		],
		id: "ai_attach"
	},
	{
		symbol: "ai_detach",
		name: "ai_detach",
		description: "Detaches the specified unit from all AI.",
		arguments: [
			"unit"
		],
		id: "ai_detach"
	},
	{
		symbol: "ai_place",
		name: "ai_place",
		description: "Places the specified squad on the map.",
		arguments: [
			"ai"
		],
		id: "ai_place"
	},
	{
		symbol: "ai_kill",
		name: "ai_kill",
		description: "Instantly kills the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		id: "ai_kill"
	},
	{
		symbol: "ai_kill_silent",
		name: "ai_kill_silent",
		description: "Instantly and silently (no animation or sound played) kills the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		id: "ai_kill_silent"
	},
	{
		symbol: "ai_erase",
		name: "ai_erase",
		description: "Erases the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		id: "ai_erase"
	},
	{
		symbol: "ai_erase_all",
		name: "ai_erase_all",
		description: "Erases all AI.",
		arguments: [],
		id: "ai_erase_all"
	},
	{
		symbol: "ai_select",
		name: "ai_select",
		description: "Selects the specified squad.",
		arguments: [
			"ai"
		],
		id: "ai_select"
	},
	{
		symbol: "ai_set_deaf",
		name: "ai_set_deaf",
		description: "Enables or disables hearing for actors in the specified encounter.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_set_deaf"
	},
	{
		symbol: "ai_set_blind",
		name: "ai_set_blind",
		description: "Enables or disables sight for actors in the specified encounter.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_set_blind"
	},
	{
		symbol: "ai_migrate",
		name: "ai_migrate",
		description: "Makes all or part of an encounter move to another encounter.",
		arguments: [
			"ai",
			"ai"
		],
		id: "ai_migrate"
	},
	{
		symbol: "ai_allegiance",
		name: "ai_allegiance",
		description: "Creates an allegiance between two teams.",
		arguments: [
			"team",
			"team"
		],
		id: "ai_allegiance"
	},
	{
		symbol: "ai_allegiance_remove",
		name: "ai_allegiance_remove",
		description: "Destroys an allegiance between two teams.",
		arguments: [
			"team",
			"team"
		],
		id: "ai_allegiance_remove"
	},
	{
		symbol: "ai_living_count",
		name: "ai_living_count",
		description: "Return the number of living actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_living_count"
	},
	{
		symbol: "ai_living_fraction",
		name: "ai_living_fraction",
		description: "Return the fraction [0-1] of living actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "real",
		id: "ai_living_fraction"
	},
	{
		symbol: "ai_strength",
		name: "ai_strength",
		description: "Return the current strength (average body vitality from 0-1) of the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "real",
		id: "ai_strength"
	},
	{
		symbol: "ai_swarm_count",
		name: "ai_swarm_count",
		description: "Return the number of swarm actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_swarm_count"
	},
	{
		symbol: "ai_nonswarm_count",
		name: "ai_nonswarm_count",
		description: "Return the number of non-swarm actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_nonswarm_count"
	},
	{
		symbol: "ai_actors",
		name: "ai_actors",
		description: "Converts an ai reference to an object list.",
		arguments: [
			"ai"
		],
		returns: "object_list",
		id: "ai_actors"
	},
	{
		symbol: "ai_braindead",
		name: "ai_braindead",
		description: "Makes a group of actors braindead, or restores them to life (in their initial state)",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_braindead"
	},
	{
		symbol: "ai_braindead_by_unit",
		name: "ai_braindead_by_unit",
		description: "Makes a list of objects braindead, or restores them to life. if you pass in a vehicle index, it makes all actors in that vehicle braindead (including any built-in guns)",
		arguments: [
			"object_list",
			"boolean"
		],
		id: "ai_braindead_by_unit"
	},
	{
		symbol: "ai_disregard",
		name: "ai_disregard",
		description: "If TRUE, forces all actors to completely disregard the specified units, otherwise lets them acknowledge the units again",
		arguments: [
			"object_list",
			"boolean"
		],
		id: "ai_disregard"
	},
	{
		symbol: "ai_prefer_target",
		name: "ai_prefer_target",
		description: "If TRUE, *ALL* enemies will prefer to attack the specified units. if FALSE, removes the preference.",
		arguments: [
			"object_list",
			"boolean"
		],
		id: "ai_prefer_target"
	},
	{
		symbol: "ai_renew",
		name: "ai_renew",
		description: "Refreshes the health and grenade count of a group of actors, so they are as good as new",
		arguments: [
			"ai"
		],
		id: "ai_renew"
	},
	{
		symbol: "ai_is_attacking",
		name: "ai_is_attacking",
		description: "Returns whether a platoon is in the attacking mode (or if an encounter is specified, returns whether any platoon in that encounter is attacking)",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "ai_is_attacking"
	},
	{
		symbol: "ai_force_active",
		name: "ai_force_active",
		description: "Forces an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_force_active"
	},
	{
		symbol: "ai_force_active_by_unit",
		name: "ai_force_active_by_unit",
		description: "Forces a named actor that is NOT in an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
		arguments: [
			"unit",
			"boolean"
		],
		id: "ai_force_active_by_unit"
	},
	{
		symbol: "ai_playfight",
		name: "ai_playfight",
		description: "Sets an encounter to be playfighting or not",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_playfight"
	},
	{
		symbol: "ai_reconnect",
		name: "ai_reconnect",
		description: "Reconnects all AI information to the current structure bsp (use this after you create encounters or command lists in sapien, or place new firing points or command list points)",
		arguments: [],
		id: "ai_reconnect"
	},
	{
		symbol: "ai_berserk",
		name: "ai_berserk",
		description: "Forces a group of actors to start or stop berserking",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_berserk"
	},
	{
		symbol: "ai_set_team",
		name: "ai_set_team",
		description: "Makes an encounter change to a new team",
		arguments: [
			"ai",
			"team"
		],
		id: "ai_set_team"
	},
	{
		symbol: "ai_allow_dormant",
		name: "ai_allow_dormant",
		description: "Either enables or disables automatic dormancy for a group of actors",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_allow_dormant"
	},
	{
		symbol: "ai_allegiance_broken",
		name: "ai_allegiance_broken",
		description: "Returns whether two teams have an allegiance that is currently broken by traitorous behavior",
		arguments: [
			"team",
			"team"
		],
		returns: "boolean",
		id: "ai_allegiance_broken"
	},
	{
		symbol: "camera_control",
		name: "camera_control",
		description: "Toggles script control of the camera.",
		arguments: [
			"boolean"
		],
		id: "camera_control"
	},
	{
		symbol: "camera_set",
		name: "camera_set",
		description: "Moves the camera to the specified camera point over the specified number of ticks.",
		arguments: [
			"cutscene_camera_point",
			"short"
		],
		id: "camera_set"
	},
	{
		symbol: "camera_set_relative",
		name: "camera_set_relative",
		description: "Moves the camera to the specified camera point over the specified number of ticks (position is relative to the specified object).",
		arguments: [
			"cutscene_camera_point",
			"short",
			"object"
		],
		id: "camera_set_relative"
	},
	{
		symbol: "camera_set_first_person",
		name: "camera_set_first_person",
		description: "Makes the scripted camera follow a unit.",
		arguments: [
			"unit"
		],
		id: "camera_set_first_person"
	},
	{
		symbol: "camera_time",
		name: "camera_time",
		description: "Returns the number of ticks remaining in the current camera interpolation.",
		arguments: [],
		returns: "short",
		id: "camera_time"
	},
	{
		symbol: "debug_camera_load",
		name: "debug_camera_load",
		description: "Loads the saved camera position and facing.",
		arguments: [],
		id: "debug_camera_load"
	},
	{
		symbol: "debug_camera_save",
		name: "debug_camera_save",
		description: "Saves the camera position and facing.",
		arguments: [],
		id: "debug_camera_save"
	},
	{
		symbol: "debug_camera_save_name",
		name: "debug_camera_save_name",
		description: "Saves the camera position and facing to filename",
		arguments: [
			"string"
		],
		id: "debug_camera_save_name"
	},
	{
		symbol: "debug_camera_load_name",
		name: "debug_camera_load_name",
		description: "Loads the camera position and facing from filename",
		arguments: [
			"string"
		],
		id: "debug_camera_load_name"
	},
	{
		symbol: "debug_camera_load_text",
		name: "debug_camera_load_text",
		description: "Loads the camera position and facing from a passed in string",
		arguments: [
			"string"
		],
		id: "debug_camera_load_text"
	},
	{
		symbol: "game_difficulty_get",
		name: "game_difficulty_get",
		description: "Returns the current difficulty setting, but lies to you and will never return easy, instead returning normal",
		arguments: [],
		returns: "game_difficulty",
		id: "game_difficulty_get"
	},
	{
		symbol: "game_difficulty_get_real",
		name: "game_difficulty_get_real",
		description: "Returns the actual current difficulty setting without lying",
		arguments: [],
		returns: "game_difficulty",
		id: "game_difficulty_get_real"
	},
	{
		symbol: "map_reset",
		name: "map_reset",
		description: "Starts the map from the beginning.",
		arguments: [],
		id: "map_reset"
	},
	{
		symbol: "map_name",
		name: "map_name",
		description: "The same as game_start: launches a game for debugging purposes",
		arguments: [
			"string"
		],
		id: "map_name"
	},
	{
		symbol: "crash",
		name: "crash",
		description: "Crashes (for debugging).",
		arguments: [
			"string"
		],
		id: "crash"
	},
	{
		symbol: "version",
		name: "version",
		description: "Prints the build version.",
		arguments: [],
		id: "version"
	},
	{
		symbol: "ai_grenades",
		name: "ai_grenades",
		description: "Turns grenade inventory on or off.",
		arguments: [
			"boolean"
		],
		id: "ai_grenades"
	},
	{
		symbol: "fade_in",
		name: "fade_in",
		description: "Does a screen fade in from a particular color",
		arguments: [
			"real",
			"real",
			"real",
			"short"
		],
		id: "fade_in"
	},
	{
		symbol: "fade_out",
		name: "fade_out",
		description: "Does a screen fade out to a particular color",
		arguments: [
			"real",
			"real",
			"real",
			"short"
		],
		id: "fade_out"
	},
	{
		symbol: "cinematic_start",
		name: "cinematic_start",
		description: "Initializes game to start a cinematic (interruptive) cutscene",
		arguments: [],
		id: "cinematic_start"
	},
	{
		symbol: "cinematic_stop",
		name: "cinematic_stop",
		description: "Initializes the game to end a cinematic (interruptive) cutscene",
		arguments: [],
		id: "cinematic_stop"
	},
	{
		symbol: "cinematic_skip_start_internal",
		name: "cinematic_skip_start_internal",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "cinematic_skip_start_internal"
	},
	{
		symbol: "cinematic_skip_stop_internal",
		name: "cinematic_skip_stop_internal",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "cinematic_skip_stop_internal"
	},
	{
		symbol: "cinematic_show_letterbox",
		name: "cinematic_show_letterbox",
		description: "Sets or removes the letterbox bars",
		arguments: [
			"boolean"
		],
		id: "cinematic_show_letterbox"
	},
	{
		symbol: "cinematic_set_title",
		name: "cinematic_set_title",
		description: "Activates the chapter title",
		arguments: [
			"cutscene_title"
		],
		id: "cinematic_set_title"
	},
	{
		symbol: "cinematic_set_title_delayed",
		name: "cinematic_set_title_delayed",
		description: "Activates the chapter title, delayed by <real> seconds",
		arguments: [
			"cutscene_title",
			"real"
		],
		id: "cinematic_set_title_delayed"
	},
	{
		symbol: "cinematic_suppress_bsp_object_creation",
		name: "cinematic_suppress_bsp_object_creation",
		description: "Suppresses or enables the automatic creation of objects during cutscenes due to a bsp switch",
		arguments: [
			"boolean"
		],
		id: "cinematic_suppress_bsp_object_creation"
	},
	{
		symbol: "game_won",
		name: "game_won",
		description: "Causes the player to successfully finish the current level and move to the next",
		arguments: [],
		id: "game_won"
	},
	{
		symbol: "game_safe_to_save",
		name: "game_safe_to_save",
		description: "Returns FALSE if it would be a bad idea to save the player's game right now",
		arguments: [],
		returns: "boolean",
		id: "game_safe_to_save"
	},
	{
		symbol: "game_all_quiet",
		name: "game_all_quiet",
		description: "Returns FALSE if there are bad guys around, projectiles in the air, etc.",
		arguments: [],
		returns: "boolean",
		id: "game_all_quiet"
	},
	{
		symbol: "game_safe_to_speak",
		name: "game_safe_to_speak",
		description: "Returns FALSE if it would be a bad idea to play mission dialog right now",
		arguments: [],
		returns: "boolean",
		id: "game_safe_to_speak"
	},
	{
		symbol: "game_is_cooperative",
		name: "game_is_cooperative",
		description: "Returns TRUE if the game is cooperative",
		arguments: [],
		returns: "boolean",
		id: "game_is_cooperative"
	},
	{
		symbol: "game_save",
		name: "game_save",
		description: "Checks to see if it is safe to save game, then saves (gives up after 8 seconds)",
		arguments: [],
		id: "game_save"
	},
	{
		symbol: "game_save_cancel",
		name: "game_save_cancel",
		description: "Cancels any pending game_save, timeout or not",
		arguments: [],
		id: "game_save_cancel"
	},
	{
		symbol: "game_save_no_timeout",
		name: "game_save_no_timeout",
		description: "Checks to see if it is safe to save game, then saves (this version never gives up)",
		arguments: [],
		id: "game_save_no_timeout"
	},
	{
		symbol: "game_saving",
		name: "game_saving",
		description: "Checks to see if the game is trying to save the map.",
		arguments: [],
		returns: "boolean",
		id: "game_saving"
	},
	{
		symbol: "game_revert",
		name: "game_revert",
		description: "Causes the player to revert to their previous saved game (for testing and cinematic skipping only please!)",
		arguments: [],
		id: "game_revert"
	},
	{
		symbol: "game_reverted",
		name: "game_reverted",
		description: "Don't use this for anything, you black-hearted bastards.",
		arguments: [],
		returns: "boolean",
		id: "game_reverted"
	},
	{
		symbol: "core_save",
		name: "core_save",
		description: "Saves debug game state to core\\core.bin",
		arguments: [],
		id: "core_save"
	},
	{
		symbol: "core_load",
		name: "core_load",
		description: "Loads debug game state from core\\core.bin",
		arguments: [],
		id: "core_load"
	},
	{
		symbol: "core_load_name",
		name: "core_load_name",
		description: "Loads debug game state from core\\<path>",
		arguments: [
			"string"
		],
		id: "core_load_name"
	},
	{
		symbol: "sound_impulse_start",
		name: "sound_impulse_start",
		description: "Plays an impulse sound from the specified source object (or \"none\"), with the specified scale.",
		arguments: [
			"sound",
			"object",
			"real"
		],
		id: "sound_impulse_start"
	},
	{
		symbol: "sound_impulse_time",
		name: "sound_impulse_time",
		description: "Returns the time remaining for the specified impulse sound.",
		arguments: [
			"sound"
		],
		returns: "long",
		id: "sound_impulse_time"
	},
	{
		symbol: "sound_impulse_stop",
		name: "sound_impulse_stop",
		description: "Stops the specified impulse sound.",
		arguments: [
			"sound"
		],
		id: "sound_impulse_stop"
	},
	{
		symbol: "sound_looping_predict",
		name: "sound_looping_predict",
		description: "Your mom.",
		arguments: [
			"looping_sound"
		],
		id: "sound_looping_predict"
	},
	{
		symbol: "sound_looping_start",
		name: "sound_looping_start",
		description: "Plays a looping sound from the specified source object (or \"none\"), with the specified scale.",
		arguments: [
			"looping_sound",
			"object",
			"real"
		],
		id: "sound_looping_start"
	},
	{
		symbol: "sound_looping_stop",
		name: "sound_looping_stop",
		description: "Stops the specified looping sound.",
		arguments: [
			"looping_sound"
		],
		id: "sound_looping_stop"
	},
	{
		symbol: "sound_looping_set_scale",
		name: "sound_looping_set_scale",
		description: "Changes the scale of the sound (which should affect the volume) within the range 0 to 1.",
		arguments: [
			"looping_sound",
			"real"
		],
		id: "sound_looping_set_scale"
	},
	{
		symbol: "sound_looping_set_alternate",
		name: "sound_looping_set_alternate",
		description: "Enables or disables the alternate loop/alternate end for a looping sound.",
		arguments: [
			"looping_sound",
			"boolean"
		],
		id: "sound_looping_set_alternate"
	},
	{
		symbol: "debug_sounds_enable",
		name: "debug_sounds_enable",
		description: "Enables or disables all sound classes matching the substring.",
		arguments: [
			"string",
			"boolean"
		],
		id: "debug_sounds_enable"
	},
	{
		symbol: "sound_class_set_gain",
		name: "sound_class_set_gain",
		description: "Changes the gain on the specified sound class(es) to the specified gain over the specified number of ticks.",
		arguments: [
			"string",
			"real",
			"short"
		],
		id: "sound_class_set_gain"
	},
	{
		symbol: "vehicle_hover",
		name: "vehicle_hover",
		description: "Stops the vehicle from running real physics and runs fake hovering physics instead.",
		arguments: [
			"vehicle",
			"boolean"
		],
		id: "vehicle_hover"
	},
	{
		symbol: "players_unzoom_all",
		name: "players_unzoom_all",
		description: "Resets zoom levels on all players",
		arguments: [],
		id: "players_unzoom_all"
	},
	{
		symbol: "player_enable_input",
		name: "player_enable_input",
		description: "Toggle player input. the player can still free-look, but nothing else.",
		arguments: [
			"boolean"
		],
		id: "player_enable_input"
	},
	{
		symbol: "player_camera_control",
		name: "player_camera_control",
		description: "Enables/disables camera control globally",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "player_camera_control"
	},
	{
		symbol: "player_action_test_reset",
		name: "player_action_test_reset",
		description: "Resets the player action test state so that all tests will return false.",
		arguments: [],
		id: "player_action_test_reset"
	},
	{
		symbol: "player_action_test_jump",
		name: "player_action_test_jump",
		description: "Returns true if any player has jumped since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_jump"
	},
	{
		symbol: "player_action_test_primary_trigger",
		name: "player_action_test_primary_trigger",
		description: "Returns true if any player has used primary trigger since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_primary_trigger"
	},
	{
		symbol: "player_action_test_grenade_trigger",
		name: "player_action_test_grenade_trigger",
		description: "Returns true if any player has used grenade trigger since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_grenade_trigger"
	},
	{
		symbol: "player_action_test_zoom",
		name: "player_action_test_zoom",
		description: "Returns true if any player has hit the zoom button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_zoom"
	},
	{
		symbol: "player_action_test_action",
		name: "player_action_test_action",
		description: "Returns true if any player has hit the action key since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_action"
	},
	{
		symbol: "player_action_test_accept",
		name: "player_action_test_accept",
		description: "Returns true if any player has hit accept since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_accept"
	},
	{
		symbol: "player_action_test_back",
		name: "player_action_test_back",
		description: "Returns true if any player has pressed the back button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_back"
	},
	{
		symbol: "player_action_test_look_relative_up",
		name: "player_action_test_look_relative_up",
		description: "Returns true if any player has looked up since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_look_relative_up"
	},
	{
		symbol: "player_action_test_look_relative_down",
		name: "player_action_test_look_relative_down",
		description: "Returns true if any player has looked down since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_look_relative_down"
	},
	{
		symbol: "player_action_test_look_relative_left",
		name: "player_action_test_look_relative_left",
		description: "Returns true if any player has looked left since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_look_relative_left"
	},
	{
		symbol: "player_action_test_look_relative_right",
		name: "player_action_test_look_relative_right",
		description: "Returns true if any player has looked right since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_look_relative_right"
	},
	{
		symbol: "player_action_test_look_relative_all_directions",
		name: "player_action_test_look_relative_all_directions",
		description: "Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_look_relative_all_directions"
	},
	{
		symbol: "player_action_test_move_relative_all_directions",
		name: "player_action_test_move_relative_all_directions",
		description: "Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_move_relative_all_directions"
	},
	{
		symbol: "cls",
		name: "cls",
		description: "Clears console text from the screen",
		arguments: [],
		id: "cls"
	},
	{
		symbol: "player_effect_set_max_translation",
		name: "player_effect_set_max_translation",
		description: "<x> <y> <z>",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "player_effect_set_max_translation"
	},
	{
		symbol: "player_effect_set_max_rotation",
		name: "player_effect_set_max_rotation",
		description: "<yaw> <pitch> <roll>",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "player_effect_set_max_rotation"
	},
	{
		symbol: "player_effect_start",
		name: "player_effect_start",
		description: "<max_intensity> <attack time>",
		arguments: [
			"real",
			"real"
		],
		id: "player_effect_start"
	},
	{
		symbol: "player_effect_stop",
		name: "player_effect_stop",
		description: "<decay>",
		arguments: [
			"real"
		],
		id: "player_effect_stop"
	},
	{
		symbol: "script_screen_effect_set_value",
		name: "script_screen_effect_set_value",
		description: "Sets a screen effect script value",
		arguments: [
			"short",
			"real"
		],
		id: "script_screen_effect_set_value"
	},
	{
		symbol: "cinematic_screen_effect_start",
		name: "cinematic_screen_effect_start",
		description: "Starts screen effect pass TRUE to clear",
		arguments: [
			"boolean"
		],
		id: "cinematic_screen_effect_start"
	},
	{
		symbol: "cinematic_screen_effect_stop",
		name: "cinematic_screen_effect_stop",
		description: "Returns control of the screen effects to the rest of the game",
		arguments: [],
		id: "cinematic_screen_effect_stop"
	},
	{
		symbol: "cinematic_set_near_clip_distance",
		name: "cinematic_set_near_clip_distance",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"real"
		],
		id: "cinematic_set_near_clip_distance"
	},
	{
		symbol: "TestPrintBool",
		name: "TestPrintBool",
		description: "Prints the specified boolean with the format '<string> = '<boolean>' to the Shell.",
		arguments: [
			"string",
			"boolean"
		],
		id: "TestPrintBool"
	},
	{
		symbol: "TestPrintReal",
		name: "TestPrintReal",
		description: "Prints the specified boolean with the format '<string> = '<real>' to the Shell.",
		arguments: [
			"string",
			"real"
		],
		id: "TestPrintReal"
	}
];

export default CommonFunctions;

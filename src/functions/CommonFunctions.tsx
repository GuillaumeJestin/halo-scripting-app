import FunctionType from "../types/function-type/FunctionType";

const CommonFunctions: FunctionType[] = [
	{
		symbol: "and",
		name: "and",
		description: "Returns true if all specified expressions are true.",
		arguments: [],
		additionalArguments: "boolean",
		returns: "boolean"
	},
	{
		symbol: "or",
		name: "or",
		description: "Returns true if any specified expressions are true.",
		arguments: [],
		additionalArguments: "boolean",
		returns: "boolean"
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
		returns: "real"
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
		returns: "real"
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
		returns: "real"
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
		returns: "real"
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
		returns: "real"
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
		returns: "real"
	},
	{
		symbol: "=",
		name: "=",
		description: "Returns true if two expressions are equal",
		arguments: [
			"boolean",
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "!=",
		name: "!=",
		description: "Returns true if two expressions are not equal",
		arguments: [
			"boolean",
			"boolean"
		],
		returns: "boolean"
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
		returns: "boolean"
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
		returns: "boolean"
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
		returns: "boolean"
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
		returns: "boolean"
	},
	{
		symbol: "unit",
		name: "unit",
		description: "Converts an object to a unit.",
		arguments: [
			"object"
		],
		returns: "unit"
	},
	{
		symbol: "not",
		name: "not",
		description: "Returns the opposite of the expression.",
		arguments: [
			"boolean"
		],
		returns: "boolean"
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
		returns: "real"
	},
	{
		symbol: "print",
		name: "print",
		description: "Prints a string to the console.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "players",
		name: "players",
		description: "Returns a list of the players (DO NOT USE TO COUNT PLAYERS IN COOP GAME, USE game_coop_player_count)",
		arguments: [],
		returns: "object_list"
	},
	{
		symbol: "volume_teleport_players_not_inside",
		name: "volume_teleport_players_not_inside",
		description: "Moves all players outside a specified trigger volume to a specified flag.",
		arguments: [
			"trigger_volume",
			"cutscene_flag"
		]
	},
	{
		symbol: "volume_test_object",
		name: "volume_test_object",
		description: "Returns true if the specified object is within the specified volume.",
		arguments: [
			"trigger_volume",
			"object"
		],
		returns: "boolean"
	},
	{
		symbol: "volume_test_objects",
		name: "volume_test_objects",
		description: "Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
		arguments: [
			"trigger_volume",
			"object_list"
		],
		returns: "boolean"
	},
	{
		symbol: "volume_test_objects_all",
		name: "volume_test_objects_all",
		description: "Returns true if any of the specified objects are within the specified volume. trigger volume must have been postprocessed",
		arguments: [
			"trigger_volume",
			"object_list"
		],
		returns: "boolean"
	},
	{
		symbol: "object_teleport",
		name: "object_teleport",
		description: "Moves the specified object to the specified flag.",
		arguments: [
			"object",
			"cutscene_flag"
		]
	},
	{
		symbol: "object_set_facing",
		name: "object_set_facing",
		description: "Turns the specified object in the direction of the specified flag.",
		arguments: [
			"object",
			"cutscene_flag"
		]
	},
	{
		symbol: "object_set_shield",
		name: "object_set_shield",
		description: "Sets the shield vitality of the specified object (between 0 and 1).",
		arguments: [
			"object",
			"real"
		]
	},
	{
		symbol: "object_create",
		name: "object_create",
		description: "Creates an object from the scenario.",
		arguments: [
			"object_name"
		]
	},
	{
		symbol: "object_destroy",
		name: "object_destroy",
		description: "Destroys an object.",
		arguments: [
			"object"
		]
	},
	{
		symbol: "object_create_anew",
		name: "object_create_anew",
		description: "Creates an object, destroying it first if it already exists.",
		arguments: [
			"object_name"
		]
	},
	{
		symbol: "object_create_containing",
		name: "object_create_containing",
		description: "Creates all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "object_create_anew_containing",
		name: "object_create_anew_containing",
		description: "Creates anew all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "object_destroy_containing",
		name: "object_destroy_containing",
		description: "Destroys all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "object_destroy_all",
		name: "object_destroy_all",
		description: "Destroys all non player objects.",
		arguments: []
	},
	{
		symbol: "objects_delete_by_definition",
		name: "objects_delete_by_definition",
		description: "Deletes all objects of type <definition>",
		arguments: [
			"object_definition"
		]
	},
	{
		symbol: "list_get",
		name: "list_get",
		description: "Returns an item in an object list.",
		arguments: [
			"object_list",
			"short"
		],
		returns: "object"
	},
	{
		symbol: "list_count",
		name: "list_count",
		description: "Returns the number of objects in a list",
		arguments: [
			"object_list"
		],
		returns: "short"
	},
	{
		symbol: "list_count_not_dead",
		name: "list_count_not_dead",
		description: "Returns the number of objects in a list that aren't dead",
		arguments: [
			"object_list"
		],
		returns: "short"
	},
	{
		symbol: "effect_new",
		name: "effect_new",
		description: "Starts the specified effect at the specified flag.",
		arguments: [
			"effect",
			"cutscene_flag"
		]
	},
	{
		symbol: "damage_new",
		name: "damage_new",
		description: "Causes the specified damage at the specified flag.",
		arguments: [
			"damage",
			"cutscene_flag"
		]
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
		returns: "boolean"
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
		returns: "boolean"
	},
	{
		symbol: "objects_distance_to_object",
		name: "objects_distance_to_object",
		description: "Returns minimum distance from any of the specified objects to the specified destination object. (returns -1 if there are no objects to check)",
		arguments: [
			"object_list",
			"object"
		],
		returns: "real"
	},
	{
		symbol: "objects_distance_to_flag",
		name: "objects_distance_to_flag",
		description: "Returns minimum distance from any of the specified objects to the specified flag. (returns -1 if there are no objects, or no flag, to check)",
		arguments: [
			"object_list",
			"cutscene_flag"
		],
		returns: "real"
	},
	{
		symbol: "script_recompile",
		name: "script_recompile",
		description: "Recompiles scripts.",
		arguments: []
	},
	{
		symbol: "script_doc",
		name: "script_doc",
		description: "Saves a file called hs_doc.txt with parameters for all script commands.",
		arguments: []
	},
	{
		symbol: "help",
		name: "help",
		description: "Prints a description of the named function.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "random_range",
		name: "random_range",
		description: "Returns a random value in the range [lower bound, upper bound)",
		arguments: [
			"short",
			"short"
		],
		returns: "short"
	},
	{
		symbol: "real_random_range",
		name: "real_random_range",
		description: "Returns a random value in the range [lower bound, upper bound)",
		arguments: [
			"real",
			"real"
		],
		returns: "real"
	},
	{
		symbol: "physics_constants_reset",
		name: "physics_constants_reset",
		description: "Resets all physics constants to earthly values",
		arguments: []
	},
	{
		symbol: "physics_set_gravity",
		name: "physics_set_gravity",
		description: "Set global gravity acceleration relative to halo standard gravity",
		arguments: [
			"real"
		]
	},
	{
		symbol: "breakable_surfaces_enable",
		name: "breakable_surfaces_enable",
		description: "Enables or disables breakability of all breakable surfaces on level",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "recording_play",
		name: "recording_play",
		description: "Make the specified unit run the specified cutscene recording.",
		arguments: [
			"unit",
			"cutscene_recording"
		],
		returns: "boolean"
	},
	{
		symbol: "recording_play_and_delete",
		name: "recording_play_and_delete",
		description: "Make the specified unit run the specified cutscene recording, deletes the unit when the animation finishes.",
		arguments: [
			"unit",
			"cutscene_recording"
		],
		returns: "boolean"
	},
	{
		symbol: "recording_play_and_hover",
		name: "recording_play_and_hover",
		description: "Make the specified vehicle run the specified cutscene recording, hovers the vehicle when the animation finishes.",
		arguments: [
			"vehicle",
			"cutscene_recording"
		],
		returns: "boolean"
	},
	{
		symbol: "recording_kill",
		name: "recording_kill",
		description: "Kill the specified unit's cutscene recording.",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "recording_time",
		name: "recording_time",
		description: "Return the time remaining in the specified unit's cutscene recording.",
		arguments: [
			"unit"
		],
		returns: "short"
	},
	{
		symbol: "object_set_ranged_attack_inhibited",
		name: "object_set_ranged_attack_inhibited",
		description: "FALSE prevents object from using ranged attack",
		arguments: [
			"object",
			"boolean"
		]
	},
	{
		symbol: "object_set_melee_attack_inhibited",
		name: "object_set_melee_attack_inhibited",
		description: "FALSE prevents object from using melee attack",
		arguments: [
			"object",
			"boolean"
		]
	},
	{
		symbol: "objects_dump_memory",
		name: "objects_dump_memory",
		description: "Debugs object memory usage",
		arguments: []
	},
	{
		symbol: "object_set_scale",
		name: "object_set_scale",
		description: "Sets the scale for a given object and interpolates over the given number of frames to achieve that scale",
		arguments: [
			"object",
			"real",
			"short"
		]
	},
	{
		symbol: "objects_detach",
		name: "objects_detach",
		description: "Detaches from the given parent object the given child object",
		arguments: [
			"object",
			"object"
		]
	},
	{
		symbol: "garbage_collect_now",
		name: "garbage_collect_now",
		description: "Causes all garbage objects except those visible to a player to be collected immediately",
		arguments: []
	},
	{
		symbol: "object_cannot_take_damage",
		name: "object_cannot_take_damage",
		description: "Prevents an object from taking damage",
		arguments: [
			"object_list"
		]
	},
	{
		symbol: "object_can_take_damage",
		name: "object_can_take_damage",
		description: "Allows an object to take damage again",
		arguments: [
			"object_list"
		]
	},
	{
		symbol: "objects_predict",
		name: "objects_predict",
		description: "Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
		arguments: [
			"object_list"
		]
	},
	{
		symbol: "object_type_predict",
		name: "object_type_predict",
		description: "Loads textures necessary to draw an object that's about to come on-screen.",
		arguments: [
			"object_definition"
		]
	},
	{
		symbol: "render_lights",
		name: "render_lights",
		description: "Enables/disables dynamic lights",
		arguments: [
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "scenery_get_animation_time",
		name: "scenery_get_animation_time",
		description: "Returns the number of ticks remaining in a custom animation (or zero, if the animation is over).",
		arguments: [
			"scenery"
		],
		returns: "short"
	},
	{
		symbol: "unit_can_blink",
		name: "unit_can_blink",
		description: "Allows a unit to blink or not (units never blink when they are dead)",
		arguments: [
			"unit",
			"boolean"
		]
	},
	{
		symbol: "unit_open",
		name: "unit_open",
		description: "Opens the hatches on the given unit",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "unit_close",
		name: "unit_close",
		description: "Closes the hatches on a given unit",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "unit_kill",
		name: "unit_kill",
		description: "Kills a given unit, no saving throw",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "unit_kill_silent",
		name: "unit_kill_silent",
		description: "Kills a given unit silently (doesn't make them play their normal death animation or sound)",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "unit_get_custom_animation_time",
		name: "unit_get_custom_animation_time",
		description: "Returns the number of ticks remaining in a unit's custom animation (or zero, if the animation is over).",
		arguments: [
			"unit"
		],
		returns: "short"
	},
	{
		symbol: "unit_stop_custom_animation",
		name: "unit_stop_custom_animation",
		description: "Stops the custom animation running on the given unit.",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "unit_is_playing_custom_animation",
		name: "unit_is_playing_custom_animation",
		description: "Returns TRUE if the given unit is still playing a custom animation",
		arguments: [
			"unit"
		],
		returns: "boolean"
	},
	{
		symbol: "unit_aim_without_turning",
		name: "unit_aim_without_turning",
		description: "Allows a unit to aim in place without turning",
		arguments: [
			"unit",
			"boolean"
		]
	},
	{
		symbol: "unit_set_enterable_by_player",
		name: "unit_set_enterable_by_player",
		description: "Can be used to prevent the player from entering a vehicle",
		arguments: [
			"unit",
			"boolean"
		]
	},
	{
		symbol: "unit_exit_vehicle",
		name: "unit_exit_vehicle",
		description: "Makes a unit exit its vehicle",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "unit_set_maximum_vitality",
		name: "unit_set_maximum_vitality",
		description: "Sets a unit's maximum body and shield vitality",
		arguments: [
			"unit",
			"real",
			"real"
		]
	},
	{
		symbol: "units_set_maximum_vitality",
		name: "units_set_maximum_vitality",
		description: "Sets a group of units' maximum body and shield vitality",
		arguments: [
			"object_list",
			"real",
			"real"
		]
	},
	{
		symbol: "unit_set_current_vitality",
		name: "unit_set_current_vitality",
		description: "Sets a unit's current body and shield vitality",
		arguments: [
			"unit",
			"real",
			"real"
		]
	},
	{
		symbol: "units_set_current_vitality",
		name: "units_set_current_vitality",
		description: "Sets a group of units' current body and shield vitality",
		arguments: [
			"object_list",
			"real",
			"real"
		]
	},
	{
		symbol: "magic_melee_attack",
		name: "magic_melee_attack",
		description: "Causes player's unit to start a melee attack",
		arguments: []
	},
	{
		symbol: "vehicle_riders",
		name: "vehicle_riders",
		description: "Returns a list of all riders in a vehicle",
		arguments: [
			"unit"
		],
		returns: "object_list"
	},
	{
		symbol: "vehicle_driver",
		name: "vehicle_driver",
		description: "Returns the driver of a vehicle",
		arguments: [
			"unit"
		],
		returns: "unit"
	},
	{
		symbol: "vehicle_gunner",
		name: "vehicle_gunner",
		description: "Returns the gunner of a vehicle",
		arguments: [
			"unit"
		],
		returns: "unit"
	},
	{
		symbol: "unit_get_health",
		name: "unit_get_health",
		description: "Returns the health [0,1] of the unit, returns -1 if the unit does not exist",
		arguments: [
			"unit"
		],
		returns: "real"
	},
	{
		symbol: "unit_get_shield",
		name: "unit_get_shield",
		description: "Returns the shield [0,1] of the unit, returns -1 if the unit does not exist",
		arguments: [
			"unit"
		],
		returns: "real"
	},
	{
		symbol: "unit_get_total_grenade_count",
		name: "unit_get_total_grenade_count",
		description: "Returns the total number of grenades for the given unit, 0 if it does not exist",
		arguments: [
			"unit"
		],
		returns: "short"
	},
	{
		symbol: "unit_has_weapon",
		name: "unit_has_weapon",
		description: "Returns TRUE if the <unit> has <object> as a weapon, FALSE otherwise",
		arguments: [
			"unit",
			"object_definition"
		],
		returns: "boolean"
	},
	{
		symbol: "unit_has_weapon_readied",
		name: "unit_has_weapon_readied",
		description: "Returns TRUE if the <unit> has <object> as the primary weapon, FALSE otherwise",
		arguments: [
			"unit",
			"object_definition"
		],
		returns: "boolean"
	},
	{
		symbol: "unit_doesnt_drop_items",
		name: "unit_doesnt_drop_items",
		description: "Prevents any of the given units from dropping weapons or grenades when they die",
		arguments: [
			"object_list"
		]
	},
	{
		symbol: "unit_impervious",
		name: "unit_impervious",
		description: "Prevents any of the given units from being knocked around or playing ping animations",
		arguments: [
			"object_list",
			"boolean"
		]
	},
	{
		symbol: "unit_suspended",
		name: "unit_suspended",
		description: "Stops gravity from working on the given unit",
		arguments: [
			"unit",
			"boolean"
		]
	},
	{
		symbol: "device_set_never_appears_locked",
		name: "device_set_never_appears_locked",
		description: "Changes a machine's never_appears_locked flag, but only if paul is a bastard",
		arguments: [
			"device",
			"boolean"
		]
	},
	{
		symbol: "device_get_power",
		name: "device_get_power",
		description: "Gets the current power of a named device",
		arguments: [
			"device"
		],
		returns: "real"
	},
	{
		symbol: "device_set_power",
		name: "device_set_power",
		description: "Immediately sets the power of a named device to the given value",
		arguments: [
			"device",
			"real"
		]
	},
	{
		symbol: "device_set_position",
		name: "device_set_position",
		description: "Set the desired position of the given device (used for devices without explicit device groups)",
		arguments: [
			"device",
			"real"
		],
		returns: "boolean"
	},
	{
		symbol: "device_get_position",
		name: "device_get_position",
		description: "Gets the current position of the given device (used for devices without explicit device groups)",
		arguments: [
			"device"
		],
		returns: "real"
	},
	{
		symbol: "device_set_position_immediate",
		name: "device_set_position_immediate",
		description: "Instantaneously changes the position of the given device (used for devices without explicit device groups",
		arguments: [
			"device",
			"real"
		]
	},
	{
		symbol: "device_group_get",
		name: "device_group_get",
		description: "Returns the desired value of the specified device group.",
		arguments: [
			"device_group"
		],
		returns: "real"
	},
	{
		symbol: "device_group_set_immediate",
		name: "device_group_set_immediate",
		description: "Instantaneously changes the value of the specified device group.",
		arguments: [
			"device_group",
			"real"
		]
	},
	{
		symbol: "device_one_sided_set",
		name: "device_one_sided_set",
		description: "TRUE makes the given device one-sided (only able to be opened from one direction), FALSE makes it two-sided",
		arguments: [
			"device",
			"boolean"
		]
	},
	{
		symbol: "device_operates_automatically_set",
		name: "device_operates_automatically_set",
		description: "TRUE makes the given device open automatically when any biped is nearby, FALSE makes it not",
		arguments: [
			"device",
			"boolean"
		]
	},
	{
		symbol: "device_group_change_only_once_more_set",
		name: "device_group_change_only_once_more_set",
		description: "TRUE allows a device to change states only once",
		arguments: [
			"device_group",
			"boolean"
		]
	},
	{
		symbol: "breakable_surfaces_reset",
		name: "breakable_surfaces_reset",
		description: "Restores all breakable surfaces",
		arguments: []
	},
	{
		symbol: "cheat_all_powerups",
		name: "cheat_all_powerups",
		description: "Drops all powerups near player",
		arguments: []
	},
	{
		symbol: "cheat_all_weapons",
		name: "cheat_all_weapons",
		description: "Drops all weapons near player",
		arguments: []
	},
	{
		symbol: "cheat_all_vehicles",
		name: "cheat_all_vehicles",
		description: "Drops all vehicles on player",
		arguments: []
	},
	{
		symbol: "cheat_teleport_to_camera",
		name: "cheat_teleport_to_camera",
		description: "Teleports player to camera location",
		arguments: []
	},
	{
		symbol: "cheats_load",
		name: "cheats_load",
		description: "Reloads the cheats.txt file",
		arguments: []
	},
	{
		symbol: "ai_attach",
		name: "ai_attach",
		description: "Attaches the specified unit to the specified encounter.",
		arguments: [
			"unit",
			"ai"
		]
	},
	{
		symbol: "ai_detach",
		name: "ai_detach",
		description: "Detaches the specified unit from all AI.",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "ai_place",
		name: "ai_place",
		description: "Places the specified squad on the map.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_kill",
		name: "ai_kill",
		description: "Instantly kills the specified encounter and/or squad.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_kill_silent",
		name: "ai_kill_silent",
		description: "Instantly and silently (no animation or sound played) kills the specified encounter and/or squad.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_erase",
		name: "ai_erase",
		description: "Erases the specified encounter and/or squad.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_erase_all",
		name: "ai_erase_all",
		description: "Erases all AI.",
		arguments: []
	},
	{
		symbol: "ai_select",
		name: "ai_select",
		description: "Selects the specified squad.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_set_deaf",
		name: "ai_set_deaf",
		description: "Enables or disables hearing for actors in the specified encounter.",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_set_blind",
		name: "ai_set_blind",
		description: "Enables or disables sight for actors in the specified encounter.",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_migrate",
		name: "ai_migrate",
		description: "Makes all or part of an encounter move to another encounter.",
		arguments: [
			"ai",
			"ai"
		]
	},
	{
		symbol: "ai_allegiance",
		name: "ai_allegiance",
		description: "Creates an allegiance between two teams.",
		arguments: [
			"team",
			"team"
		]
	},
	{
		symbol: "ai_allegiance_remove",
		name: "ai_allegiance_remove",
		description: "Destroys an allegiance between two teams.",
		arguments: [
			"team",
			"team"
		]
	},
	{
		symbol: "ai_living_count",
		name: "ai_living_count",
		description: "Return the number of living actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "short"
	},
	{
		symbol: "ai_living_fraction",
		name: "ai_living_fraction",
		description: "Return the fraction [0-1] of living actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "real"
	},
	{
		symbol: "ai_strength",
		name: "ai_strength",
		description: "Return the current strength (average body vitality from 0-1) of the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "real"
	},
	{
		symbol: "ai_swarm_count",
		name: "ai_swarm_count",
		description: "Return the number of swarm actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "short"
	},
	{
		symbol: "ai_nonswarm_count",
		name: "ai_nonswarm_count",
		description: "Return the number of non-swarm actors in the specified encounter and/or squad.",
		arguments: [
			"ai"
		],
		returns: "short"
	},
	{
		symbol: "ai_actors",
		name: "ai_actors",
		description: "Converts an ai reference to an object list.",
		arguments: [
			"ai"
		],
		returns: "object_list"
	},
	{
		symbol: "ai_braindead",
		name: "ai_braindead",
		description: "Makes a group of actors braindead, or restores them to life (in their initial state)",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_braindead_by_unit",
		name: "ai_braindead_by_unit",
		description: "Makes a list of objects braindead, or restores them to life. if you pass in a vehicle index, it makes all actors in that vehicle braindead (including any built-in guns)",
		arguments: [
			"object_list",
			"boolean"
		]
	},
	{
		symbol: "ai_disregard",
		name: "ai_disregard",
		description: "If TRUE, forces all actors to completely disregard the specified units, otherwise lets them acknowledge the units again",
		arguments: [
			"object_list",
			"boolean"
		]
	},
	{
		symbol: "ai_prefer_target",
		name: "ai_prefer_target",
		description: "If TRUE, *ALL* enemies will prefer to attack the specified units. if FALSE, removes the preference.",
		arguments: [
			"object_list",
			"boolean"
		]
	},
	{
		symbol: "ai_renew",
		name: "ai_renew",
		description: "Refreshes the health and grenade count of a group of actors, so they are as good as new",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_is_attacking",
		name: "ai_is_attacking",
		description: "Returns whether a platoon is in the attacking mode (or if an encounter is specified, returns whether any platoon in that encounter is attacking)",
		arguments: [
			"ai"
		],
		returns: "boolean"
	},
	{
		symbol: "ai_force_active",
		name: "ai_force_active",
		description: "Forces an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_force_active_by_unit",
		name: "ai_force_active_by_unit",
		description: "Forces a named actor that is NOT in an encounter to remain active (i.e. not freeze in place) even if there are no players nearby",
		arguments: [
			"unit",
			"boolean"
		]
	},
	{
		symbol: "ai_playfight",
		name: "ai_playfight",
		description: "Sets an encounter to be playfighting or not",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_reconnect",
		name: "ai_reconnect",
		description: "Reconnects all AI information to the current structure bsp (use this after you create encounters or command lists in sapien, or place new firing points or command list points)",
		arguments: []
	},
	{
		symbol: "ai_berserk",
		name: "ai_berserk",
		description: "Forces a group of actors to start or stop berserking",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_set_team",
		name: "ai_set_team",
		description: "Makes an encounter change to a new team",
		arguments: [
			"ai",
			"team"
		]
	},
	{
		symbol: "ai_allow_dormant",
		name: "ai_allow_dormant",
		description: "Either enables or disables automatic dormancy for a group of actors",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_allegiance_broken",
		name: "ai_allegiance_broken",
		description: "Returns whether two teams have an allegiance that is currently broken by traitorous behavior",
		arguments: [
			"team",
			"team"
		],
		returns: "boolean"
	},
	{
		symbol: "camera_control",
		name: "camera_control",
		description: "Toggles script control of the camera.",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "camera_set",
		name: "camera_set",
		description: "Moves the camera to the specified camera point over the specified number of ticks.",
		arguments: [
			"cutscene_camera_point",
			"short"
		]
	},
	{
		symbol: "camera_set_relative",
		name: "camera_set_relative",
		description: "Moves the camera to the specified camera point over the specified number of ticks (position is relative to the specified object).",
		arguments: [
			"cutscene_camera_point",
			"short",
			"object"
		]
	},
	{
		symbol: "camera_set_first_person",
		name: "camera_set_first_person",
		description: "Makes the scripted camera follow a unit.",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "camera_time",
		name: "camera_time",
		description: "Returns the number of ticks remaining in the current camera interpolation.",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "debug_camera_load",
		name: "debug_camera_load",
		description: "Loads the saved camera position and facing.",
		arguments: []
	},
	{
		symbol: "debug_camera_save",
		name: "debug_camera_save",
		description: "Saves the camera position and facing.",
		arguments: []
	},
	{
		symbol: "debug_camera_save_name",
		name: "debug_camera_save_name",
		description: "Saves the camera position and facing to filename",
		arguments: [
			"string"
		]
	},
	{
		symbol: "debug_camera_load_name",
		name: "debug_camera_load_name",
		description: "Loads the camera position and facing from filename",
		arguments: [
			"string"
		]
	},
	{
		symbol: "debug_camera_load_text",
		name: "debug_camera_load_text",
		description: "Loads the camera position and facing from a passed in string",
		arguments: [
			"string"
		]
	},
	{
		symbol: "game_difficulty_get",
		name: "game_difficulty_get",
		description: "Returns the current difficulty setting, but lies to you and will never return easy, instead returning normal",
		arguments: [],
		returns: "game_difficulty"
	},
	{
		symbol: "game_difficulty_get_real",
		name: "game_difficulty_get_real",
		description: "Returns the actual current difficulty setting without lying",
		arguments: [],
		returns: "game_difficulty"
	},
	{
		symbol: "map_reset",
		name: "map_reset",
		description: "Starts the map from the beginning.",
		arguments: []
	},
	{
		symbol: "map_name",
		name: "map_name",
		description: "The same as game_start: launches a game for debugging purposes",
		arguments: [
			"string"
		]
	},
	{
		symbol: "crash",
		name: "crash",
		description: "Crashes (for debugging).",
		arguments: [
			"string"
		]
	},
	{
		symbol: "version",
		name: "version",
		description: "Prints the build version.",
		arguments: []
	},
	{
		symbol: "ai_grenades",
		name: "ai_grenades",
		description: "Turns grenade inventory on or off.",
		arguments: [
			"boolean"
		]
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
		]
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
		]
	},
	{
		symbol: "cinematic_start",
		name: "cinematic_start",
		description: "Initializes game to start a cinematic (interruptive) cutscene",
		arguments: []
	},
	{
		symbol: "cinematic_stop",
		name: "cinematic_stop",
		description: "Initializes the game to end a cinematic (interruptive) cutscene",
		arguments: []
	},
	{
		symbol: "cinematic_skip_start_internal",
		name: "cinematic_skip_start_internal",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: []
	},
	{
		symbol: "cinematic_skip_stop_internal",
		name: "cinematic_skip_stop_internal",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: []
	},
	{
		symbol: "cinematic_show_letterbox",
		name: "cinematic_show_letterbox",
		description: "Sets or removes the letterbox bars",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "cinematic_set_title",
		name: "cinematic_set_title",
		description: "Activates the chapter title",
		arguments: [
			"cutscene_title"
		]
	},
	{
		symbol: "cinematic_set_title_delayed",
		name: "cinematic_set_title_delayed",
		description: "Activates the chapter title, delayed by <real> seconds",
		arguments: [
			"cutscene_title",
			"real"
		]
	},
	{
		symbol: "cinematic_suppress_bsp_object_creation",
		name: "cinematic_suppress_bsp_object_creation",
		description: "Suppresses or enables the automatic creation of objects during cutscenes due to a bsp switch",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "game_won",
		name: "game_won",
		description: "Causes the player to successfully finish the current level and move to the next",
		arguments: []
	},
	{
		symbol: "game_safe_to_save",
		name: "game_safe_to_save",
		description: "Returns FALSE if it would be a bad idea to save the player's game right now",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "game_all_quiet",
		name: "game_all_quiet",
		description: "Returns FALSE if there are bad guys around, projectiles in the air, etc.",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "game_safe_to_speak",
		name: "game_safe_to_speak",
		description: "Returns FALSE if it would be a bad idea to play mission dialog right now",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "game_is_cooperative",
		name: "game_is_cooperative",
		description: "Returns TRUE if the game is cooperative",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "game_save",
		name: "game_save",
		description: "Checks to see if it is safe to save game, then saves (gives up after 8 seconds)",
		arguments: []
	},
	{
		symbol: "game_save_cancel",
		name: "game_save_cancel",
		description: "Cancels any pending game_save, timeout or not",
		arguments: []
	},
	{
		symbol: "game_save_no_timeout",
		name: "game_save_no_timeout",
		description: "Checks to see if it is safe to save game, then saves (this version never gives up)",
		arguments: []
	},
	{
		symbol: "game_saving",
		name: "game_saving",
		description: "Checks to see if the game is trying to save the map.",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "game_revert",
		name: "game_revert",
		description: "Causes the player to revert to their previous saved game (for testing and cinematic skipping only please!)",
		arguments: []
	},
	{
		symbol: "game_reverted",
		name: "game_reverted",
		description: "Don't use this for anything, you black-hearted bastards.",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "core_save",
		name: "core_save",
		description: "Saves debug game state to core\\core.bin",
		arguments: []
	},
	{
		symbol: "core_load",
		name: "core_load",
		description: "Loads debug game state from core\\core.bin",
		arguments: []
	},
	{
		symbol: "core_load_name",
		name: "core_load_name",
		description: "Loads debug game state from core\\<path>",
		arguments: [
			"string"
		]
	},
	{
		symbol: "sound_impulse_start",
		name: "sound_impulse_start",
		description: "Plays an impulse sound from the specified source object (or \"none\"), with the specified scale.",
		arguments: [
			"sound",
			"object",
			"real"
		]
	},
	{
		symbol: "sound_impulse_time",
		name: "sound_impulse_time",
		description: "Returns the time remaining for the specified impulse sound.",
		arguments: [
			"sound"
		],
		returns: "long"
	},
	{
		symbol: "sound_impulse_stop",
		name: "sound_impulse_stop",
		description: "Stops the specified impulse sound.",
		arguments: [
			"sound"
		]
	},
	{
		symbol: "sound_looping_predict",
		name: "sound_looping_predict",
		description: "Your mom.",
		arguments: [
			"looping_sound"
		]
	},
	{
		symbol: "sound_looping_start",
		name: "sound_looping_start",
		description: "Plays a looping sound from the specified source object (or \"none\"), with the specified scale.",
		arguments: [
			"looping_sound",
			"object",
			"real"
		]
	},
	{
		symbol: "sound_looping_stop",
		name: "sound_looping_stop",
		description: "Stops the specified looping sound.",
		arguments: [
			"looping_sound"
		]
	},
	{
		symbol: "sound_looping_set_scale",
		name: "sound_looping_set_scale",
		description: "Changes the scale of the sound (which should affect the volume) within the range 0 to 1.",
		arguments: [
			"looping_sound",
			"real"
		]
	},
	{
		symbol: "sound_looping_set_alternate",
		name: "sound_looping_set_alternate",
		description: "Enables or disables the alternate loop/alternate end for a looping sound.",
		arguments: [
			"looping_sound",
			"boolean"
		]
	},
	{
		symbol: "debug_sounds_enable",
		name: "debug_sounds_enable",
		description: "Enables or disables all sound classes matching the substring.",
		arguments: [
			"string",
			"boolean"
		]
	},
	{
		symbol: "sound_class_set_gain",
		name: "sound_class_set_gain",
		description: "Changes the gain on the specified sound class(es) to the specified gain over the specified number of ticks.",
		arguments: [
			"string",
			"real",
			"short"
		]
	},
	{
		symbol: "vehicle_hover",
		name: "vehicle_hover",
		description: "Stops the vehicle from running real physics and runs fake hovering physics instead.",
		arguments: [
			"vehicle",
			"boolean"
		]
	},
	{
		symbol: "players_unzoom_all",
		name: "players_unzoom_all",
		description: "Resets zoom levels on all players",
		arguments: []
	},
	{
		symbol: "player_enable_input",
		name: "player_enable_input",
		description: "Toggle player input. the player can still free-look, but nothing else.",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "player_camera_control",
		name: "player_camera_control",
		description: "Enables/disables camera control globally",
		arguments: [
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_reset",
		name: "player_action_test_reset",
		description: "Resets the player action test state so that all tests will return false.",
		arguments: []
	},
	{
		symbol: "player_action_test_jump",
		name: "player_action_test_jump",
		description: "Returns true if any player has jumped since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_primary_trigger",
		name: "player_action_test_primary_trigger",
		description: "Returns true if any player has used primary trigger since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_grenade_trigger",
		name: "player_action_test_grenade_trigger",
		description: "Returns true if any player has used grenade trigger since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_zoom",
		name: "player_action_test_zoom",
		description: "Returns true if any player has hit the zoom button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_action",
		name: "player_action_test_action",
		description: "Returns true if any player has hit the action key since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_accept",
		name: "player_action_test_accept",
		description: "Returns true if any player has hit accept since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_back",
		name: "player_action_test_back",
		description: "Returns true if any player has pressed the back button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_look_relative_up",
		name: "player_action_test_look_relative_up",
		description: "Returns true if any player has looked up since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_look_relative_down",
		name: "player_action_test_look_relative_down",
		description: "Returns true if any player has looked down since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_look_relative_left",
		name: "player_action_test_look_relative_left",
		description: "Returns true if any player has looked left since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_look_relative_right",
		name: "player_action_test_look_relative_right",
		description: "Returns true if any player has looked right since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_look_relative_all_directions",
		name: "player_action_test_look_relative_all_directions",
		description: "Returns true if any player has looked up, down, left, and right since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_action_test_move_relative_all_directions",
		name: "player_action_test_move_relative_all_directions",
		description: "Returns true if any player has moved forward, backward, left, and right since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cls",
		name: "cls",
		description: "Clears console text from the screen",
		arguments: []
	},
	{
		symbol: "player_effect_set_max_translation",
		name: "player_effect_set_max_translation",
		description: "<x> <y> <z>",
		arguments: [
			"real",
			"real",
			"real"
		]
	},
	{
		symbol: "player_effect_set_max_rotation",
		name: "player_effect_set_max_rotation",
		description: "<yaw> <pitch> <roll>",
		arguments: [
			"real",
			"real",
			"real"
		]
	},
	{
		symbol: "player_effect_start",
		name: "player_effect_start",
		description: "<max_intensity> <attack time>",
		arguments: [
			"real",
			"real"
		]
	},
	{
		symbol: "player_effect_stop",
		name: "player_effect_stop",
		description: "<decay>",
		arguments: [
			"real"
		]
	},
	{
		symbol: "script_screen_effect_set_value",
		name: "script_screen_effect_set_value",
		description: "Sets a screen effect script value",
		arguments: [
			"short",
			"real"
		]
	},
	{
		symbol: "cinematic_screen_effect_start",
		name: "cinematic_screen_effect_start",
		description: "Starts screen effect pass TRUE to clear",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "cinematic_screen_effect_stop",
		name: "cinematic_screen_effect_stop",
		description: "Returns control of the screen effects to the rest of the game",
		arguments: []
	},
	{
		symbol: "cinematic_set_near_clip_distance",
		name: "cinematic_set_near_clip_distance",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"real"
		]
	},
	{
		symbol: "TestPrintBool",
		name: "TestPrintBool",
		description: "Prints the specified boolean with the format '<string> = '<boolean>' to the Shell.",
		arguments: [
			"string",
			"boolean"
		]
	},
	{
		symbol: "TestPrintReal",
		name: "TestPrintReal",
		description: "Prints the specified boolean with the format '<string> = '<real>' to the Shell.",
		arguments: [
			"string",
			"real"
		]
	}
];

export default CommonFunctions;

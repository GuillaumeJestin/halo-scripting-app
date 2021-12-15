import FunctionType from "../types/function-type/FunctionType";

const HCEFunctions: FunctionType[] = [
	{
		symbol: "ai_debug_communication_suppress",
		name: "ai_debug_communication_suppress",
		description: "Suppresses (or stops suppressing) a set of AI communication types.",
		arguments: [],
		additionalArguments: "string"
	},
	{
		symbol: "ai_debug_communication_ignore",
		name: "ai_debug_communication_ignore",
		description: "Ignores (or stops ignoring) a set of AI communication types when printing out communications.",
		arguments: [],
		additionalArguments: "string"
	},
	{
		symbol: "ai_debug_communication_focus",
		name: "ai_debug_communication_focus",
		description: "Focuses (or stops focusing) a set of unit vocalization types.",
		arguments: [],
		additionalArguments: "string"
	},
	{
		symbol: "abs_integer",
		name: "abs_integer",
		description: "Return the absolute (non-negative) value of an integer",
		arguments: [
			"long"
		],
		returns: "long"
	},
	{
		symbol: "abs_real",
		name: "abs_real",
		description: "Return the absolute (non-negative) value of a real",
		arguments: [
			"real"
		],
		returns: "real"
	},
	{
		symbol: "bitwise_and",
		name: "bitwise_and",
		description: "<lhs> AND <rhs>",
		arguments: [
			"long",
			"long"
		],
		returns: "long"
	},
	{
		symbol: "bitwise_or",
		name: "bitwise_or",
		description: "<lhs> OR <rhs>",
		arguments: [
			"long",
			"long"
		],
		returns: "long"
	},
	{
		symbol: "bitwise_xor",
		name: "bitwise_xor",
		description: "<lhs> XOR <rhs>",
		arguments: [
			"long",
			"long"
		],
		returns: "long"
	},
	{
		symbol: "bitwise_left_shift",
		name: "bitwise_left_shift",
		description: "<value> LHS <bit_count>",
		arguments: [
			"long",
			"short"
		],
		returns: "long"
	},
	{
		symbol: "bitwise_right_shift",
		name: "bitwise_right_shift",
		description: "<value> RHS <bit_count>",
		arguments: [
			"long",
			"short"
		],
		returns: "long"
	},
	{
		symbol: "bit_test",
		name: "bit_test",
		description: "<flags> <bit_index>",
		arguments: [
			"long",
			"short"
		],
		returns: "long"
	},
	{
		symbol: "bit_toggle",
		name: "bit_toggle",
		description: "<flags> <bit_index> <on_or_off>",
		arguments: [
			"long",
			"short",
			"boolean"
		],
		returns: "long"
	},
	{
		symbol: "bitwise_flags_toggle",
		name: "bitwise_flags_toggle",
		description: "<value> <flags> <on_or_off>",
		arguments: [
			"long",
			"long",
			"boolean"
		],
		returns: "long"
	},
	{
		symbol: "print_if",
		name: "print_if",
		description: "Prints a string to the console if the condition is true.",
		arguments: [
			"boolean",
			"string"
		]
	},
	{
		symbol: "log_print",
		name: "log_print",
		description: "Prints a string to the hs log file.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "local_players",
		name: "local_players",
		description: "Returns a list of the living player units on the local machine",
		arguments: [],
		returns: "object_list"
	},
	{
		symbol: "players_on_multiplayer_team",
		name: "players_on_multiplayer_team",
		description: "Returns a list of the living player units on the MP team",
		arguments: [
			"short"
		],
		returns: "object_list"
	},
	{
		symbol: "object_set_permutation",
		name: "object_set_permutation",
		description: "Sets the desired region (use \"\" for all regions) to the permutation with the given name, e.g. (object_set_permutation flood \"right arm\" ~damaged)",
		arguments: [
			"object",
			"string",
			"string"
		]
	},
	{
		symbol: "effect_new_on_object_marker",
		name: "effect_new_on_object_marker",
		description: "Starts the specified effect on the specified object at the specified marker.",
		arguments: [
			"effect",
			"object",
			"string"
		]
	},
	{
		symbol: "damage_object",
		name: "damage_object",
		description: "Causes the specified damage at the specified object.",
		arguments: [
			"damage",
			"object"
		]
	},
	{
		symbol: "sound_set_gain",
		name: "sound_set_gain",
		description: "Absolutely do not use this",
		arguments: [
			"string",
			"real"
		]
	},
	{
		symbol: "sound_get_gain",
		name: "sound_get_gain",
		description: "Absolutely do not use this either",
		arguments: [
			"string"
		],
		returns: "real"
	},
	{
		symbol: "physics_get_gravity",
		name: "physics_get_gravity",
		description: "Get the current global gravity acceleration relative to halo standard gravity",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "numeric_countdown_timer_set",
		name: "numeric_countdown_timer_set",
		description: "<milliseconds>, <auto_start>",
		arguments: [
			"long",
			"boolean"
		]
	},
	{
		symbol: "numeric_countdown_timer_get",
		name: "numeric_countdown_timer_get",
		description: "<digit_index>",
		arguments: [
			"short"
		],
		returns: "short"
	},
	{
		symbol: "numeric_countdown_timer_stop",
		name: "numeric_countdown_timer_stop",
		arguments: []
	},
	{
		symbol: "numeric_countdown_timer_restart",
		name: "numeric_countdown_timer_restart",
		arguments: []
	},
	{
		symbol: "object_set_collideable",
		name: "object_set_collideable",
		description: "FALSE prevents any object from colliding with the given object",
		arguments: [
			"object",
			"boolean"
		]
	},
	{
		symbol: "objects_attach",
		name: "objects_attach",
		description: "Attaches the second object to the first; both strings can be empty",
		arguments: [
			"object",
			"string",
			"object",
			"string"
		]
	},
	{
		symbol: "object_beautify",
		name: "object_beautify",
		description: "Makes an object pretty for the remainder of the levels' cutscenes.",
		arguments: [
			"object",
			"boolean"
		]
	},
	{
		symbol: "object_pvs_activate",
		name: "object_pvs_activate",
		description: "Just another (old) name for object_pvs_set_object.",
		arguments: [
			"object"
		]
	},
	{
		symbol: "object_pvs_set_object",
		name: "object_pvs_set_object",
		description: "Sets the specified object as the special place that activates everything it sees.",
		arguments: [
			"object"
		]
	},
	{
		symbol: "object_pvs_set_camera",
		name: "object_pvs_set_camera",
		description: "Sets the specified cutscene camera point as the special place that activates everything it sees.",
		arguments: [
			"cutscene_camera_point"
		]
	},
	{
		symbol: "object_pvs_clear",
		name: "object_pvs_clear",
		description: "Removes the special place that activates everything it sees.",
		arguments: []
	},
	{
		symbol: "scenery_animation_start",
		name: "scenery_animation_start",
		description: "Starts a custom animation playing on a piece of scenery",
		arguments: [
			"scenery",
			"animation_graph",
			"string"
		]
	},
	{
		symbol: "scenery_animation_start_at_frame",
		name: "scenery_animation_start_at_frame",
		description: "Starts a custom animation playing on a piece of scenery at a specific frame",
		arguments: [
			"scenery",
			"animation_graph",
			"string",
			"short"
		]
	},
	{
		symbol: "render_effects",
		name: "render_effects",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "unit_custom_animation_at_frame",
		name: "unit_custom_animation_at_frame",
		description: "Starts a custom animation playing on a unit at a specific frame index(interpolates into animation if next to last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string",
			"boolean",
			"short"
		],
		returns: "boolean"
	},
	{
		symbol: "custom_animation",
		name: "custom_animation",
		description: "Starts a custom animation playing on a unit (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string",
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "custom_animation_list",
		name: "custom_animation_list",
		description: "Starts a custom animation playing on a unit list (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"object_list",
			"animation_graph",
			"string",
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "unit_set_emotion",
		name: "unit_set_emotion",
		description: "Sets a unit's facial expression (-1 is none, other values depend on unit)",
		arguments: [
			"unit",
			"short"
		]
	},
	{
		symbol: "unit_enter_vehicle",
		name: "unit_enter_vehicle",
		description: "Puts the specified unit in the specified vehicle (in the named seat)",
		arguments: [
			"unit",
			"vehicle",
			"string"
		]
	},
	{
		symbol: "vehicle_test_seat_list",
		name: "vehicle_test_seat_list",
		description: "Tests whether the named seat has an object in the object list",
		arguments: [
			"vehicle",
			"string",
			"object_list"
		],
		returns: "boolean"
	},
	{
		symbol: "vehicle_test_seat",
		name: "vehicle_test_seat",
		description: "Tests whether the named seat has a specified unit in it",
		arguments: [
			"vehicle",
			"string",
			"unit"
		],
		returns: "boolean"
	},
	{
		symbol: "unit_set_emotion_animation",
		name: "unit_set_emotion_animation",
		description: "Sets the emotion animation to be used for the given unit",
		arguments: [
			"unit",
			"string"
		]
	},
	{
		symbol: "vehicle_load_magic",
		name: "vehicle_load_magic",
		description: "Makes a list of units (named or by encounter) magically get into a vehicle, in the substring-specified seats (e.g. CD-passenger... empty string matches all seats)",
		arguments: [
			"unit",
			"string",
			"object_list"
		],
		returns: "short"
	},
	{
		symbol: "vehicle_unload",
		name: "vehicle_unload",
		description: "Makes units get out of a vehicle from the substring-specified seats (e.g. CD-passenger... empty string matches all seats)",
		arguments: [
			"unit",
			"string"
		],
		returns: "short"
	},
	{
		symbol: "magic_seat_name",
		name: "magic_seat_name",
		description: "All units controlled by the player will assume the given seat name (valid values are 'asleep', 'alert', 'stand', 'crouch' and 'flee')",
		arguments: [
			"string"
		]
	},
	{
		symbol: "unit_set_seat",
		name: "unit_set_seat",
		description: "This unit will assume the named seat",
		arguments: [
			"unit",
			"string"
		]
	},
	{
		symbol: "unit_solo_player_integrated_night_vision_is_active",
		name: "unit_solo_player_integrated_night_vision_is_active",
		description: "Returns whether the night-vision mode could be activated via the flashlight button",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "units_set_desired_flashlight_state",
		name: "units_set_desired_flashlight_state",
		description: "Sets the units' desired flashlight state",
		arguments: [
			"object_list",
			"boolean"
		]
	},
	{
		symbol: "unit_set_desired_flashlight_state",
		name: "unit_set_desired_flashlight_state",
		description: "Sets the unit's desired flashlight state",
		arguments: [
			"unit",
			"boolean"
		]
	},
	{
		symbol: "unit_get_current_flashlight_state",
		name: "unit_get_current_flashlight_state",
		description: "Gets the unit's current flashlight state",
		arguments: [
			"unit"
		],
		returns: "boolean"
	},
	{
		symbol: "device_group_set",
		name: "device_group_set",
		description: "Changes the desired value of the specified device group.",
		arguments: [
			"device_group",
			"real"
		],
		returns: "boolean"
	},
	{
		symbol: "cheat_spawn_warthog",
		name: "cheat_spawn_warthog",
		description: "Drops a warthog near player",
		arguments: []
	},
	{
		symbol: "cheat_active_camouflage",
		name: "cheat_active_camouflage",
		description: "Gives the player active camouflage",
		arguments: []
	},
	{
		symbol: "cheat_active_camouflage_local_player",
		name: "cheat_active_camouflage_local_player",
		description: "Gives the player active camouflage",
		arguments: [
			"short"
		]
	},
	{
		symbol: "ai_free",
		name: "ai_free",
		description: "Removes a group of actors from their encounter and sets them free",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_free_units",
		name: "ai_free_units",
		description: "Removes a set of units from their encounter (if any) and sets them free",
		arguments: [
			"object_list"
		]
	},
	{
		symbol: "ai_attach_free",
		name: "ai_attach_free",
		description: "Attaches a unit to a newly created free actor of the specified type",
		arguments: [
			"unit",
			"actor_variant"
		]
	},
	{
		symbol: "ai_spawn_actor",
		name: "ai_spawn_actor",
		description: "Spawns a single actor in the specified encounter and/or squad.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_set_respawn",
		name: "ai_set_respawn",
		description: "Enables or disables respawning in the specified encounter.",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_magically_see_encounter",
		name: "ai_magically_see_encounter",
		description: "Makes one encounter magically aware of another.",
		arguments: [
			"ai",
			"ai"
		]
	},
	{
		symbol: "ai_magically_see_players",
		name: "ai_magically_see_players",
		description: "Makes an encounter magically aware of nearby players.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_magically_see_unit",
		name: "ai_magically_see_unit",
		description: "Makes an encounter magically aware of the specified unit.",
		arguments: [
			"ai",
			"unit"
		]
	},
	{
		symbol: "ai_timer_start",
		name: "ai_timer_start",
		description: "Makes a squad's delay timer start counting.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_timer_expire",
		name: "ai_timer_expire",
		description: "Makes a squad's delay timer expire and releases them to enter combat.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_attack",
		name: "ai_attack",
		description: "Makes the specified platoon(s) go into the attacking state.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_defend",
		name: "ai_defend",
		description: "Makes the specified platoon(s) go into the defending state.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_retreat",
		name: "ai_retreat",
		description: "Makes all squads in the specified platoon(s) maneuver to their designated maneuver squads.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_maneuver",
		name: "ai_maneuver",
		description: "Makes all squads in the specified platoon(s) maneuver to their designated maneuver squads.",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_maneuver_enable",
		name: "ai_maneuver_enable",
		description: "Enables or disables the maneuver/retreat rule for an encounter or platoon. the rule will still trigger, but none of the actors will be given the order to change squads.",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_migrate_and_speak",
		name: "ai_migrate_and_speak",
		description: "Makes all or part of an encounter move to another encounter, and say their 'advance' or 'retreat' speech lines.",
		arguments: [
			"ai",
			"ai",
			"string"
		]
	},
	{
		symbol: "ai_migrate_by_unit",
		name: "ai_migrate_by_unit",
		description: "Makes a named vehicle or group of units move to another encounter.",
		arguments: [
			"object_list",
			"ai"
		]
	},
	{
		symbol: "ai_go_to_vehicle",
		name: "ai_go_to_vehicle",
		description: "Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
		arguments: [
			"ai",
			"unit",
			"string"
		]
	},
	{
		symbol: "ai_go_to_vehicle_override",
		name: "ai_go_to_vehicle_override",
		description: "Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... NB: any actors who are already going to vehicles will stop and go to this one instead!",
		arguments: [
			"ai",
			"unit",
			"string"
		]
	},
	{
		symbol: "ai_going_to_vehicle",
		name: "ai_going_to_vehicle",
		description: "Return the number of actors that are still trying to get into the specified vehicle",
		arguments: [
			"unit"
		],
		returns: "short"
	},
	{
		symbol: "ai_exit_vehicle",
		name: "ai_exit_vehicle",
		description: "Tells a group of actors to get out of any vehicles that they are in",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_teleport_to_starting_location",
		name: "ai_teleport_to_starting_location",
		description: "Teleports a group of actors to the starting locations of their current squad(s)",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_teleport_to_starting_location_if_unsupported",
		name: "ai_teleport_to_starting_location_if_unsupported",
		description: "Teleports a group of actors to the starting locations of their current squad(s), only if they are not supported by solid ground (i.e. if they are falling after switching BSPs)",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_try_to_fight_nothing",
		name: "ai_try_to_fight_nothing",
		description: "Removes the preferential target setting from a group of actors",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_try_to_fight",
		name: "ai_try_to_fight",
		description: "Causes a group of actors to preferentially target another group of actors",
		arguments: [
			"ai",
			"ai"
		]
	},
	{
		symbol: "ai_try_to_fight_player",
		name: "ai_try_to_fight_player",
		description: "Causes a group of actors to preferentially target the player",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_command_list",
		name: "ai_command_list",
		description: "Tells a group of actors to begin executing the specified command list",
		arguments: [
			"ai",
			"ai_command_list"
		]
	},
	{
		symbol: "ai_command_list_by_unit",
		name: "ai_command_list_by_unit",
		description: "Tells a named unit to begin executing the specified command list",
		arguments: [
			"unit",
			"ai_command_list"
		]
	},
	{
		symbol: "ai_command_list_advance",
		name: "ai_command_list_advance",
		description: "Tells a group of actors that are running a command list that they may advance further along the list (if they are waiting for a stimulus)",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_command_list_advance_by_unit",
		name: "ai_command_list_advance_by_unit",
		description: "Just like ai_command_list_advance but operates upon a unit instead",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "ai_command_list_status",
		name: "ai_command_list_status",
		description: "Gets the status of a number of units running command lists: 0 = none, 1 = finished command list, 2 = waiting for stimulus, 3 = running command list",
		arguments: [
			"object_list"
		],
		returns: "short"
	},
	{
		symbol: "ai_set_return_state",
		name: "ai_set_return_state",
		description: "Sets the state that a group of actors will return to when they have nothing to do",
		arguments: [
			"ai",
			"ai_default_state"
		]
	},
	{
		symbol: "ai_set_current_state",
		name: "ai_set_current_state",
		description: "Sets the current state of a group of actors. WARNING: may have unpredictable results on actors that are in combat",
		arguments: [
			"ai",
			"ai_default_state"
		]
	},
	{
		symbol: "ai_status",
		name: "ai_status",
		description: "Returns the most severe combat status of a group of actors (0=inactive, 1=noncombat, 2=guarding, 3=search/suspicious, 4=definite enemy(heard or magic awareness), 5=visible enemy, 6=engaging in combat.",
		arguments: [
			"ai"
		],
		returns: "short"
	},
	{
		symbol: "ai_vehicle_encounter",
		name: "ai_vehicle_encounter",
		description: "Sets a vehicle to 'belong' to a particular encounter/squad. any actors who get into the vehicle will be placed in this squad. NB: vehicles potentially drivable by multiple teams need their own encounter!",
		arguments: [
			"unit",
			"ai"
		]
	},
	{
		symbol: "ai_vehicle_enterable_distance",
		name: "ai_vehicle_enterable_distance",
		description: "Sets a vehicle as being impulsively enterable for actors within a certain distance",
		arguments: [
			"unit",
			"real"
		]
	},
	{
		symbol: "ai_vehicle_enterable_team",
		name: "ai_vehicle_enterable_team",
		description: "Sets a vehicle as being impulsively enterable for actors on a certain team",
		arguments: [
			"unit",
			"team"
		]
	},
	{
		symbol: "ai_vehicle_enterable_actor_type",
		name: "ai_vehicle_enterable_actor_type",
		description: "Sets a vehicle as being impulsively enterable for actors of a certain type (grunt, elite, marine etc)",
		arguments: [
			"unit",
			"actor_type"
		]
	},
	{
		symbol: "ai_vehicle_enterable_actors",
		name: "ai_vehicle_enterable_actors",
		description: "Sets a vehicle as being impulsively enterable for a certain encounter/squad of actors",
		arguments: [
			"unit",
			"ai"
		]
	},
	{
		symbol: "ai_vehicle_enterable_disable",
		name: "ai_vehicle_enterable_disable",
		description: "Disables actors from impulsively getting into a vehicle (this is the default state for newly placed vehicles)",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "ai_look_at_object",
		name: "ai_look_at_object",
		description: "Tells an actor to look at an object until further notice",
		arguments: [
			"unit",
			"object"
		]
	},
	{
		symbol: "ai_stop_looking",
		name: "ai_stop_looking",
		description: "Tells an actor to stop looking at whatever it's looking at",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "ai_automatic_migration_target",
		name: "ai_automatic_migration_target",
		description: "Enables or disables a squad as being an automatic migration target",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "ai_follow_target_disable",
		name: "ai_follow_target_disable",
		description: "Turns off following for an encounter",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_follow_target_players",
		name: "ai_follow_target_players",
		description: "Sets the follow target for an encounter to be the closest player",
		arguments: [
			"ai"
		]
	},
	{
		symbol: "ai_follow_target_unit",
		name: "ai_follow_target_unit",
		description: "Sets the follow target for an encounter to be a specific unit",
		arguments: [
			"ai",
			"unit"
		]
	},
	{
		symbol: "ai_follow_target_ai",
		name: "ai_follow_target_ai",
		description: "Sets the follow target for an encounter to be a group of AI (encounter, squad or platoon)",
		arguments: [
			"ai",
			"ai"
		]
	},
	{
		symbol: "ai_follow_distance",
		name: "ai_follow_distance",
		description: "Sets the distance threshold which will cause squads to migrate when following someone",
		arguments: [
			"ai",
			"real"
		]
	},
	{
		symbol: "ai_conversation",
		name: "ai_conversation",
		description: "Tries to add an entry to the list of conversations waiting to play. returns FALSE if the required units could not be found to play the conversation, or if the player is too far away and the 'delay' flag is not set.",
		arguments: [
			"conversation"
		],
		returns: "boolean"
	},
	{
		symbol: "ai_conversation_stop",
		name: "ai_conversation_stop",
		description: "Stops a conversation from playing or trying to play",
		arguments: [
			"conversation"
		]
	},
	{
		symbol: "ai_conversation_advance",
		name: "ai_conversation_advance",
		description: "Tells a conversation that it may advance",
		arguments: [
			"conversation"
		]
	},
	{
		symbol: "ai_conversation_line",
		name: "ai_conversation_line",
		description: "Returns which line the conversation is currently playing, or 999 if the conversation is not currently playing",
		arguments: [
			"conversation"
		],
		returns: "short"
	},
	{
		symbol: "ai_conversation_status",
		name: "ai_conversation_status",
		description: "Returns the status of a conversation (0=none, 1=trying to begin, 2=waiting for guys to get in position, 3=playing, 4=waiting to advance, 5=could not begin, 6=finished successfully, 7=aborted midway",
		arguments: [
			"conversation"
		],
		returns: "short"
	},
	{
		symbol: "ai_link_activation",
		name: "ai_link_activation",
		description: "Links the first encounter so that it will be made active whenever it detects that the second encounter is active",
		arguments: [
			"ai",
			"ai"
		]
	},
	{
		symbol: "ai_allow_charge",
		name: "ai_allow_charge",
		description: "Either enables or disables charging behavior for a group of actors",
		arguments: [
			"ai",
			"boolean"
		]
	},
	{
		symbol: "camera_set_animation",
		name: "camera_set_animation",
		description: "Begins a prerecorded camera animation.",
		arguments: [
			"animation_graph",
			"string"
		]
	},
	{
		symbol: "camera_set_dead",
		name: "camera_set_dead",
		description: "Makes the scripted camera zoom out around a unit as if it were dead.",
		arguments: [
			"unit"
		]
	},
	{
		symbol: "debug_camera_save_simple_name",
		name: "debug_camera_save_simple_name",
		description: "Saves the camera position and facing to camera_<name>.txt",
		arguments: [
			"string"
		]
	},
	{
		symbol: "debug_camera_load_simple_name",
		name: "debug_camera_load_simple_name",
		description: "Loads the camera position and facing from camera_<name>.txt",
		arguments: [
			"string"
		]
	},
	{
		symbol: "game_speed",
		name: "game_speed",
		description: "Changes the game speed.",
		arguments: [
			"real"
		]
	},
	{
		symbol: "game_time",
		name: "game_time",
		description: "Gets ticks elapsed since the start of the game.",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "game_variant",
		name: "game_variant",
		description: "Set the game engine",
		arguments: [
			"string"
		]
	},
	{
		symbol: "multiplayer_map_name",
		name: "multiplayer_map_name",
		description: "Changes the name of the multiplayer map",
		arguments: [
			"string"
		]
	},
	{
		symbol: "game_difficulty_set",
		name: "game_difficulty_set",
		description: "Changes the difficulty setting for the next map to be loaded.",
		arguments: [
			"game_difficulty"
		]
	},
	{
		symbol: "switch_bsp",
		name: "switch_bsp",
		description: "Takes off your condom and changes to a different structure bsp",
		arguments: [
			"short"
		]
	},
	{
		symbol: "structure_bsp_index",
		name: "structure_bsp_index",
		description: "Returns the current structure bsp index",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "playback",
		name: "playback",
		description: "Starts game in film playback mode",
		arguments: []
	},
	{
		symbol: "quit",
		name: "quit",
		description: "Quits the game",
		arguments: []
	},
	{
		symbol: "sound_cache_flush",
		name: "sound_cache_flush",
		description: "I'm a rebel!",
		arguments: []
	},
	{
		symbol: "sound_cache_dump_to_file",
		name: "sound_cache_dump_to_file",
		description: "Dump dat stuff!",
		arguments: []
	},
	{
		symbol: "debug_pvs",
		name: "debug_pvs",
		description: "Displays the current pvs.",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "radiosity_start",
		name: "radiosity_start",
		description: "Starts radiosity computation.",
		arguments: []
	},
	{
		symbol: "radiosity_save",
		name: "radiosity_save",
		description: "Saves radiosity solution.",
		arguments: []
	},
	{
		symbol: "radiosity_debug_point",
		name: "radiosity_debug_point",
		description: "Tests sun occlusion at a point.",
		arguments: []
	},
	{
		symbol: "ai",
		name: "ai",
		description: "Turns all AI on or off.",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "ai_dialogue_triggers",
		name: "ai_dialogue_triggers",
		description: "Turns impromptu dialogue on or off.",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "cinematic_abort",
		name: "cinematic_abort",
		description: "Aborts a cinematic",
		arguments: []
	},
	{
		symbol: "game_lost",
		name: "game_lost",
		description: "Causes the player to revert to their previous saved game",
		arguments: []
	},
	{
		symbol: "game_is_authoritative",
		name: "game_is_authoritative",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "game_save_totally_unsafe",
		name: "game_save_totally_unsafe",
		description: "Disregards player's current situation",
		arguments: []
	},
	{
		symbol: "core_save_name",
		name: "core_save_name",
		description: "Saves debug game state to core\<path>",
		arguments: [
			"string"
		],
		returns: "boolean"
	},
	{
		symbol: "core_load_at_startup",
		name: "core_load_at_startup",
		description: "Loads debug game state from core\core.bin as soon as the map is initialized",
		arguments: []
	},
	{
		symbol: "core_load_name_at_startup",
		name: "core_load_name_at_startup",
		description: "Loads debug game state from core\<path> as soon as the map is initialized",
		arguments: [
			"string"
		]
	},
	{
		symbol: "mcc_mission_segment",
		name: "mcc_mission_segment",
		arguments: [
			"string"
		],
		returns: "boolean"
	},
	{
		symbol: "game_skip_ticks",
		name: "game_skip_ticks",
		description: "Skips <short> amount of game ticks. ONLY USE IN CUTSCENES!!!",
		arguments: [
			"short"
		]
	},
	{
		symbol: "sound_impulse_predict",
		name: "sound_impulse_predict",
		description: "Loads an impulse sound into the sound cache ready for playback.",
		arguments: [
			"sound",
			"boolean"
		]
	},
	{
		symbol: "sound_enable",
		name: "sound_enable",
		description: "Enables or disables all sound.",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "sound_set_master_gain",
		name: "sound_set_master_gain",
		description: "Set the game's master gain",
		arguments: [
			"real"
		]
	},
	{
		symbol: "sound_get_master_gain",
		name: "sound_get_master_gain",
		description: "Returns the game's master gain",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "sound_set_music_gain",
		name: "sound_set_music_gain",
		description: "Set the game's music gain",
		arguments: [
			"real"
		]
	},
	{
		symbol: "sound_get_music_gain",
		name: "sound_get_music_gain",
		description: "Returns the game's music gain",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "sound_set_effects_gain",
		name: "sound_set_effects_gain",
		description: "Set the game's effects gain",
		arguments: [
			"real"
		]
	},
	{
		symbol: "sound_get_effects_gain",
		name: "sound_get_effects_gain",
		description: "Returns the game's effects gain",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "player_add_equipment",
		name: "player_add_equipment",
		description: "Adds/resets the player's health, shield, and inventory (weapons and grenades) to the named profile. resets if third parameter is true, adds if false.",
		arguments: [
			"unit",
			"starting_profile",
			"boolean"
		]
	},
	{
		symbol: "debug_teleport_player",
		name: "debug_teleport_player",
		arguments: [
			"short",
			"short"
		]
	},
	{
		symbol: "show_hud",
		name: "show_hud",
		description: "Shows or hides the hud",
		arguments: [
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "show_hud_help_text",
		name: "show_hud_help_text",
		description: "Shows or hides the hud help text",
		arguments: [
			"boolean"
		],
		returns: "boolean"
	},
	{
		symbol: "enable_hud_help_flash",
		name: "enable_hud_help_flash",
		description: "Starts/stops the help text flashing",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_help_flash_restart",
		name: "hud_help_flash_restart",
		description: "Resets the timer for the help text flashing",
		arguments: []
	},
	{
		symbol: "activate_nav_point_flag",
		name: "activate_nav_point_flag",
		description: "Activates a nav point type <string> attached to (local) player <unit> anchored to a flag with a vertical offset <real>. If the player is not local to the machine, this will fail",
		arguments: [
			"navpoint",
			"unit",
			"cutscene_flag",
			"real"
		]
	},
	{
		symbol: "activate_nav_point_object",
		name: "activate_nav_point_object",
		description: "Activates a nav point type <string> attached to (local) player <unit> anchored to an object with a vertical offset <real>. If the player is not local to the machine, this will fail",
		arguments: [
			"navpoint",
			"unit",
			"object",
			"real"
		]
	},
	{
		symbol: "activate_team_nav_point_flag",
		name: "activate_team_nav_point_flag",
		description: "Activates a nav point type <string> attached to a team anchored to a flag with a vertical offset <real>. If the player is not local to the machine, this will fail",
		arguments: [
			"navpoint",
			"team",
			"cutscene_flag",
			"real"
		]
	},
	{
		symbol: "activate_team_nav_point_object",
		name: "activate_team_nav_point_object",
		description: "Activates a nav point type <string> attached to a team anchored to an object with a vertical offset <real>. If the player is not local to the machine, this will fail",
		arguments: [
			"navpoint",
			"team",
			"object",
			"real"
		]
	},
	{
		symbol: "deactivate_nav_point_flag",
		name: "deactivate_nav_point_flag",
		description: "Deactivates a nav point type attached to a player <unit> anchored to a flag",
		arguments: [
			"unit",
			"cutscene_flag"
		]
	},
	{
		symbol: "deactivate_nav_point_object",
		name: "deactivate_nav_point_object",
		description: "Deactivates a nav point type attached to a player <unit> anchored to an object",
		arguments: [
			"unit",
			"object"
		]
	},
	{
		symbol: "deactivate_team_nav_point_flag",
		name: "deactivate_team_nav_point_flag",
		description: "Deactivates a nav point type attached to a team anchored to a flag",
		arguments: [
			"team",
			"cutscene_flag"
		]
	},
	{
		symbol: "deactivate_team_nav_point_object",
		name: "deactivate_team_nav_point_object",
		description: "Deactivates a nav point type attached to a team anchored to an object",
		arguments: [
			"team",
			"object"
		]
	},
	{
		symbol: "error_overflow_suppression",
		name: "error_overflow_suppression",
		description: "Enables or disables the suppression of error spamming",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "player_effect_set_max_vibrate",
		name: "player_effect_set_max_vibrate",
		description: "<left> <right>",
		arguments: [
			"real",
			"real"
		]
	},
	{
		symbol: "player_effect_set_max_rumble",
		name: "player_effect_set_max_rumble",
		description: "DEPRECATED: Use player_effect_set_max_vibrate, this is only to keep compatibility with Custom Edition",
		arguments: [
			"real",
			"real"
		]
	},
	{
		symbol: "hud_show_health",
		name: "hud_show_health",
		description: "Hides/shows the health panel",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_blink_health",
		name: "hud_blink_health",
		description: "Starts/stops manual blinking of the health panel",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_show_shield",
		name: "hud_show_shield",
		description: "Hides/shows the shield panel",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_blink_shield",
		name: "hud_blink_shield",
		description: "Starts/stops manual blinking of the shield panel",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_show_motion_sensor",
		name: "hud_show_motion_sensor",
		description: "Hides/shows the motion sensor panel",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_blink_motion_sensor",
		name: "hud_blink_motion_sensor",
		description: "Starts/stops manual blinking of the motion sensor panel",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_show_crosshair",
		name: "hud_show_crosshair",
		description: "Hides/shows the weapon crosshair",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_clear_messages",
		name: "hud_clear_messages",
		description: "Clears all non-state messages on the hud",
		arguments: []
	},
	{
		symbol: "hud_set_help_text",
		name: "hud_set_help_text",
		description: "Displays <message> as the help text",
		arguments: [
			"hud_message"
		]
	},
	{
		symbol: "hud_set_objective_text",
		name: "hud_set_objective_text",
		description: "Sets <message> as the current objective",
		arguments: [
			"hud_message"
		]
	},
	{
		symbol: "hud_set_timer_time",
		name: "hud_set_timer_time",
		description: "Sets the time for the timer to <short> minutes and <short> seconds, and starts and displays timer",
		arguments: [
			"short",
			"short"
		]
	},
	{
		symbol: "hud_set_timer_warning_time",
		name: "hud_set_timer_warning_time",
		description: "Sets the warning time for the timer to <short> minutes and <short> seconds",
		arguments: [
			"short",
			"short"
		]
	},
	{
		symbol: "hud_set_timer_position",
		name: "hud_set_timer_position",
		description: "Sets the timer upper left position to (x, y)=>(<short>, <short>)",
		arguments: [
			"short",
			"short",
			"hud_corner"
		]
	},
	{
		symbol: "show_hud_timer",
		name: "show_hud_timer",
		description: "Displays the hud timer",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "pause_hud_timer",
		name: "pause_hud_timer",
		description: "Pauses or unpauses the hud timer",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "hud_get_timer_ticks",
		name: "hud_get_timer_ticks",
		description: "Returns the ticks left on the hud timer",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "time_code_show",
		name: "time_code_show",
		description: "Shows the time code timer",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "time_code_start",
		name: "time_code_start",
		description: "Starts/stops the time code timer",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "time_code_reset",
		name: "time_code_reset",
		description: "Resets the time code timer",
		arguments: []
	},
	{
		symbol: "reload_shader_transparent_chicago",
		name: "reload_shader_transparent_chicago",
		arguments: []
	},
	{
		symbol: "rasterizer_reload_effects",
		name: "rasterizer_reload_effects",
		description: "Check for shader changes",
		arguments: []
	},
	{
		symbol: "rasterizer_decals_flush",
		name: "rasterizer_decals_flush",
		description: "Flush all decals",
		arguments: []
	},
	{
		symbol: "rasterizer_fps_accumulate",
		name: "rasterizer_fps_accumulate",
		description: "Average fps",
		arguments: []
	},
	{
		symbol: "rasterizer_model_ambient_reflection_tint",
		name: "rasterizer_model_ambient_reflection_tint",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		]
	},
	{
		symbol: "rasterizer_lights_reset_for_new_map",
		name: "rasterizer_lights_reset_for_new_map",
		arguments: []
	},
	{
		symbol: "cinematic_screen_effect_set_convolution",
		name: "cinematic_screen_effect_set_convolution",
		description: "Sets the convolution effect",
		arguments: [
			"short",
			"short",
			"real",
			"real",
			"real"
		]
	},
	{
		symbol: "cinematic_screen_effect_set_filter",
		name: "cinematic_screen_effect_set_filter",
		description: "Sets the filter effect",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"boolean",
			"real"
		]
	},
	{
		symbol: "cinematic_screen_effect_set_filter_desaturation_tint",
		name: "cinematic_screen_effect_set_filter_desaturation_tint",
		description: "Sets the desaturation filter tint color",
		arguments: [
			"real",
			"real",
			"real"
		]
	},
	{
		symbol: "cinematic_screen_effect_set_video",
		name: "cinematic_screen_effect_set_video",
		description: "Sets the video effect: <noise intensity[0,1]>, <overbright: 0=none, 1=2x, 2=4x>",
		arguments: [
			"short",
			"real"
		]
	},
	{
		symbol: "player0_look_invert_pitch",
		name: "player0_look_invert_pitch",
		description: "Invert player0's look",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "player0_look_pitch_is_inverted",
		name: "player0_look_pitch_is_inverted",
		description: "Returns TRUE if player0's look pitch is inverted",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player0_joystick_set_is_normal",
		name: "player0_joystick_set_is_normal",
		description: "Returns TRUE if player0 is using the normal joystick set",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "ui_widget_show_path",
		name: "ui_widget_show_path",
		description: "Blah blah",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "display_scenario_help",
		name: "display_scenario_help",
		description: "Display in-game help dialog",
		arguments: [
			"short"
		]
	},
	{
		symbol: "sound_enable_eax",
		name: "sound_enable_eax",
		description: "Enable or disable EAX extensions",
		arguments: [
			"boolean"
		]
	},
	{
		symbol: "sound_eax_enabled",
		name: "sound_eax_enabled",
		description: "Returns true if EAX extensions are enabled",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "sound_set_env",
		name: "sound_set_env",
		description: "Change environment preset",
		arguments: [
			"short"
		]
	},
	{
		symbol: "sound_enable_hardware",
		name: "sound_enable_hardware",
		description: "Enable or disable hardware sound buffers",
		arguments: [
			"boolean",
			"boolean"
		]
	},
	{
		symbol: "sound_set_supplementary_buffers",
		name: "sound_set_supplementary_buffers",
		description: "Set the amount of supplementary buffers",
		arguments: [
			"short",
			"boolean"
		]
	},
	{
		symbol: "sound_get_supplementary_buffers",
		name: "sound_get_supplementary_buffers",
		description: "Get the amount of supplementary buffers",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "sound_set_rolloff",
		name: "sound_set_rolloff",
		description: "Set the DSound rolloff value",
		arguments: [
			"real"
		]
	},
	{
		symbol: "sound_set_factor",
		name: "sound_set_factor",
		description: "Set the DSound factor value",
		arguments: [
			"real"
		]
	},
	{
		symbol: "get_yaw_rate",
		name: "get_yaw_rate",
		description: "Gets the yaw rate for the given player number",
		arguments: [
			"short"
		],
		returns: "real"
	},
	{
		symbol: "get_pitch_rate",
		name: "get_pitch_rate",
		description: "Gets the yaw rate for the given player number",
		arguments: [
			"short"
		],
		returns: "real"
	},
	{
		symbol: "set_yaw_rate",
		name: "set_yaw_rate",
		description: "Sets the yaw rate for the given player number",
		arguments: [
			"short",
			"real"
		]
	},
	{
		symbol: "set_pitch_rate",
		name: "set_pitch_rate",
		description: "Sets the yaw rate for the given player number",
		arguments: [
			"short",
			"real"
		]
	},
	{
		symbol: "bind",
		name: "bind",
		description: "Binds an input device/button combination to a game control",
		arguments: [
			"string",
			"string",
			"string"
		]
	},
	{
		symbol: "unbind",
		name: "unbind",
		description: "Unbinds an input device/button combination",
		arguments: [
			"string",
			"string"
		]
	},
	{
		symbol: "print_binds",
		name: "print_binds",
		description: "Prints a list of all input bindings",
		arguments: []
	},
	{
		symbol: "sv_map",
		name: "sv_map",
		arguments: [
			"string",
			"string"
		]
	},
	{
		symbol: "profile_load",
		name: "profile_load",
		description: "Load any included builtin profiles and create profiles on disk.",
		arguments: [
			"string"
		]
	},
	{
		symbol: "checkpoint_load",
		name: "checkpoint_load",
		description: "Load a saved checkpoint",
		arguments: [
			"string"
		]
	},
	{
		symbol: "structure_lens_flares_place",
		name: "structure_lens_flares_place",
		description: "Places lens flares in the structure bsp",
		arguments: []
	},
	{
		symbol: "rasterizer_near_clip_distance",
		name: "rasterizer_near_clip_distance",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_far_clip_distance",
		name: "rasterizer_far_clip_distance",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_first_person_weapon_near_clip_distance",
		name: "rasterizer_first_person_weapon_near_clip_distance",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_first_person_weapon_far_clip_distance",
		name: "rasterizer_first_person_weapon_far_clip_distance",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_floating_point_zbuffer",
		name: "rasterizer_floating_point_zbuffer",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_framerate_throttle",
		name: "rasterizer_framerate_throttle",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_framerate_stabilization",
		name: "rasterizer_framerate_stabilization",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_refresh_rate",
		name: "rasterizer_refresh_rate",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_frame_bounds_left",
		name: "rasterizer_frame_bounds_left",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_frame_bounds_right",
		name: "rasterizer_frame_bounds_right",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_frame_bounds_top",
		name: "rasterizer_frame_bounds_top",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_frame_bounds_bottom",
		name: "rasterizer_frame_bounds_bottom",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_stats",
		name: "rasterizer_stats",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_mode",
		name: "rasterizer_mode",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_wireframe",
		name: "rasterizer_wireframe",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_smart",
		name: "rasterizer_smart",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_debug_model_vertices",
		name: "rasterizer_debug_model_vertices",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_debug_model_lod",
		name: "rasterizer_debug_model_lod",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_debug_transparents",
		name: "rasterizer_debug_transparents",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_debug_meter_shader",
		name: "rasterizer_debug_meter_shader",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_models",
		name: "rasterizer_models",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_model_transparents",
		name: "rasterizer_model_transparents",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_draw_first_person_weapon_first",
		name: "rasterizer_draw_first_person_weapon_first",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_stencil_mask",
		name: "rasterizer_stencil_mask",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment",
		name: "rasterizer_environment",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_lightmaps",
		name: "rasterizer_environment_lightmaps",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_shadows",
		name: "rasterizer_environment_shadows",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_diffuse_lights",
		name: "rasterizer_environment_diffuse_lights",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_diffuse_textures",
		name: "rasterizer_environment_diffuse_textures",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_decals",
		name: "rasterizer_environment_decals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_specular_lights",
		name: "rasterizer_environment_specular_lights",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_specular_lightmaps",
		name: "rasterizer_environment_specular_lightmaps",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_reflection_lightmap_mask",
		name: "rasterizer_environment_reflection_lightmap_mask",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_reflection_mirrors",
		name: "rasterizer_environment_reflection_mirrors",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_reflections",
		name: "rasterizer_environment_reflections",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_transparents",
		name: "rasterizer_environment_transparents",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_fog",
		name: "rasterizer_environment_fog",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_fog_screen",
		name: "rasterizer_environment_fog_screen",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_water",
		name: "rasterizer_water",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_lens_flares",
		name: "rasterizer_lens_flares",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_dynamic_unlit_geometry",
		name: "rasterizer_dynamic_unlit_geometry",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_dynamic_lit_geometry",
		name: "rasterizer_dynamic_lit_geometry",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_dynamic_screen_geometry",
		name: "rasterizer_dynamic_screen_geometry",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_hud_motion_sensor",
		name: "rasterizer_hud_motion_sensor",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_detail_objects",
		name: "rasterizer_detail_objects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_debug_geometry",
		name: "rasterizer_debug_geometry",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_debug_geometry_multipass",
		name: "rasterizer_debug_geometry_multipass",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_fog_atmosphere",
		name: "rasterizer_fog_atmosphere",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_fog_plane",
		name: "rasterizer_fog_plane",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_bump_mapping",
		name: "rasterizer_bump_mapping",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_lightmap_ambient",
		name: "rasterizer_lightmap_ambient",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_lightmap_mode",
		name: "rasterizer_lightmap_mode",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_lightmaps_incident_radiosity",
		name: "rasterizer_lightmaps_incident_radiosity",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_lightmaps_filtering",
		name: "rasterizer_lightmaps_filtering",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_model_lighting_ambient",
		name: "rasterizer_model_lighting_ambient",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_environment_alpha_testing",
		name: "rasterizer_environment_alpha_testing",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_environment_specular_mask",
		name: "rasterizer_environment_specular_mask",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_shadows_convolution",
		name: "rasterizer_shadows_convolution",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_shadows_debug",
		name: "rasterizer_shadows_debug",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_water_mipmapping",
		name: "rasterizer_water_mipmapping",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_active_camouflage",
		name: "rasterizer_active_camouflage",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_active_camouflage_multipass",
		name: "rasterizer_active_camouflage_multipass",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_plasma_energy",
		name: "rasterizer_plasma_energy",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_lens_flares_occlusion",
		name: "rasterizer_lens_flares_occlusion",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_lens_flares_occlusion_debug",
		name: "rasterizer_lens_flares_occlusion_debug",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_ray_of_buddha",
		name: "rasterizer_ray_of_buddha",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_screen_flashes",
		name: "rasterizer_screen_flashes",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_screen_effects",
		name: "rasterizer_screen_effects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_profile_log",
		name: "rasterizer_profile_log",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_detail_objects_offset_multiplier",
		name: "rasterizer_detail_objects_offset_multiplier",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_zbias",
		name: "rasterizer_zbias",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_zoffset",
		name: "rasterizer_zoffset",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "force_all_player_views_to_default_player",
		name: "force_all_player_views_to_default_player",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_safe_frame_bounds",
		name: "rasterizer_safe_frame_bounds",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "freeze_flying_camera",
		name: "freeze_flying_camera",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_zsprites",
		name: "rasterizer_zsprites",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "rasterizer_filthy_decal_fog_hack",
		name: "rasterizer_filthy_decal_fog_hack",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "pad3",
		name: "pad3",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "pad3_scale",
		name: "pad3_scale",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "f0",
		name: "f0",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "f1",
		name: "f1",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "f2",
		name: "f2",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "f3",
		name: "f3",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "f4",
		name: "f4",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "f5",
		name: "f5",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "rasterizer_effects_level",
		name: "rasterizer_effects_level",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "rasterizer_fps",
		name: "rasterizer_fps",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_no_frustum_clip",
		name: "debug_no_frustum_clip",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_frustum",
		name: "debug_frustum",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "screenshot_size",
		name: "screenshot_size",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "screenshot_count",
		name: "screenshot_count",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "terminal_render",
		name: "terminal_render",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_spawn_count",
		name: "player_spawn_count",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "debug_object_garbage_collection",
		name: "debug_object_garbage_collection",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_render_freeze",
		name: "debug_render_freeze",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "temporary_hud",
		name: "temporary_hud",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_leaf_index",
		name: "debug_leaf_index",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "debug_leaf_portal_index",
		name: "debug_leaf_portal_index",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "debug_leaf_portals",
		name: "debug_leaf_portals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_unit_animations",
		name: "debug_unit_animations",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_damage_taken",
		name: "debug_damage_taken",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_deathless_player",
		name: "cheat_deathless_player",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_jetpack",
		name: "cheat_jetpack",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_infinite_ammo",
		name: "cheat_infinite_ammo",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_bottomless_clip",
		name: "cheat_bottomless_clip",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_bump_possession",
		name: "cheat_bump_possession",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_super_jump",
		name: "cheat_super_jump",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_reflexive_damage_effects",
		name: "cheat_reflexive_damage_effects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_medusa",
		name: "cheat_medusa",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_omnipotent",
		name: "cheat_omnipotent",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "cheat_controller",
		name: "cheat_controller",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "effects_corpse_nonviolent",
		name: "effects_corpse_nonviolent",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_sound_cache",
		name: "debug_sound_cache",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_sound_cache_graph",
		name: "debug_sound_cache_graph",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "sound_obstruction_ratio",
		name: "sound_obstruction_ratio",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "debug_sound",
		name: "debug_sound",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_looping_sound",
		name: "debug_looping_sound",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_sound_channels",
		name: "debug_sound_channels",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_sound_channels_detail",
		name: "debug_sound_channels_detail",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_sound_hardware",
		name: "debug_sound_hardware",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "loud_dialog_hack",
		name: "loud_dialog_hack",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "sound_gain_under_dialog",
		name: "sound_gain_under_dialog",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "object_light_ambient_base",
		name: "object_light_ambient_base",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "object_light_ambient_scale",
		name: "object_light_ambient_scale",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "object_light_secondary_scale",
		name: "object_light_secondary_scale",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "object_light_interpolate",
		name: "object_light_interpolate",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "model_animation_compression",
		name: "model_animation_compression",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "model_animation_data_compressed_size",
		name: "model_animation_data_compressed_size",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_data_uncompressed_size",
		name: "model_animation_data_uncompressed_size",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_data_compression_savings_in_bytes",
		name: "model_animation_data_compression_savings_in_bytes",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_data_compression_savings_in_bytes_at_import",
		name: "model_animation_data_compression_savings_in_bytes_at_import",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_data_compression_savings_in_percent",
		name: "model_animation_data_compression_savings_in_percent",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "model_animation_bullshit0",
		name: "model_animation_bullshit0",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_bullshit1",
		name: "model_animation_bullshit1",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_bullshit2",
		name: "model_animation_bullshit2",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "model_animation_bullshit3",
		name: "model_animation_bullshit3",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "rider_ejection",
		name: "rider_ejection",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "stun_enable",
		name: "stun_enable",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_sprites",
		name: "debug_sprites",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_portals",
		name: "debug_portals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_inactive_objects",
		name: "debug_inactive_objects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects",
		name: "debug_objects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_position_velocity",
		name: "debug_objects_position_velocity",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_root_node",
		name: "debug_objects_root_node",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_bounding_spheres",
		name: "debug_objects_bounding_spheres",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_collision_models",
		name: "debug_objects_collision_models",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_physics",
		name: "debug_objects_physics",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_names",
		name: "debug_objects_names",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_pathfinding_spheres",
		name: "debug_objects_pathfinding_spheres",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_unit_vectors",
		name: "debug_objects_unit_vectors",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_unit_seats",
		name: "debug_objects_unit_seats",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_unit_mouth_apeture",
		name: "debug_objects_unit_mouth_apeture",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_biped_physics_pills",
		name: "debug_objects_biped_physics_pills",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_biped_autoaim_pills",
		name: "debug_objects_biped_autoaim_pills",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_vehicle_powered_mass_points",
		name: "debug_objects_vehicle_powered_mass_points",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_objects_devices",
		name: "debug_objects_devices",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "render model_nodes",
		name: "render model_nodes",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "render model_vertex_counts",
		name: "render model_vertex_counts",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "render model_index_counts",
		name: "render model_index_counts",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "render model_markers",
		name: "render model_markers",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "render model_no_geometry",
		name: "render model_no_geometry",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "render_shadows",
		name: "render_shadows",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_damage",
		name: "debug_damage",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_scripting",
		name: "debug_scripting",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_trigger_volumes",
		name: "debug_trigger_volumes",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_point_physics",
		name: "debug_point_physics",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_physics_disable_penetration_freeze",
		name: "debug_physics_disable_penetration_freeze",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_motion_sensor_draw_all_units",
		name: "debug_motion_sensor_draw_all_units",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug",
		name: "collision_debug",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_spray",
		name: "collision_debug_spray",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_features",
		name: "collision_debug_features",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_repeat",
		name: "collision_debug_repeat",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_front_facing_surfaces",
		name: "collision_debug_flag_front_facing_surfaces",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_back_facing_surfaces",
		name: "collision_debug_flag_back_facing_surfaces",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_ignore_two_sided_surfaces",
		name: "collision_debug_flag_ignore_two_sided_surfaces",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_ignore_invisible_surfaces",
		name: "collision_debug_flag_ignore_invisible_surfaces",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_ignore_breakable_surfaces",
		name: "collision_debug_flag_ignore_breakable_surfaces",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_structure",
		name: "collision_debug_flag_structure",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_media",
		name: "collision_debug_flag_media",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects",
		name: "collision_debug_flag_objects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_bipeds",
		name: "collision_debug_flag_objects_bipeds",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_vehicles",
		name: "collision_debug_flag_objects_vehicles",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_weapons",
		name: "collision_debug_flag_objects_weapons",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_equipment",
		name: "collision_debug_flag_objects_equipment",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_projectiles",
		name: "collision_debug_flag_objects_projectiles",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_scenery",
		name: "collision_debug_flag_objects_scenery",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_machines",
		name: "collision_debug_flag_objects_machines",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_controls",
		name: "collision_debug_flag_objects_controls",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_light_fixtures",
		name: "collision_debug_flag_objects_light_fixtures",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_objects_placeholders",
		name: "collision_debug_flag_objects_placeholders",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_try_to_keep_location_valid",
		name: "collision_debug_flag_try_to_keep_location_valid",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_skip_passthrough_bipeds",
		name: "collision_debug_flag_skip_passthrough_bipeds",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_flag_use_vehicle_physics",
		name: "collision_debug_flag_use_vehicle_physics",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "collision_debug_point_x",
		name: "collision_debug_point_x",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_point_y",
		name: "collision_debug_point_y",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_point_z",
		name: "collision_debug_point_z",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_vector_i",
		name: "collision_debug_vector_i",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_vector_j",
		name: "collision_debug_vector_j",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_vector_k",
		name: "collision_debug_vector_k",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_length",
		name: "collision_debug_length",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_width",
		name: "collision_debug_width",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_height",
		name: "collision_debug_height",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "collision_debug_phantom_bsp",
		name: "collision_debug_phantom_bsp",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_obstacle_path",
		name: "debug_obstacle_path",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_obstacle_path_on_failure",
		name: "debug_obstacle_path_on_failure",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_obstacle_path_start_point_x",
		name: "debug_obstacle_path_start_point_x",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "debug_obstacle_path_start_point_y",
		name: "debug_obstacle_path_start_point_y",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "debug_obstacle_path_start_surface_index",
		name: "debug_obstacle_path_start_surface_index",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "debug_obstacle_path_goal_point_x",
		name: "debug_obstacle_path_goal_point_x",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "debug_obstacle_path_goal_point_y",
		name: "debug_obstacle_path_goal_point_y",
		arguments: [],
		returns: "real"
	},
	{
		symbol: "debug_obstacle_path_goal_surface_index",
		name: "debug_obstacle_path_goal_surface_index",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "debug_camera",
		name: "debug_camera",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_player",
		name: "debug_player",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_structure",
		name: "debug_structure",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_structure_automatic",
		name: "debug_structure_automatic",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_bsp",
		name: "debug_bsp",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_input",
		name: "debug_input",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_permanent_decals",
		name: "debug_permanent_decals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_fog_planes",
		name: "debug_fog_planes",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "decals",
		name: "decals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_decals",
		name: "debug_decals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_object_lights",
		name: "debug_object_lights",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_lights",
		name: "debug_lights",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_biped_physics",
		name: "debug_biped_physics",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_biped_skip_update",
		name: "debug_biped_skip_update",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_biped_skip_collision",
		name: "debug_biped_skip_collision",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_biped_limp_body_disable",
		name: "debug_biped_limp_body_disable",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_collision_skip_objects",
		name: "debug_collision_skip_objects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_collision_skip_vectors",
		name: "debug_collision_skip_vectors",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_material_effects",
		name: "debug_material_effects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "weather",
		name: "weather",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "breakable_surfaces",
		name: "breakable_surfaces",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "decals",
		name: "decals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "recover_saved_games_hack",
		name: "recover_saved_games_hack",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "radiosity_quality",
		name: "radiosity_quality",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "radiosity_step_count",
		name: "radiosity_step_count",
		arguments: [],
		returns: "short"
	},
	{
		symbol: "radiosity_lines",
		name: "radiosity_lines",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "radiosity_normals",
		name: "radiosity_normals",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "structures_use_pvs_for_vs",
		name: "structures_use_pvs_for_vs",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_detail_objects",
		name: "debug_detail_objects",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "controls_enable_crouch",
		name: "controls_enable_crouch",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "controls_swapped",
		name: "controls_swapped",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "controls_enable_doubled_spin",
		name: "controls_enable_doubled_spin",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "controls_swap_doubled_spin_state",
		name: "controls_swap_doubled_spin_state",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_autoaim",
		name: "player_autoaim",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "player_magnetism",
		name: "player_magnetism",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_player_teleport",
		name: "debug_player_teleport",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "director_camera_switch_fast",
		name: "director_camera_switch_fast",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "director_camera_switching",
		name: "director_camera_switching",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_framerate",
		name: "debug_framerate",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "display_framerate",
		name: "display_framerate",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "framerate_throttle",
		name: "framerate_throttle",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "framerate_lock",
		name: "framerate_lock",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_game_save",
		name: "debug_game_save",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "allow_out_of_sync",
		name: "allow_out_of_sync",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "global_connection_dont_timeout",
		name: "global_connection_dont_timeout",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "slow_server_startup_safety_zone_in_seconds",
		name: "slow_server_startup_safety_zone_in_seconds",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "find_all_fucked_up_shit",
		name: "find_all_fucked_up_shit",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "error_suppress_all",
		name: "error_suppress_all",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "run_game_scripts",
		name: "run_game_scripts",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "debug_score",
		name: "debug_score",
		arguments: [],
		returns: "long"
	},
	{
		symbol: "object_prediction",
		name: "object_prediction",
		arguments: [],
		returns: "boolean"
	},
	{
		symbol: "developer_mode",
		name: "developer_mode",
		arguments: [],
		returns: "short"
	}
];

export default HCEFunctions;

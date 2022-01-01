import FunctionType from "../types/function-type/FunctionType";

const H3Functions: FunctionType[] = [
	{
		symbol: "log_print",
		name: "log_print",
		description: "Prints a string to the hs log file.",
		arguments: [
			"string"
		],
		id: "log_print"
	},
	{
		symbol: "debug_scripting_show_thread",
		name: "debug_scripting_show_thread",
		description: "Shows or hides the display of any thread containing the given substring.",
		arguments: [
			"string",
			"boolean"
		],
		id: "debug_scripting_show_thread"
	},
	{
		symbol: "debug_script_thread",
		name: "debug_script_thread",
		description: "Verbose threads spew to log about script and function calls.",
		arguments: [
			"string",
			"boolean"
		],
		id: "debug_script_thread"
	},
	{
		symbol: "debug_scripting",
		name: "debug_scripting",
		description: "Turn on/off hs script debugging.",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "debug_scripting"
	},
	{
		symbol: "debug_scripting_globals",
		name: "debug_scripting_globals",
		description: "Turn on/off hs global debugging.",
		arguments: [
			"boolean"
		],
		id: "debug_scripting_globals"
	},
	{
		symbol: "breakpoint",
		name: "breakpoint",
		description: "If breakpoints are enabled, pause execution when this statement is hit (displaying the given message).",
		arguments: [
			"string"
		],
		id: "breakpoint"
	},
	{
		symbol: "kill_active_scripts",
		name: "kill_active_scripts",
		description: "Terminates all currently running threads.",
		arguments: [],
		id: "kill_active_scripts"
	},
	{
		symbol: "get_executing_running_thread",
		name: "get_executing_running_thread",
		description: "Retrieves the current executing thread index",
		arguments: [],
		id: "get_executing_running_thread"
	},
	{
		symbol: "kill_thread",
		name: "kill_thread",
		description: "Kill the specified thread",
		arguments: [
			"long"
		],
		id: "kill_thread"
	},
	{
		symbol: "script_started",
		name: "script_started",
		description: "Returns true if the continuous, dormant or startup script was started.",
		arguments: [
			"string"
		],
		returns: "boolean",
		id: "script_started"
	},
	{
		symbol: "script_finished",
		name: "script_finished",
		description: "Returns true if the continuous, dormant or startup script was finished.",
		arguments: [
			"string"
		],
		returns: "boolean",
		id: "script_finished"
	},
	{
		symbol: "kill_volume_enable",
		name: "kill_volume_enable",
		description: "Enables a kill volume",
		arguments: [
			"trigger_volume"
		],
		id: "kill_volume_enable"
	},
	{
		symbol: "kill_volume_disable",
		name: "kill_volume_disable",
		description: "Disables a kill volume",
		arguments: [
			"trigger_volume"
		],
		id: "kill_volume_disable"
	},
	{
		symbol: "volume_test_players",
		name: "volume_test_players",
		description: "Returns true if any players are within the specified volume. trigger volume must have been postprocessed",
		arguments: [
			"trigger_volume"
		],
		returns: "boolean",
		id: "volume_test_players"
	},
	{
		symbol: "volume_test_players_all",
		name: "volume_test_players_all",
		description: "Returns true if all players are within the specified volume. trigger volume must have been postprocessed",
		arguments: [
			"trigger_volume"
		],
		returns: "boolean",
		id: "volume_test_players_all"
	},
	{
		symbol: "volume_return_objects",
		name: "volume_return_objects",
		description: "Returns list of objects in volume or (max 128).",
		arguments: [
			"trigger_volume"
		],
		returns: "object_list",
		id: "volume_return_objects"
	},
	{
		symbol: "volume_return_objects_by_type",
		name: "volume_return_objects_by_type",
		description: "Returns list of objects in volume or (max 128).",
		arguments: [
			"trigger_volume",
			"long"
		],
		returns: "object_list",
		id: "volume_return_objects_by_type"
	},
	{
		symbol: "zone_set_trigger_volume_enable",
		name: "zone_set_trigger_volume_enable",
		description: "Enables/disables the trigger volume(s) with the given name that cause zone set switches",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "zone_set_trigger_volume_enable"
	},
	{
		symbol: "effect_new_random",
		name: "effect_new_random",
		description: "Starts the specified effect at one of the points in the given a point set.",
		arguments: [
			"effect",
			"point_reference"
		],
		id: "effect_new_random"
	},
	{
		symbol: "effect_new_at_ai_point",
		name: "effect_new_at_ai_point",
		description: "Starts the specified effect at the specified ai point.",
		arguments: [
			"effect",
			"point_reference"
		],
		id: "effect_new_at_ai_point"
	},
	{
		symbol: "effect_new_on_object_marker",
		name: "effect_new_on_object_marker",
		description: "Starts the specified effect on the specified object at the specified marker.",
		arguments: [
			"effect",
			"object",
			"string_id"
		],
		id: "effect_new_on_object_marker"
	},
	{
		symbol: "effect_new_on_ground",
		name: "effect_new_on_ground",
		description: "Starts the specified effect on the ground underneath the object's root.",
		arguments: [
			"effect",
			"object"
		],
		id: "effect_new_on_ground"
	},
	{
		symbol: "damage_object_effect",
		name: "damage_object_effect",
		description: "Causes the specified damage at the specified object.",
		arguments: [
			"damage",
			"object"
		],
		id: "damage_object_effect"
	},
	{
		symbol: "damage_objects_effect",
		name: "damage_objects_effect",
		description: "Causes the specified damage at the specified object list.",
		arguments: [
			"damage",
			"object_list"
		],
		id: "damage_objects_effect"
	},
	{
		symbol: "damage_object",
		name: "damage_object",
		description: "Causes the specified damage at the specified object.",
		arguments: [
			"object",
			"string_id",
			"real"
		],
		id: "damage_object"
	},
	{
		symbol: "damage_objects",
		name: "damage_objects",
		description: "Causes the specified damage at the specified object list.",
		arguments: [
			"object_list",
			"string_id",
			"real"
		],
		id: "damage_objects"
	},
	{
		symbol: "damage_players",
		name: "damage_players",
		description: "Damages all players with the given damage effect",
		arguments: [
			"damage"
		],
		id: "damage_players"
	},
	{
		symbol: "soft_ceiling_enable",
		name: "soft_ceiling_enable",
		description: "Turn on or off a soft ceiling",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "soft_ceiling_enable"
	},
	{
		symbol: "object_create_clone",
		name: "object_create_clone",
		description: "Creates an object, potentially resulting in multiple objects if it already exists.",
		arguments: [
			"object_name"
		],
		id: "object_create_clone"
	},
	{
		symbol: "object_create_if_necessary",
		name: "object_create_if_necessary",
		description: "Creates an object if it doesn't already exists.",
		arguments: [
			"object_name"
		],
		id: "object_create_if_necessary"
	},
	{
		symbol: "object_create_clone_containing",
		name: "object_create_clone_containing",
		description: "Creates clones for all objects from the scenario whose names contain the given substring.",
		arguments: [
			"string"
		],
		id: "object_create_clone_containing"
	},
	{
		symbol: "object_create_folder",
		name: "object_create_folder",
		description: "Creates all the objects in the given folder",
		arguments: [
			"folder"
		],
		id: "object_create_folder"
	},
	{
		symbol: "object_destroy_type_mask",
		name: "object_destroy_type_mask",
		description: "Destroys all objects matching the type mask",
		arguments: [
			"long"
		],
		id: "object_destroy_type_mask"
	},
	{
		symbol: "object_destroy_folder",
		name: "object_destroy_folder",
		description: "Destroys all objects in the given folder.",
		arguments: [
			"folder"
		],
		id: "object_destroy_folder"
	},
	{
		symbol: "object_hide",
		name: "object_hide",
		description: "Hides or shows the object passed in",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_hide"
	},
	{
		symbol: "object_set_shadowless",
		name: "object_set_shadowless",
		description: "Set/reset shadow castingness of object",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_shadowless"
	},
	{
		symbol: "object_buckling_magnitude_get",
		name: "object_buckling_magnitude_get",
		description: "Returns the amoount [0-1] that a scarab is buckling",
		arguments: [
			"object"
		],
		returns: "real",
		id: "object_buckling_magnitude_get"
	},
	{
		symbol: "object_function_set",
		name: "object_function_set",
		description: "Sets a global object function (0-3) to value",
		arguments: [
			"long",
			"real"
		],
		id: "object_function_set"
	},
	{
		symbol: "object_set_function_variable",
		name: "object_set_function_variable",
		description: "Sets funciton variable for sin-o-matic use",
		arguments: [
			"object",
			"string_id",
			"real",
			"real"
		],
		id: "object_set_function_variable"
	},
	{
		symbol: "object_clear_function_variable",
		name: "object_clear_function_variable",
		description: "Clears one funciton variables for sin-o-matic use",
		arguments: [
			"object",
			"string_id"
		],
		id: "object_clear_function_variable"
	},
	{
		symbol: "object_clear_all_function_variables",
		name: "object_clear_all_function_variables",
		description: "Clears all funciton variables for sin-o-matic use",
		arguments: [
			"object"
		],
		id: "object_clear_all_function_variables"
	},
	{
		symbol: "object_dynamic_simulation_disable",
		name: "object_dynamic_simulation_disable",
		description: "Disabled dynamic simulation for this object (makes it fixed)",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_dynamic_simulation_disable"
	},
	{
		symbol: "object_set_phantom_power",
		name: "object_set_phantom_power",
		description: "Sets phantom power to be latched at 1.0f or 0.0f",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_phantom_power"
	},
	{
		symbol: "object_wake_physics",
		name: "object_wake_physics",
		description: "Wakes physics of an object.  For example it would make an usupported crate fall",
		arguments: [
			"object"
		],
		id: "object_wake_physics"
	},
	{
		symbol: "object_get_health",
		name: "object_get_health",
		description: "Returns the health [0,1] of the object, returns -1 if the object does not exist",
		arguments: [
			"object"
		],
		returns: "real",
		id: "object_get_health"
	},
	{
		symbol: "object_get_shield",
		name: "object_get_shield",
		description: "Returns the shield [0,1] of the object, returns -1 if the object does not exist",
		arguments: [
			"object"
		],
		returns: "real",
		id: "object_get_shield"
	},
	{
		symbol: "object_set_shield_effect",
		name: "object_set_shield_effect",
		description: "Sets the shield response effect (not current shield amount) to a given value over the given number of seconds (cinematic use only, remember to call (object_set_shield_effect 0 0) after use!)",
		arguments: [
			"object",
			"real",
			"real"
		],
		id: "object_set_shield_effect"
	},
	{
		symbol: "object_set_physics",
		name: "object_set_physics",
		description: "Prevents an object from running physics or colliding with any other objects",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_physics"
	},
	{
		symbol: "object_get_parent",
		name: "object_get_parent",
		description: "Returns the parent of the given object",
		arguments: [
			"object"
		],
		returns: "object",
		id: "object_get_parent"
	},
	{
		symbol: "objects_attach",
		name: "objects_attach",
		description: "Attaches the second object to the first both strings can be empty",
		arguments: [
			"object",
			"string_id",
			"object",
			"string_id"
		],
		id: "objects_attach"
	},
	{
		symbol: "object_at_marker",
		name: "object_at_marker",
		description: "Returns the object attached to the marker of the given parent object",
		arguments: [
			"object",
			"string_id"
		],
		returns: "object",
		id: "object_at_marker"
	},
	{
		symbol: "object_set_velocity",
		name: "object_set_velocity",
		description: "Sets the (object-relative) forward velocity of the given object",
		arguments: [
			"object",
			"real"
		],
		id: "object_set_velocity"
	},
	{
		symbol: "object_set_inertia_tensor_scale",
		name: "object_set_inertia_tensor_scale",
		description: "0==default of 1.0, otherwise it is scale on this objects inertia tensor",
		arguments: [
			"object",
			"real"
		],
		id: "object_set_inertia_tensor_scale"
	},
	{
		symbol: "object_set_collision_damage_armor_scale",
		name: "object_set_collision_damage_armor_scale",
		description: "0==default of 1.0, otherwise it is scale on how this objects takes collisoin damage, >1 == more protection, <1 == less",
		arguments: [
			"object",
			"real"
		],
		id: "object_set_collision_damage_armor_scale"
	},
	{
		symbol: "object_set_velocity",
		name: "object_set_velocity",
		description: "Sets the (object-relative) velocity of the given object",
		arguments: [
			"object",
			"real",
			"real",
			"real"
		],
		id: "object_set_velocity1"
	},
	{
		symbol: "object_set_deleted_when_deactivated",
		name: "object_set_deleted_when_deactivated",
		description: "When this object deactivates it will be deleted",
		arguments: [
			"object"
		],
		id: "object_set_deleted_when_deactivated"
	},
	{
		symbol: "object_copy_player_appearance",
		name: "object_copy_player_appearance",
		description: "Copy appearance into object from player n (starts counting from 0)",
		arguments: [
			"object",
			"long"
		],
		id: "object_copy_player_appearance"
	},
	{
		symbol: "object_model_target_destroyed",
		name: "object_model_target_destroyed",
		description: "Returns TRUE if the specified model target is destroyed",
		arguments: [
			"object",
			"string_id"
		],
		returns: "boolean",
		id: "object_model_target_destroyed"
	},
	{
		symbol: "object_model_targets_destroyed",
		name: "object_model_targets_destroyed",
		description: "Returns TRUE if the specified model target is destroyed",
		arguments: [
			"object",
			"string_id"
		],
		returns: "short",
		id: "object_model_targets_destroyed"
	},
	{
		symbol: "object_damage_damage_section",
		name: "object_damage_damage_section",
		description: "Applies damage to a damage section, causing all manner of effects/constraint breakage to occur",
		arguments: [
			"object",
			"string_id",
			"real"
		],
		id: "object_damage_damage_section"
	},
	{
		symbol: "object_cannot_die",
		name: "object_cannot_die",
		description: "Set whether the object can die from damage or not (as opposed to by scripting)",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_cannot_die"
	},
	{
		symbol: "object_vitality_pinned",
		name: "object_vitality_pinned",
		description: "Returns TRUE if the object's vitality is currently pinned at some minimum value because it cannot die.",
		arguments: [
			"object"
		],
		returns: "boolean",
		id: "object_vitality_pinned"
	},
	{
		symbol: "garbage_collect_unsafe",
		name: "garbage_collect_unsafe",
		description: "Forces all garbage objects to be collected immediately, even those visible to a player (dangerous!)",
		arguments: [],
		id: "garbage_collect_unsafe"
	},
	{
		symbol: "garbage_collect_multiplayer",
		name: "garbage_collect_multiplayer",
		description: "Runs multiplayer garbage collection",
		arguments: [],
		id: "garbage_collect_multiplayer"
	},
	{
		symbol: "object_cinematic_lod",
		name: "object_cinematic_lod",
		description: "Makes an object use the highest lod for the remainder of the levels' cutscenes.",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_cinematic_lod"
	},
	{
		symbol: "object_cinematic_collision",
		name: "object_cinematic_collision",
		description: "Makes an object not collide with other cinematic collision objects.",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_cinematic_collision"
	},
	{
		symbol: "object_cinematic_visibility",
		name: "object_cinematic_visibility",
		description: "Makes an object bypass visibility and always render during cinematics.",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_cinematic_visibility"
	},
	{
		symbol: "objects_predict_high",
		name: "objects_predict_high",
		description: "Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
		arguments: [
			"object_list"
		],
		id: "objects_predict_high"
	},
	{
		symbol: "objects_predict_low",
		name: "objects_predict_low",
		description: "Loads textures/geometry/sounds necessary to present objects that are about to come on-screen",
		arguments: [
			"object_list"
		],
		id: "objects_predict_low"
	},
	{
		symbol: "object_type_predict_high",
		name: "object_type_predict_high",
		description: "Loads textures necessary to draw an object that's about to come on-screen.",
		arguments: [
			"object_definition"
		],
		id: "object_type_predict_high"
	},
	{
		symbol: "object_type_predict_low",
		name: "object_type_predict_low",
		description: "Loads textures necessary to draw an object that's about to come on-screen.",
		arguments: [
			"object_definition"
		],
		id: "object_type_predict_low"
	},
	{
		symbol: "object_teleport_to_ai_point",
		name: "object_teleport_to_ai_point",
		description: "Moves the specified object to the specified ai point.",
		arguments: [
			"object",
			"point_reference"
		],
		id: "object_teleport_to_ai_point"
	},
	{
		symbol: "object_set_shield_stun",
		name: "object_set_shield_stun",
		description: "Set how long the shield will be stunned for, 0 is unstunned",
		arguments: [
			"object",
			"real"
		],
		id: "object_set_shield_stun"
	},
	{
		symbol: "object_set_shield_stun_infinite",
		name: "object_set_shield_stun_infinite",
		description: "Make this objects shield be stunned permanently",
		arguments: [
			"object"
		],
		id: "object_set_shield_stun_infinite"
	},
	{
		symbol: "object_set_permutation",
		name: "object_set_permutation",
		description: "Sets the desired region (use \"\" for all regions) to the permutation with the given name, e.g. (object_set_permutation flood \"right arm\" ~damaged)",
		arguments: [
			"object",
			"string_id",
			"string_id"
		],
		id: "object_set_permutation"
	},
	{
		symbol: "object_set_region_state",
		name: "object_set_region_state",
		description: "Sets the desired region (use \"\" for all regions) to the model state with the given name, e.g. (object_set_region_state marine head destroyed)",
		arguments: [
			"object",
			"string_id",
			"model_state"
		],
		id: "object_set_region_state"
	},
	{
		symbol: "map_info",
		name: "map_info",
		description: "Prints the map, zone set, active bsps, and current bsp",
		arguments: [],
		id: "map_info"
	},
	{
		symbol: "position_predict",
		name: "position_predict",
		description: "In: x, y, z position. loads textures/geometry/sounds necessary to present locations that are about to come on-screen.",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "position_predict"
	},
	{
		symbol: "shader_predict",
		name: "shader_predict",
		description: "In: shader name. loads textures necessary for a shader.",
		arguments: [
			"shader"
		],
		id: "shader_predict"
	},
	{
		symbol: "bitmap_predict",
		name: "bitmap_predict",
		description: "In: bitmap name. loads all the bitmaps in that bitmap group",
		arguments: [
			"bitmap"
		],
		id: "bitmap_predict"
	},
	{
		symbol: "game_engine_objects",
		name: "game_engine_objects",
		description: "Returns a list of the special game engine objects",
		arguments: [],
		returns: "object_list",
		id: "game_engine_objects"
	},
	{
		symbol: "physics_set_velocity_frame",
		name: "physics_set_velocity_frame",
		description: "Sets a local frame of motion for updating physics of things that wish to respect it",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "physics_set_velocity_frame"
	},
	{
		symbol: "physics_disable_character_ground_adhesion_forces",
		name: "physics_disable_character_ground_adhesion_forces",
		description: "Turn off ground adhesion forces so you can play tricks with gravity",
		arguments: [
			"real"
		],
		id: "physics_disable_character_ground_adhesion_forces"
	},
	{
		symbol: "havok_debug_start",
		name: "havok_debug_start",
		description: "Start up the havok visual debugger",
		arguments: [],
		id: "havok_debug_start"
	},
	{
		symbol: "havok_dump_world",
		name: "havok_dump_world",
		description: "Dump the state of the havok world, with our without a movie",
		arguments: [
			"string",
			"boolean"
		],
		id: "havok_dump_world"
	},
	{
		symbol: "havok_dump_world_close_movie",
		name: "havok_dump_world_close_movie",
		description: "End the capture of a havok dump movie",
		arguments: [],
		id: "havok_dump_world_close_movie"
	},
	{
		symbol: "havok_profile_start",
		name: "havok_profile_start",
		description: "Start profiling havok",
		arguments: [],
		id: "havok_profile_start"
	},
	{
		symbol: "havok_profile_stop",
		name: "havok_profile_stop",
		description: "Stop profiling havok, and save the results",
		arguments: [],
		id: "havok_profile_stop"
	},
	{
		symbol: "havok_profile_range",
		name: "havok_profile_range",
		description: "Captures timers and a movie of a specific tick range",
		arguments: [
			"long",
			"long"
		],
		id: "havok_profile_range"
	},
	{
		symbol: "havok_reset_allocated_state",
		name: "havok_reset_allocated_state",
		description: "Strips down and builds back up all allocated havok memory",
		arguments: [],
		id: "havok_reset_allocated_state"
	},
	{
		symbol: "print_light_state",
		name: "print_light_state",
		description: "Outputs text light state",
		arguments: [],
		id: "print_light_state"
	},
	{
		symbol: "render_lights_enable_cinematic_shadow",
		name: "render_lights_enable_cinematic_shadow",
		description: "Enable/disable the specified unit to receive cinematic shadows where the shadow is focused about a radius around a marker name",
		arguments: [
			"boolean",
			"object",
			"string_id",
			"real"
		],
		id: "render_lights_enable_cinematic_shadow"
	},
	{
		symbol: "texture_camera_set_object_marker",
		name: "texture_camera_set_object_marker",
		description: "Sets the render texture camera to a given object marker",
		arguments: [
			"object",
			"string_id",
			"real"
		],
		id: "texture_camera_set_object_marker"
	},
	{
		symbol: "texture_camera_set_position",
		name: "texture_camera_set_position",
		description: "Sets the render texture camera position",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "texture_camera_set_position"
	},
	{
		symbol: "texture_camera_set_target",
		name: "texture_camera_set_target",
		description: "Sets the render texture camera target",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "texture_camera_set_target"
	},
	{
		symbol: "texture_camera_attach_to_object",
		name: "texture_camera_attach_to_object",
		description: "Attaches the render texture camera to a given object marker",
		arguments: [
			"object",
			"string_id"
		],
		id: "texture_camera_attach_to_object"
	},
	{
		symbol: "texture_camera_target_object",
		name: "texture_camera_target_object",
		description: "Targets the render texture camera to view a given object marker",
		arguments: [
			"object",
			"string_id"
		],
		id: "texture_camera_target_object"
	},
	{
		symbol: "texture_camera_position_world_offset",
		name: "texture_camera_position_world_offset",
		description: "Adds a worldspace offset to the current texture camera position",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "texture_camera_position_world_offset"
	},
	{
		symbol: "texture_camera_on",
		name: "texture_camera_on",
		description: "Turns on the render texture camera",
		arguments: [],
		id: "texture_camera_on"
	},
	{
		symbol: "texture_camera_bink",
		name: "texture_camera_bink",
		description: "Turns on the render texture camera and renders a bink to it",
		arguments: [],
		id: "texture_camera_bink"
	},
	{
		symbol: "texture_camera_off",
		name: "texture_camera_off",
		description: "Turns off the render texture camera",
		arguments: [],
		id: "texture_camera_off"
	},
	{
		symbol: "texture_camera_set_aspect_ratio",
		name: "texture_camera_set_aspect_ratio",
		description: "Sets the texture camera aspet ratio",
		arguments: [
			"real"
		],
		id: "texture_camera_set_aspect_ratio"
	},
	{
		symbol: "texture_camera_set_resolution",
		name: "texture_camera_set_resolution",
		description: "Sets the texture camera render resolution",
		arguments: [
			"long",
			"long"
		],
		id: "texture_camera_set_resolution"
	},
	{
		symbol: "texture_camera_render_mode",
		name: "texture_camera_render_mode",
		description: "Switches the texture camera render mode",
		arguments: [
			"long"
		],
		id: "texture_camera_render_mode"
	},
	{
		symbol: "texture_camera_set_fov",
		name: "texture_camera_set_fov",
		description: "Sets the field of view on the texture camera, in degrees",
		arguments: [
			"real"
		],
		id: "texture_camera_set_fov"
	},
	{
		symbol: "texture_camera_set_fov_frame_target",
		name: "texture_camera_set_fov_frame_target",
		description: "Zooms the field of view to frame the target, with target zoom factor to zoom closer",
		arguments: [
			"real"
		],
		id: "texture_camera_set_fov_frame_target"
	},
	{
		symbol: "texture_camera_enable_dynamic_lights",
		name: "texture_camera_enable_dynamic_lights",
		description: "Toggle rendering of dynamic lights in the texture camera",
		arguments: [
			"boolean"
		],
		id: "texture_camera_enable_dynamic_lights"
	},
	{
		symbol: "render_debug_texture_camera",
		name: "render_debug_texture_camera",
		description: "Toggles displaying the texture camera in the corner of the screen",
		arguments: [
			"boolean"
		],
		id: "render_debug_texture_camera"
	},
	{
		symbol: "debug_structure_cluster",
		name: "debug_structure_cluster",
		description: "Specify a structure and cluster to debug",
		arguments: [
			"long",
			"long"
		],
		id: "debug_structure_cluster"
	},
	{
		symbol: "render_debug_structure_cluster_fog",
		name: "render_debug_structure_cluster_fog",
		description: "Enables cluster fog debugging",
		arguments: [
			"long"
		],
		id: "render_debug_structure_cluster_fog"
	},
	{
		symbol: "render_debug_structure_fog_plane",
		name: "render_debug_structure_fog_plane",
		description: "Enables fog plane debugging",
		arguments: [
			"long"
		],
		id: "render_debug_structure_fog_plane"
	},
	{
		symbol: "render_debug_structure_fog_plane_infinite_extent",
		name: "render_debug_structure_fog_plane_infinite_extent",
		description: "Enables fog plane debugging",
		arguments: [
			"long"
		],
		id: "render_debug_structure_fog_plane_infinite_extent"
	},
	{
		symbol: "render_debug_structure_fog_zone",
		name: "render_debug_structure_fog_zone",
		description: "Enabled fog zone debugging",
		arguments: [
			"long"
		],
		id: "render_debug_structure_fog_zone"
	},
	{
		symbol: "render_debug_structure_fog_zone_floodfill",
		name: "render_debug_structure_fog_zone_floodfill",
		description: "Enables fog zone debugging",
		arguments: [
			"long"
		],
		id: "render_debug_structure_fog_zone_floodfill"
	},
	{
		symbol: "render_debug_structure_all_fog_planes",
		name: "render_debug_structure_all_fog_planes",
		description: "Enables fog plane debugging (all)",
		arguments: [
			"boolean"
		],
		id: "render_debug_structure_all_fog_planes"
	},
	{
		symbol: "render_debug_structure_all_cluster_errors",
		name: "render_debug_structure_all_cluster_errors",
		description: "Enables cluster error debugging (all)",
		arguments: [
			"boolean"
		],
		id: "render_debug_structure_all_cluster_errors"
	},
	{
		symbol: "render_debug_structure_line_opacity",
		name: "render_debug_structure_line_opacity",
		description: "Sets the opacity (0 is default)",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "render_debug_structure_line_opacity"
	},
	{
		symbol: "render_debug_structure_text_opacity",
		name: "render_debug_structure_text_opacity",
		description: "Sets the opacity (0 is default)",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "render_debug_structure_text_opacity"
	},
	{
		symbol: "render_debug_structure_opacity",
		name: "render_debug_structure_opacity",
		description: "Sets the opacity (0 is default)",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "render_debug_structure_opacity"
	},
	{
		symbol: "render_debug_structure_non_occluded_fog_planes",
		name: "render_debug_structure_non_occluded_fog_planes",
		description: "Controls non-occluded fog plane debugging",
		arguments: [
			"boolean"
		],
		id: "render_debug_structure_non_occluded_fog_planes"
	},
	{
		symbol: "render_debug_query_object_bitmaps",
		name: "render_debug_query_object_bitmaps",
		description: "Substring of object definition name to spew out it's debug usage",
		arguments: [
			"string"
		],
		id: "render_debug_query_object_bitmaps"
	},
	{
		symbol: "render_debug_query_bsp_resources",
		name: "render_debug_query_bsp_resources",
		description: "BSP index and whether to spit out all bitmaps used",
		arguments: [
			"long",
			"boolean"
		],
		id: "render_debug_query_bsp_resources"
	},
	{
		symbol: "render_debug_query_all_object_resources",
		name: "render_debug_query_all_object_resources",
		description: "Outputs text of texture and geometry memory usage",
		arguments: [],
		id: "render_debug_query_all_object_resources"
	},
	{
		symbol: "render_debug_query_d3d_resources",
		name: "render_debug_query_d3d_resources",
		description: "Outputs text of d3d resource usage",
		arguments: [],
		id: "render_debug_query_d3d_resources"
	},
	{
		symbol: "render_debug_text_using_simple_font",
		name: "render_debug_text_using_simple_font",
		description: "Toggles use of the much faster simple_font system for debug text rendering",
		arguments: [
			"boolean"
		],
		id: "render_debug_text_using_simple_font"
	},
	{
		symbol: "render_postprocess_color_tweaking_reset",
		name: "render_postprocess_color_tweaking_reset",
		description: "Resets hue saturation filters to default",
		arguments: [],
		id: "render_postprocess_color_tweaking_reset"
	},
	{
		symbol: "scenery_animation_start",
		name: "scenery_animation_start",
		description: "Starts a custom animation playing on a piece of scenery",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id"
		],
		id: "scenery_animation_start"
	},
	{
		symbol: "scenery_animation_start_loop",
		name: "scenery_animation_start_loop",
		description: "Starts a custom looping animation playing on a piece of scenery",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id"
		],
		id: "scenery_animation_start_loop"
	},
	{
		symbol: "scenery_animation_start_relative",
		name: "scenery_animation_start_relative",
		description: "Starts a custom animation playing on a piece of scenery relative to a parent object",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id",
			"object"
		],
		id: "scenery_animation_start_relative"
	},
	{
		symbol: "scenery_animation_start_relative_loop",
		name: "scenery_animation_start_relative_loop",
		description: "Starts a custom looping animation playing on a piece of scenery relative to a parent object",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id",
			"object"
		],
		id: "scenery_animation_start_relative_loop"
	},
	{
		symbol: "scenery_animation_start_at_frame",
		name: "scenery_animation_start_at_frame",
		description: "Starts a custom animation playing on a piece of scenery at a specific frame",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id",
			"short"
		],
		id: "scenery_animation_start_at_frame"
	},
	{
		symbol: "scenery_animation_start_relative_at_frame",
		name: "scenery_animation_start_relative_at_frame",
		description: "Starts a custom animation playing on a piece of scenery relative to a specific cutscene flag at a specific frame",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id",
			"object",
			"short"
		],
		id: "scenery_animation_start_relative_at_frame"
	},
	{
		symbol: "scenery_animation_idle",
		name: "scenery_animation_idle",
		description: "Starts the idle animation (if any) for a piece of scenery",
		arguments: [
			"scenery"
		],
		id: "scenery_animation_idle"
	},
	{
		symbol: "unit_set_active_camo",
		name: "unit_set_active_camo",
		description: "Enable or disable active camo for the given unit over the specified number of seconds",
		arguments: [
			"unit",
			"boolean",
			"real"
		],
		id: "unit_set_active_camo"
	},
	{
		symbol: "unit_is_emitting",
		name: "unit_is_emitting",
		description: "Returns whether or not the given unit is current emitting an ai",
		arguments: [
			"unit"
		],
		returns: "boolean",
		id: "unit_is_emitting"
	},
	{
		symbol: "custom_animation",
		name: "custom_animation",
		description: "Starts a custom animation playing on a unit (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"boolean"
		],
		returns: "boolean",
		id: "custom_animation"
	},
	{
		symbol: "custom_animation_loop",
		name: "custom_animation_loop",
		description: "Starts a custom animation playing on a unit (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"boolean"
		],
		returns: "boolean",
		id: "custom_animation_loop"
	},
	{
		symbol: "custom_animation_relative",
		name: "custom_animation_relative",
		description: "Starts a custom animation relative to some other object (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"boolean",
			"object"
		],
		returns: "boolean",
		id: "custom_animation_relative"
	},
	{
		symbol: "custom_animation_relative_loop",
		name: "custom_animation_relative_loop",
		description: "Starts a custom animation relative to some other object (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"boolean",
			"object"
		],
		returns: "boolean",
		id: "custom_animation_relative_loop"
	},
	{
		symbol: "custom_animation_list",
		name: "custom_animation_list",
		description: "Starts a custom animation playing on a unit list (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"object_list",
			"animation_graph",
			"string_id",
			"boolean"
		],
		returns: "boolean",
		id: "custom_animation_list"
	},
	{
		symbol: "unit_custom_animation_at_frame",
		name: "unit_custom_animation_at_frame",
		description: "Starts a custom animation playing on a unit at a specific frame index(interpolates into animation if next to last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"boolean",
			"short"
		],
		returns: "boolean",
		id: "unit_custom_animation_at_frame"
	},
	{
		symbol: "unit_custom_animation_relative_at_frame",
		name: "unit_custom_animation_relative_at_frame",
		description: "Starts a custom animation playing on a unit relative to a specific cutscene flag at a specific frame index(interpolates into animation if next to last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"string_id",
			"boolean",
			"short"
		],
		id: "unit_custom_animation_relative_at_frame"
	},
	{
		symbol: "object_set_custom_animations_hold_on_last_frame",
		name: "object_set_custom_animations_hold_on_last_frame",
		description: "Changes the default behavior for custom animations",
		arguments: [
			"boolean"
		],
		id: "object_set_custom_animations_hold_on_last_frame"
	},
	{
		symbol: "object_set_custom_animations_prevent_lipsync_head_movement",
		name: "object_set_custom_animations_prevent_lipsync_head_movement",
		description: "When true, prevents lipsync from bobbing the head during custom animations. default is true.",
		arguments: [
			"boolean"
		],
		id: "object_set_custom_animations_prevent_lipsync_head_movement"
	},
	{
		symbol: "preferred_animation_list_add",
		name: "preferred_animation_list_add",
		description: "Adds an animation into the 'preferred list' of animations",
		arguments: [
			"object",
			"string_id"
		],
		id: "preferred_animation_list_add"
	},
	{
		symbol: "preferred_animation_list_clear",
		name: "preferred_animation_list_clear",
		description: "Clears the 'preferred list' of animations",
		arguments: [],
		id: "preferred_animation_list_clear"
	},
	{
		symbol: "unit_set_actively_controlled",
		name: "unit_set_actively_controlled",
		description: "Sets unit's actively controlled flag",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_set_actively_controlled"
	},
	{
		symbol: "unit_get_team_index",
		name: "unit_get_team_index",
		description: "Returns the team index of the unit, returns -1 if the unit does not have a team",
		arguments: [
			"unit"
		],
		returns: "short",
		id: "unit_get_team_index"
	},
	{
		symbol: "unit_get_enterable_by_player",
		name: "unit_get_enterable_by_player",
		description: "Returns true if a player may enter the vehicle",
		arguments: [
			"unit"
		],
		returns: "boolean",
		id: "unit_get_enterable_by_player"
	},
	{
		symbol: "unit_only_takes_damage_from_players_team",
		name: "unit_only_takes_damage_from_players_team",
		description: "Used for the tartarus boss fight",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_only_takes_damage_from_players_team"
	},
	{
		symbol: "unit_enter_vehicle",
		name: "unit_enter_vehicle",
		description: "Puts the specified unit in the specified vehicle (in the named seat)",
		arguments: [
			"unit",
			"vehicle",
			"string_id"
		],
		id: "unit_enter_vehicle"
	},
	{
		symbol: "unit_falling_damage_disable",
		name: "unit_falling_damage_disable",
		description: "Disables falling damage on unit",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_falling_damage_disable"
	},
	{
		symbol: "object_get_turret_count",
		name: "object_get_turret_count",
		description: "Returns the number of turrets attached to the given object",
		arguments: [
			"object"
		],
		returns: "real",
		id: "object_get_turret_count"
	},
	{
		symbol: "object_get_turret",
		name: "object_get_turret",
		description: "Returns the nth turret attached to the given object",
		arguments: [
			"object",
			"short"
		],
		returns: "object",
		id: "object_get_turret"
	},
	{
		symbol: "unit_board_vehicle",
		name: "unit_board_vehicle",
		description: "Causes the given unit to attempt to board the named seat",
		arguments: [
			"unit",
			"string_id"
		],
		id: "unit_board_vehicle"
	},
	{
		symbol: "unit_set_emotion",
		name: "unit_set_emotion",
		description: "Sets a unit's facial expression (-1 is none, other values depend on unit)",
		arguments: [
			"unit",
			"long",
			"real",
			"real"
		],
		id: "unit_set_emotion"
	},
	{
		symbol: "unit_set_emotion_by_name",
		name: "unit_set_emotion_by_name",
		description: "Sets a unit's facial expression by name with weight and transition time",
		arguments: [
			"unit",
			"string_id",
			"real",
			"real"
		],
		id: "unit_set_emotion_by_name"
	},
	{
		symbol: "unit_enable_eye_tracking",
		name: "unit_enable_eye_tracking",
		description: "Enable/disable eye aiming on a unit",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_enable_eye_tracking"
	},
	{
		symbol: "unit_set_integrated_flashlight",
		name: "unit_set_integrated_flashlight",
		description: "Sets a unit's flashlight on or off",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_set_integrated_flashlight"
	},
	{
		symbol: "unit_in_vehicle",
		name: "unit_in_vehicle",
		description: "Returns true if the given unit is seated on a parent unit",
		arguments: [
			"unit"
		],
		returns: "boolean",
		id: "unit_in_vehicle"
	},
	{
		symbol: "vehicle_test_seat_list",
		name: "vehicle_test_seat_list",
		description: "Tests whether the named seat has an object in the object list (use \"\" to test all seats for any unit in the list)",
		arguments: [
			"vehicle",
			"string_id",
			"object_list"
		],
		returns: "boolean",
		id: "vehicle_test_seat_list"
	},
	{
		symbol: "vehicle_test_seat",
		name: "vehicle_test_seat",
		description: "Tests whether the named seat has a specified unit in it (use \"\" to test all seats for this unit)",
		arguments: [
			"vehicle",
			"string_id",
			"unit"
		],
		returns: "boolean",
		id: "vehicle_test_seat"
	},
	{
		symbol: "unit_set_prefer_tight_camera_track",
		name: "unit_set_prefer_tight_camera_track",
		description: "Sets the unit to prefer a tight camera track",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_set_prefer_tight_camera_track"
	},
	{
		symbol: "vehicle_load_magic",
		name: "vehicle_load_magic",
		description: "Makes a list of units (named or by encounter) magically get into a vehicle, in the substring-specified seats (e.g. CD-passenger... empty string matches all seats)",
		arguments: [
			"object",
			"unit_seat_mapping",
			"object_list"
		],
		returns: "short",
		id: "vehicle_load_magic"
	},
	{
		symbol: "vehicle_unload",
		name: "vehicle_unload",
		description: "Makes units get out of an object from the substring-specified seats (e.g. CD-passenger... empty string matches all seats)",
		arguments: [
			"object",
			"unit_seat_mapping"
		],
		returns: "short",
		id: "vehicle_unload"
	},
	{
		symbol: "unit_set_animation_mode",
		name: "unit_set_animation_mode",
		description: "This unit will assume the named animation mode",
		arguments: [
			"unit",
			"string_id"
		],
		id: "unit_set_animation_mode"
	},
	{
		symbol: "unit_has_any_equipment",
		name: "unit_has_any_equipment",
		description: "Returns TRUE if the <unit> has any equipment, FALSE otherwise",
		arguments: [
			"unit"
		],
		returns: "boolean",
		id: "unit_has_any_equipment"
	},
	{
		symbol: "unit_has_equipment",
		name: "unit_has_equipment",
		description: "Returns TRUE if the <unit> has equipment <object> , FALSE otherwise",
		arguments: [
			"unit",
			"object_definition"
		],
		returns: "boolean",
		id: "unit_has_equipment"
	},
	{
		symbol: "unit_lower_weapon",
		name: "unit_lower_weapon",
		description: "Lower the units weapon over x ticks",
		arguments: [
			"unit",
			"short"
		],
		id: "unit_lower_weapon"
	},
	{
		symbol: "unit_raise_weapon",
		name: "unit_raise_weapon",
		description: "Raises the units weapon over x ticks",
		arguments: [
			"unit",
			"short"
		],
		id: "unit_raise_weapon"
	},
	{
		symbol: "unit_drop_support_weapon",
		name: "unit_drop_support_weapon",
		description: "Forces the given unit to drop its support weapon, if it is holding one",
		arguments: [
			"unit"
		],
		id: "unit_drop_support_weapon"
	},
	{
		symbol: "unit_spew_action",
		name: "unit_spew_action",
		description: "Runs the spew unit action on the specified unit",
		arguments: [
			"unit"
		],
		id: "unit_spew_action"
	},
	{
		symbol: "unit_animation_forced_seat",
		name: "unit_animation_forced_seat",
		description: "All units controlled by the player will assume the given seat name (valid values are 'asleep', 'alert', 'stand', 'crouch' and 'flee')",
		arguments: [
			"string_id"
		],
		id: "unit_animation_forced_seat"
	},
	{
		symbol: "unit_add_equipment",
		name: "unit_add_equipment",
		description: "Adds/resets the unit's health, shield, and inventory (weapons and grenades) to the named profile. resets if third parameter is true, adds if false. weapons will be marked as garbage if fourth parameter is true (for respawning equipment).",
		arguments: [
			"unit",
			"starting_profile",
			"boolean",
			"boolean"
		],
		id: "unit_add_equipment"
	},
	{
		symbol: "weapon_hold_trigger",
		name: "weapon_hold_trigger",
		description: "Turns the trigger for a weapon  on/off",
		arguments: [
			"weapon",
			"long",
			"boolean"
		],
		id: "weapon_hold_trigger"
	},
	{
		symbol: "weapon_enable_warthog_chaingun_light",
		name: "weapon_enable_warthog_chaingun_light",
		description: "Turns the trigger for a weapon  on/off",
		arguments: [
			"boolean"
		],
		id: "weapon_enable_warthog_chaingun_light"
	},
	{
		symbol: "device_group_set",
		name: "device_group_set",
		description: "Changes the desired value of the specified device group.",
		arguments: [
			"device",
			"device_group",
			"real"
		],
		returns: "boolean",
		id: "device_group_set"
	},
	{
		symbol: "device_ignore_player_set",
		name: "device_ignore_player_set",
		description: "TRUE makes the given device ignore the player (won't open for players), FALSE makes it work for the player",
		arguments: [
			"device",
			"boolean"
		],
		id: "device_ignore_player_set"
	},
	{
		symbol: "device_closes_automatically_set",
		name: "device_closes_automatically_set",
		description: "TRUE makes the given device close automatically after it has opened, FALSE makes it not",
		arguments: [
			"device",
			"boolean"
		],
		id: "device_closes_automatically_set"
	},
	{
		symbol: "device_set_position_track",
		name: "device_set_position_track",
		description: "Set the desired position track animation to use (optional interpolation time onto track)",
		arguments: [
			"device",
			"string_id",
			"real"
		],
		returns: "boolean",
		id: "device_set_position_track"
	},
	{
		symbol: "device_set_overlay_track",
		name: "device_set_overlay_track",
		description: "Set the desired overlay animation to use",
		arguments: [
			"device",
			"string_id"
		],
		returns: "boolean",
		id: "device_set_overlay_track"
	},
	{
		symbol: "device_animate_position",
		name: "device_animate_position",
		description: "Animate the position over time",
		arguments: [
			"device",
			"real",
			"real",
			"real",
			"real",
			"boolean"
		],
		id: "device_animate_position"
	},
	{
		symbol: "device_animate_overlay",
		name: "device_animate_overlay",
		description: "Animate the overlay over time",
		arguments: [
			"device",
			"real",
			"real",
			"real",
			"real"
		],
		id: "device_animate_overlay"
	},
	{
		symbol: "cheat_active_camouflage",
		name: "cheat_active_camouflage",
		description: "Gives the player active camouflage",
		arguments: [
			"boolean"
		],
		id: "cheat_active_camouflage"
	},
	{
		symbol: "cheat_active_camouflage_by_player",
		name: "cheat_active_camouflage_by_player",
		description: "Gives a specific player active camouflage",
		arguments: [
			"short",
			"boolean"
		],
		id: "cheat_active_camouflage_by_player"
	},
	{
		symbol: "drop_safe",
		name: "drop_safe",
		description: "Drops the named tag e.g. objectsehiclesansheeanshee.vehicle",
		arguments: [
			"any tag"
		],
		id: "drop_safe"
	},
	{
		symbol: "drop",
		name: "drop",
		description: "Drops the named tag e.g. objectsehiclesansheeanshee.vehicle",
		arguments: [
			"string"
		],
		id: "drop"
	},
	{
		symbol: "ai_enable",
		name: "ai_enable",
		description: "Turns all AI on or off.",
		arguments: [
			"boolean"
		],
		id: "ai_enable"
	},
	{
		symbol: "ai_enabled",
		name: "ai_enabled",
		description: "Returns whether AI is turned on or off.",
		arguments: [],
		returns: "boolean",
		id: "ai_enabled"
	},
	{
		symbol: "ai_dialogue_enable",
		name: "ai_dialogue_enable",
		description: "Turn combat dialogue on/off",
		arguments: [
			"boolean"
		],
		id: "ai_dialogue_enable"
	},
	{
		symbol: "ai_infection_suppress",
		name: "ai_infection_suppress",
		description: "Disable infection for this number of ticks",
		arguments: [
			"long"
		],
		id: "ai_infection_suppress"
	},
	{
		symbol: "ai_dialogue_log_reset",
		name: "ai_dialogue_log_reset",
		description: "Reset the dialogue log",
		arguments: [],
		id: "ai_dialogue_log_reset"
	},
	{
		symbol: "ai_dialogue_log_dump",
		name: "ai_dialogue_log_dump",
		description: "Dump a file of the given name with csv statistics on vocalizations",
		arguments: [
			"string"
		],
		id: "ai_dialogue_log_dump"
	},
	{
		symbol: "ai_get_object",
		name: "ai_get_object",
		description: "Returns the unit/object corresponding to the given actor",
		arguments: [
			"ai"
		],
		returns: "object",
		id: "ai_get_object"
	},
	{
		symbol: "ai_get_unit",
		name: "ai_get_unit",
		description: "Returns the unit/object corresponding to the given actor",
		arguments: [
			"ai"
		],
		returns: "unit",
		id: "ai_get_unit"
	},
	{
		symbol: "ai_get_squad",
		name: "ai_get_squad",
		description: "Returns the squad of the given actor. Invalid if the given ai is NOT an actor-type (i.e. is itself a squad or squad group or task",
		arguments: [
			"ai"
		],
		returns: "ai",
		id: "ai_get_squad"
	},
	{
		symbol: "ai_get_turret_ai",
		name: "ai_get_turret_ai",
		description: "Returns an the ai controlling the Nth turret attached to the given ai (or its vehicle)",
		arguments: [
			"ai",
			"short"
		],
		returns: "ai",
		id: "ai_get_turret_ai"
	},
	{
		symbol: "ai_random_smart_point",
		name: "ai_random_smart_point",
		description: "Returns a point in the given point set that a player is probably going to be able to see. Args are [point set], [min distance], [max distance], [angle-from-forward], all relative to the player",
		arguments: [
			"point_reference",
			"real",
			"real",
			"real"
		],
		returns: "point_reference",
		id: "ai_random_smart_point"
	},
	{
		symbol: "ai_nearest_point",
		name: "ai_nearest_point",
		description: "Returns the nearest point in the given point set to the given object",
		arguments: [
			"object",
			"point_reference"
		],
		returns: "point_reference",
		id: "ai_nearest_point"
	},
	{
		symbol: "ai_get_point_count",
		name: "ai_get_point_count",
		description: "Returns the number of points in the given point set",
		arguments: [
			"point_reference"
		],
		returns: "real",
		id: "ai_get_point_count"
	},
	{
		symbol: "ai_point_set_get_point",
		name: "ai_point_set_get_point",
		description: "Returns Nth point in the point set",
		arguments: [
			"point_reference",
			"short"
		],
		returns: "point_reference",
		id: "ai_point_set_get_point"
	},
	{
		symbol: "ai_attach_units",
		name: "ai_attach_units",
		description: "Attaches the specified list of units to the specified encounter.",
		arguments: [
			"object_list",
			"ai"
		],
		id: "ai_attach_units"
	},
	{
		symbol: "ai_detach_units",
		name: "ai_detach_units",
		description: "Detaches the specified list of units from all AI.",
		arguments: [
			"object_list"
		],
		id: "ai_detach_units"
	},
	{
		symbol: "ai_place_in_vehicle",
		name: "ai_place_in_vehicle",
		description: "Places the specified squad (1st arg) on the map in the vehicles belonging to the specified vehicle squad (2nd arg).",
		arguments: [
			"ai",
			"ai"
		],
		id: "ai_place_in_vehicle"
	},
	{
		symbol: "ai_cannot_die",
		name: "ai_cannot_die",
		description: "AI cannot die from damage (as opposed to by scripting)",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_cannot_die"
	},
	{
		symbol: "ai_vitality_pinned",
		name: "ai_vitality_pinned",
		description: "Returns true if the ai's units are ALL vitality pinned (see object_vitality_pinned)",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "ai_vitality_pinned"
	},
	{
		symbol: "ai_resurrect",
		name: "ai_resurrect",
		description: "Resurrect the specified mission critical AI character.",
		arguments: [
			"object"
		],
		id: "ai_resurrect"
	},
	{
		symbol: "ai_disposable",
		name: "ai_disposable",
		description: "Enables or disables automatic garbage collection for actors in the specified encounter and/or squad.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_disposable"
	},
	{
		symbol: "ai_deselect",
		name: "ai_deselect",
		description: "Clears the selected encounter.",
		arguments: [],
		id: "ai_deselect"
	},
	{
		symbol: "ai_set_weapon_up",
		name: "ai_set_weapon_up",
		description: "Force actor to hold their weapon up, instead of lowering it when idle. this does NOT cause them to draw their weapon if stowed",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_set_weapon_up"
	},
	{
		symbol: "ai_flood_disperse",
		name: "ai_flood_disperse",
		description: "Disperese a flood encounter, stimulating the various forms to break down into infections and transition to the new objective",
		arguments: [
			"ai",
			"ai"
		],
		id: "ai_flood_disperse"
	},
	{
		symbol: "ai_magically_see",
		name: "ai_magically_see",
		description: "Make one squad magically aware of another.",
		arguments: [
			"ai",
			"ai"
		],
		id: "ai_magically_see"
	},
	{
		symbol: "ai_magically_see_object",
		name: "ai_magically_see_object",
		description: "Make a squad magically aware of a particular object.",
		arguments: [
			"ai",
			"object"
		],
		id: "ai_magically_see_object"
	},
	{
		symbol: "ai_set_active_camo",
		name: "ai_set_active_camo",
		description: "Turn on active camoflage on actor/squad/squad-group",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_set_active_camo"
	},
	{
		symbol: "ai_suppress_combat",
		name: "ai_suppress_combat",
		description: "Turn on/off combat suppression on actor/squad/squad-group",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_suppress_combat"
	},
	{
		symbol: "ai_allegiance_break",
		name: "ai_allegiance_break",
		description: "Fake a betrayal incident between two teams",
		arguments: [
			"team",
			"team"
		],
		id: "ai_allegiance_break"
	},
	{
		symbol: "ai_prefer_target_team",
		name: "ai_prefer_target_team",
		description: "The given ai will prefer the indicated team.",
		arguments: [
			"ai",
			"team"
		],
		id: "ai_prefer_target_team"
	},
	{
		symbol: "ai_prefer_target_ai",
		name: "ai_prefer_target_ai",
		description: "The given ai (actor, squad, task, etc.) will prefer the given other ai (actor, squad, task, etc.)",
		arguments: [
			"ai",
			"ai",
			"boolean"
		],
		id: "ai_prefer_target_ai"
	},
	{
		symbol: "ai_set_targeting_group",
		name: "ai_set_targeting_group",
		description: "Set the AI to only target other guys of targetin group X",
		arguments: [
			"ai",
			"short"
		],
		id: "ai_set_targeting_group"
	},
	{
		symbol: "ai_set_targeting_group",
		name: "ai_set_targeting_group",
		description: "Set the AI to only target other guys of targetin group X (true/false whether the player should also be targeted)",
		arguments: [
			"ai",
			"short",
			"boolean"
		],
		id: "ai_set_targeting_group1"
	},
	{
		symbol: "ai_teleport_to_starting_location_if_outside_bsp",
		name: "ai_teleport_to_starting_location_if_outside_bsp",
		description: "Teleports a group of actors to the starting locations of their current squad(s) if they are currently outside the world.",
		arguments: [
			"ai"
		],
		id: "ai_teleport_to_starting_location_if_outside_bsp"
	},
	{
		symbol: "ai_teleport",
		name: "ai_teleport",
		description: "Teleports the given squad to the given point.",
		arguments: [
			"ai",
			"point_reference"
		],
		id: "ai_teleport"
	},
	{
		symbol: "ai_bring_forward",
		name: "ai_bring_forward",
		description: "Teleports the given mission critical AI character to the current encounter, if beyond the given range from a player",
		arguments: [
			"object",
			"real"
		],
		id: "ai_bring_forward"
	},
	{
		symbol: "ai_migrate_form",
		name: "ai_migrate_form",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"ai",
			"ai",
			"short"
		],
		id: "ai_migrate_form"
	},
	{
		symbol: "ai_morph",
		name: "ai_morph",
		description: "Cause an ai (or a group of ai) to morph to the given form",
		arguments: [
			"ai",
			"short"
		],
		id: "ai_morph"
	},
	{
		symbol: "biped_morph",
		name: "biped_morph",
		description: "Cause a biped to morph to its floodified form",
		arguments: [
			"object"
		],
		id: "biped_morph"
	},
	{
		symbol: "ai_fighting_count",
		name: "ai_fighting_count",
		description: "Return the number of actors that are fighting in a squad or squad_group",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_fighting_count"
	},
	{
		symbol: "ai_in_vehicle_count",
		name: "ai_in_vehicle_count",
		description: "Return the number of living actors in the specified encounter and/or squad who are currently in a vehicle.",
		arguments: [
			"ai"
		],
		returns: "real",
		id: "ai_in_vehicle_count"
	},
	{
		symbol: "ai_body_count",
		name: "ai_body_count",
		description: "Return the number of actors who have died in the completiong of the given objective/task.",
		arguments: [
			"ai"
		],
		returns: "real",
		id: "ai_body_count"
	},
	{
		symbol: "ai_spawn_count",
		name: "ai_spawn_count",
		description: "Returns the number of actors spawned in the given squad or squad group",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_spawn_count"
	},
	{
		symbol: "object_get_ai",
		name: "object_get_ai",
		description: "Returns the ai attached to this object, if any",
		arguments: [
			"object"
		],
		returns: "ai",
		id: "object_get_ai"
	},
	{
		symbol: "ai_rotate_scenario",
		name: "ai_rotate_scenario",
		description: "Rotates ai points and normals (e.g. firing points, starting locations) around the given axis (x,y,z) by the given rotation angle (degrees)",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "ai_rotate_scenario"
	},
	{
		symbol: "ai_translate_scenario",
		name: "ai_translate_scenario",
		description: "Translates ai points and objects by the given x y z.",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "ai_translate_scenario"
	},
	{
		symbol: "ai_set_task",
		name: "ai_set_task",
		description: "Sets the current task of the current task",
		arguments: [
			"ai",
			"string_id",
			"string_id"
		],
		id: "ai_set_task"
	},
	{
		symbol: "ai_set_objective",
		name: "ai_set_objective",
		description: "Sets the squad's current objective",
		arguments: [
			"ai",
			"string_id"
		],
		id: "ai_set_objective"
	},
	{
		symbol: "ai_task_status",
		name: "ai_task_status",
		description: "Returns the status of the given objective/task. See ai_task_status_<tab> for return codes.",
		arguments: [
			"ai"
		],
		returns: "real",
		id: "ai_task_status"
	},
	{
		symbol: "ai_set_task_condition",
		name: "ai_set_task_condition",
		description: "Latches the task condition true or false",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_set_task_condition"
	},
	{
		symbol: "ai_leadership",
		name: "ai_leadership",
		description: "Returns whether a squad or task has a leader",
		arguments: [
			"ai"
		],
		id: "ai_leadership"
	},
	{
		symbol: "ai_leadership_all",
		name: "ai_leadership_all",
		description: "Returns whether a task or any of its children has a leader",
		arguments: [
			"ai"
		],
		id: "ai_leadership_all"
	},
	{
		symbol: "ai_task_count",
		name: "ai_task_count",
		description: "Returns the living count of the AI in the given task OR any of its children",
		arguments: [
			"ai"
		],
		id: "ai_task_count"
	},
	{
		symbol: "generate_pathfinding",
		name: "generate_pathfinding",
		description: "Generate pathfinding info for all structure bsps in the current scenario",
		arguments: [],
		returns: "boolean",
		id: "generate_pathfinding"
	},
	{
		symbol: "ai_render_paths_all",
		name: "ai_render_paths_all",
		description: "Turns on raw, smoothed, avoided paths and avoidance obstacles",
		arguments: [],
		id: "ai_render_paths_all"
	},
	{
		symbol: "ai_activity_set",
		name: "ai_activity_set",
		description: "Set the given activity running on the given AI(s)",
		arguments: [
			"ai",
			"string_id"
		],
		id: "ai_activity_set"
	},
	{
		symbol: "ai_activity_abort",
		name: "ai_activity_abort",
		description: "Aborts the activities running on the given AI(s)",
		arguments: [
			"ai"
		],
		id: "ai_activity_abort"
	},
	{
		symbol: "ai_vehicle_get",
		name: "ai_vehicle_get",
		description: "Returns the vehicle that the given actor is in.",
		arguments: [
			"ai"
		],
		returns: "vehicle",
		id: "ai_vehicle_get"
	},
	{
		symbol: "ai_vehicle_get_from_starting_location",
		name: "ai_vehicle_get_from_starting_location",
		description: "Returns the vehicle that was spawned at the given starting location.",
		arguments: [
			"ai"
		],
		returns: "vehicle",
		id: "ai_vehicle_get_from_starting_location"
	},
	{
		symbol: "ai_vehicle_reserve_seat",
		name: "ai_vehicle_reserve_seat",
		description: "Reserves the given seat on the given vehicle (so that AI may not enter it",
		arguments: [
			"vehicle",
			"unit_seat_mapping",
			"boolean"
		],
		returns: "boolean",
		id: "ai_vehicle_reserve_seat"
	},
	{
		symbol: "ai_vehicle_reserve",
		name: "ai_vehicle_reserve",
		description: "Reserves the given vehicle (so that AI may not enter it",
		arguments: [
			"vehicle",
			"boolean"
		],
		returns: "boolean",
		id: "ai_vehicle_reserve"
	},
	{
		symbol: "ai_player_get_vehicle_squad",
		name: "ai_player_get_vehicle_squad",
		description: "Returns the squad (if any) of the vehicle the player is riding in (note, the argument is a UNIT)",
		arguments: [
			"unit"
		],
		id: "ai_player_get_vehicle_squad"
	},
	{
		symbol: "ai_vehicle_count",
		name: "ai_vehicle_count",
		description: "Returns the number of vehicles being driven / ridden by the actors in the given squad/squad-group/task/etc.",
		arguments: [
			"ai"
		],
		id: "ai_vehicle_count"
	},
	{
		symbol: "ai_carrying_player",
		name: "ai_carrying_player",
		description: "Returns whether any of the given AI are in a vehicle with the player",
		arguments: [
			"ai"
		],
		id: "ai_carrying_player"
	},
	{
		symbol: "player_in_vehicle",
		name: "player_in_vehicle",
		description: "Returns whether any players are in the given vehicle",
		arguments: [
			"vehicle"
		],
		id: "player_in_vehicle"
	},
	{
		symbol: "ai_player_needs_vehicle",
		name: "ai_player_needs_vehicle",
		description: "Returns if the given player needs a vehicle at the moment",
		arguments: [
			"unit"
		],
		id: "ai_player_needs_vehicle"
	},
	{
		symbol: "ai_player_any_needs_vehicle",
		name: "ai_player_any_needs_vehicle",
		description: "Returns if any player needs a vehicle at the moment",
		arguments: [],
		id: "ai_player_any_needs_vehicle"
	},
	{
		symbol: "ai_vehicle_enter",
		name: "ai_vehicle_enter",
		description: "Tells a group of actors to get into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
		arguments: [
			"ai",
			"unit",
			"unit_seat_mapping"
		],
		id: "ai_vehicle_enter"
	},
	{
		symbol: "ai_vehicle_enter",
		name: "ai_vehicle_enter",
		description: "Tells a group of actors to get into a vehicle... does not interrupt any actors who are already going to vehicles",
		arguments: [
			"ai",
			"unit"
		],
		id: "ai_vehicle_enter1"
	},
	{
		symbol: "ai_vehicle_enter_immediate",
		name: "ai_vehicle_enter_immediate",
		description: "The given group of actors is snapped into a vehicle, in the substring-specified seats (e.g. passenger for pelican)... does not interrupt any actors who are already going to vehicles",
		arguments: [
			"ai",
			"unit",
			"unit_seat_mapping"
		],
		id: "ai_vehicle_enter_immediate"
	},
	{
		symbol: "ai_vehicle_enter_immediate",
		name: "ai_vehicle_enter_immediate",
		description: "The given group of actors is snapped into a vehicle",
		arguments: [
			"ai",
			"unit"
		],
		id: "ai_vehicle_enter_immediate1"
	},
	{
		symbol: "ai_enter_squad_vehicles",
		name: "ai_enter_squad_vehicles",
		description: "Instructs the ai in the given squad to get in all their vehicles",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_enter_squad_vehicles"
	},
	{
		symbol: "ai_vehicle_exit",
		name: "ai_vehicle_exit",
		description: "Tells a group of actors to get out of any vehicles that they are in (if their seat matches the substring)",
		arguments: [
			"ai",
			"unit_seat_mapping"
		],
		id: "ai_vehicle_exit"
	},
	{
		symbol: "ai_vehicle_exit",
		name: "ai_vehicle_exit",
		description: "Tells a group of actors to get out of any vehicles that they are in",
		arguments: [
			"ai"
		],
		id: "ai_vehicle_exit1"
	},
	{
		symbol: "vehicle_overturned",
		name: "vehicle_overturned",
		description: "Returns true if the vehicle is overturned",
		arguments: [
			"vehicle"
		],
		returns: "boolean",
		id: "vehicle_overturned"
	},
	{
		symbol: "vehicle_flip",
		name: "vehicle_flip",
		description: "Flips an overturned vehicle",
		arguments: [
			"vehicle"
		],
		id: "vehicle_flip"
	},
	{
		symbol: "ai_combat_status",
		name: "ai_combat_status",
		description: "Returns the highest integer combat status in the given squad-group/squad/actor",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "ai_combat_status"
	},
	{
		symbol: "flock_start",
		name: "flock_start",
		description: "The flock starts producing boids",
		arguments: [
			"string_id"
		],
		returns: "boolean",
		id: "flock_start"
	},
	{
		symbol: "flock_stop",
		name: "flock_stop",
		description: "The flock stops producing boids",
		arguments: [
			"string_id"
		],
		returns: "boolean",
		id: "flock_stop"
	},
	{
		symbol: "flock_create",
		name: "flock_create",
		description: "Create the given flock",
		arguments: [
			"string_id"
		],
		returns: "boolean",
		id: "flock_create"
	},
	{
		symbol: "flock_delete",
		name: "flock_delete",
		description: "Delete the given flock",
		arguments: [
			"string_id"
		],
		returns: "boolean",
		id: "flock_delete"
	},
	{
		symbol: "flock_definition_set",
		name: "flock_definition_set",
		description: "Set the definition of the given flock to the given tag",
		arguments: [
			"string_id",
			"any tag"
		],
		id: "flock_definition_set"
	},
	{
		symbol: "flock_unperch",
		name: "flock_unperch",
		description: "Cause the given flock to unperch (if it is perched)",
		arguments: [
			"string_id"
		],
		id: "flock_unperch"
	},
	{
		symbol: "drop_ai",
		name: "drop_ai",
		description: "Drop an ai with the given weapon at the current camera position",
		arguments: [
			"string",
			"string"
		],
		id: "drop_ai"
	},
	{
		symbol: "ai_verify_tags",
		name: "ai_verify_tags",
		description: "Verifies state of ai-related tags (e.g. orders, squads, zones, etc.)",
		arguments: [],
		id: "ai_verify_tags"
	},
	{
		symbol: "ai_wall_lean",
		name: "ai_wall_lean",
		description: "Makes the actor lean against a wall RIGHT NOW",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "ai_wall_lean"
	},
	{
		symbol: "ai_play_line",
		name: "ai_play_line",
		description: "Play the given mission dialogue line on the given ai",
		arguments: [
			"ai",
			"ai_line"
		],
		returns: "real",
		id: "ai_play_line"
	},
	{
		symbol: "ai_play_line_at_player",
		name: "ai_play_line_at_player",
		description: "Play the given mission dialogue line on the given ai, directing the ai's gaze at the nearest visible player",
		arguments: [
			"ai",
			"ai_line"
		],
		returns: "real",
		id: "ai_play_line_at_player"
	},
	{
		symbol: "ai_play_line_on_object",
		name: "ai_play_line_on_object",
		description: "Play the given mission dialogue line on the given object (uses first available variant)",
		arguments: [
			"object",
			"ai_line"
		],
		returns: "real",
		id: "ai_play_line_on_object"
	},
	{
		symbol: "ai_play_line_on_object_for_team",
		name: "ai_play_line_on_object_for_team",
		description: "Play the given mission dialogue line on the given object (uses first available variant) if anyone on the local box is on the specified team",
		arguments: [
			"object",
			"ai_line",
			"mp_team"
		],
		id: "ai_play_line_on_object_for_team"
	},
	{
		symbol: "ai_play_line_on_point_set",
		name: "ai_play_line_on_point_set",
		description: "Play the given line on the N closest point to players in the given point set",
		arguments: [
			"string_id",
			"point_reference",
			"short"
		],
		id: "ai_play_line_on_point_set"
	},
	{
		symbol: "ai_play_line_on_point_set",
		name: "ai_play_line_on_point_set",
		description: "Play the given line (with the given 3-letter variant) on the N closest point to players in the given point set",
		arguments: [
			"string_id",
			"point_reference",
			"short",
			"string_id"
		],
		id: "ai_play_line_on_point_set1"
	},
	{
		symbol: "campaign_metagame_time_pause",
		name: "campaign_metagame_time_pause",
		description: "Pause meta game time, while paused your completion multiplier stops going down",
		arguments: [
			"boolean"
		],
		id: "campaign_metagame_time_pause"
	},
	{
		symbol: "campaign_metagame_award_points",
		name: "campaign_metagame_award_points",
		description: "Award bonus metagame points to a player",
		arguments: [
			"object",
			"short"
		],
		id: "campaign_metagame_award_points"
	},
	{
		symbol: "campaign_metagame_award_primary_skull",
		name: "campaign_metagame_award_primary_skull",
		description: "Award a primary skull to a player",
		arguments: [
			"object",
			"short"
		],
		id: "campaign_metagame_award_primary_skull"
	},
	{
		symbol: "campaign_metagame_award_secondary_skull",
		name: "campaign_metagame_award_secondary_skull",
		description: "Award a secondary skull to a player",
		arguments: [
			"object",
			"short"
		],
		id: "campaign_metagame_award_secondary_skull"
	},
	{
		symbol: "campaign_metagame_enabled",
		name: "campaign_metagame_enabled",
		description: "TRUE if the metagame is enabled",
		arguments: [],
		id: "campaign_metagame_enabled"
	},
	{
		symbol: "campaign_is_finished_easy",
		name: "campaign_is_finished_easy",
		description: "TRUE if any of the players have finished the campaign on easy",
		arguments: [],
		id: "campaign_is_finished_easy"
	},
	{
		symbol: "campaign_is_finished_normal",
		name: "campaign_is_finished_normal",
		description: "TRUE if any of the players have finished the campaign on normal",
		arguments: [],
		id: "campaign_is_finished_normal"
	},
	{
		symbol: "campaign_is_finished_heroic",
		name: "campaign_is_finished_heroic",
		description: "TRUE if any of the players have finished the campaign on heroic",
		arguments: [],
		id: "campaign_is_finished_heroic"
	},
	{
		symbol: "campaign_is_finished_legendary",
		name: "campaign_is_finished_legendary",
		description: "TRUE if any of the players have finished the campaign on legendary",
		arguments: [],
		id: "campaign_is_finished_legendary"
	},
	{
		symbol: "cs_run_command_script",
		name: "cs_run_command_script",
		description: "Causes the specified actor(s) to start executing a command script immediately (discarding any other command scripts in the queue)",
		arguments: [
			"ai",
			"ai_command_script"
		],
		id: "cs_run_command_script"
	},
	{
		symbol: "cs_queue_command_script",
		name: "cs_queue_command_script",
		description: "Add a command script onto the end of an actor's command script queue",
		arguments: [
			"ai",
			"ai_command_script"
		],
		id: "cs_queue_command_script"
	},
	{
		symbol: "cs_stack_command_script",
		name: "cs_stack_command_script",
		description: "Push a command script to the top of the actor's command script queue",
		arguments: [
			"ai",
			"ai_command_script"
		],
		id: "cs_stack_command_script"
	},
	{
		symbol: "vs_reserve",
		name: "vs_reserve",
		description: "Reserves the specified actor(s) for the use of the current script (discarding any other command scripts in the queue)",
		arguments: [
			"ai",
			"short"
		],
		id: "vs_reserve"
	},
	{
		symbol: "vs_reserve",
		name: "vs_reserve",
		description: "Reserves the specified actor(s) for the use of the current script (discarding any other command scripts in the queue)",
		arguments: [
			"ai",
			"boolean",
			"short"
		],
		id: "vs_reserve1"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 1 actor for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id"
		],
		id: "vs_cast"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 2 actors for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id",
			"string_id"
		],
		id: "vs_cast1"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 3 actors for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "vs_cast2"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 4 actors for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "vs_cast3"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 5 actors for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id",
			"string_id",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "vs_cast4"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 6 actors for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id",
			"string_id",
			"string_id",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "vs_cast5"
	},
	{
		symbol: "vs_cast",
		name: "vs_cast",
		description: "Cast 7 actors for a vignette (at the given priority, higher = more important)",
		arguments: [
			"ai",
			"boolean",
			"short",
			"string_id",
			"string_id",
			"string_id",
			"string_id",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "vs_cast6"
	},
	{
		symbol: "vs_role",
		name: "vs_role",
		description: "Returns the given member of the cast (as per more recent vs_cast call)",
		arguments: [
			"short"
		],
		id: "vs_role"
	},
	{
		symbol: "vs_abort_on_alert",
		name: "vs_abort_on_alert",
		description: "Command script ends prematurely when actor's combat status raises to 'alert' or higher",
		arguments: [
			"boolean"
		],
		id: "vs_abort_on_alert"
	},
	{
		symbol: "vs_abort_on_damage",
		name: "vs_abort_on_damage",
		description: "Command script ends prematurely when actor is damaged",
		arguments: [
			"boolean"
		],
		id: "vs_abort_on_damage"
	},
	{
		symbol: "vs_abort_on_combat_status",
		name: "vs_abort_on_combat_status",
		description: "Command script ends prematurely when actor's combat status rises to given level",
		arguments: [
			"short"
		],
		id: "vs_abort_on_combat_status"
	},
	{
		symbol: "vs_abort_on_vehicle_exit",
		name: "vs_abort_on_vehicle_exit",
		description: "Command script ends prematurely when actor gets out of its vehicle",
		arguments: [
			"boolean"
		],
		id: "vs_abort_on_vehicle_exit"
	},
	{
		symbol: "cs_abort_on_alert",
		name: "cs_abort_on_alert",
		description: "Command script ends prematurely when actor's combat status raises to 'alert' or higher",
		arguments: [
			"boolean"
		],
		id: "cs_abort_on_alert"
	},
	{
		symbol: "cs_abort_on_damage",
		name: "cs_abort_on_damage",
		description: "Command script ends prematurely when actor is damaged",
		arguments: [
			"boolean"
		],
		id: "cs_abort_on_damage"
	},
	{
		symbol: "cs_abort_on_combat_status",
		name: "cs_abort_on_combat_status",
		description: "Command script ends prematurely when actor's combat status rises to given level",
		arguments: [
			"short"
		],
		id: "cs_abort_on_combat_status"
	},
	{
		symbol: "cs_abort_on_vehicle_exit",
		name: "cs_abort_on_vehicle_exit",
		description: "Command script ends prematurely when actor gets out of its vehicle",
		arguments: [
			"boolean"
		],
		id: "cs_abort_on_vehicle_exit"
	},
	{
		symbol: "cs_abort_on_alert",
		name: "cs_abort_on_alert",
		description: "Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
		arguments: [
			"boolean"
		],
		id: "cs_abort_on_alert1"
	},
	{
		symbol: "vs_abort_on_alert",
		name: "vs_abort_on_alert",
		description: "Command script ends prematurely when given actor's combat status raises to 'alert' or higher",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_abort_on_alert1"
	},
	{
		symbol: "cs_abort_on_damage",
		name: "cs_abort_on_damage",
		description: "Command script ends prematurely when actor is damaged",
		arguments: [
			"boolean"
		],
		id: "cs_abort_on_damage1"
	},
	{
		symbol: "vs_abort_on_damage",
		name: "vs_abort_on_damage",
		description: "Command script ends prematurely when actor is damaged",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_abort_on_damage1"
	},
	{
		symbol: "cs_abort_on_combat_status",
		name: "cs_abort_on_combat_status",
		description: "Command script ends prematurely when actor's combat status rises to given level",
		arguments: [
			"short"
		],
		id: "cs_abort_on_combat_status1"
	},
	{
		symbol: "vs_abort_on_combat_status",
		name: "vs_abort_on_combat_status",
		description: "Command script ends prematurely when actor's combat status rises to given level",
		arguments: [
			"ai",
			"short"
		],
		id: "vs_abort_on_combat_status1"
	},
	{
		symbol: "cs_abort_on_vehicle_exit",
		name: "cs_abort_on_vehicle_exit",
		description: "Command script ends prematurely when actor gets out of its vehicle",
		arguments: [
			"boolean"
		],
		id: "cs_abort_on_vehicle_exit1"
	},
	{
		symbol: "vs_abort_on_vehicle_exit",
		name: "vs_abort_on_vehicle_exit",
		description: "Command script ends prematurely when actor gets out of its vehicle",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_abort_on_vehicle_exit1"
	},
	{
		symbol: "vs_set_cleanup_script",
		name: "vs_set_cleanup_script",
		description: "Sets the script that is automatically called when the current thread ends",
		arguments: [
			"script"
		],
		id: "vs_set_cleanup_script"
	},
	{
		symbol: "vs_release",
		name: "vs_release",
		description: "Lets the given ai out of the current command script",
		arguments: [
			"ai"
		],
		id: "vs_release"
	},
	{
		symbol: "vs_release_all",
		name: "vs_release_all",
		description: "Releases all the ai attached to the current thread",
		arguments: [],
		id: "vs_release_all"
	},
	{
		symbol: "cs_command_script_running",
		name: "cs_command_script_running",
		description: "Returns true if the ai is running the command script in question",
		arguments: [
			"ai",
			"ai_command_script"
		],
		returns: "boolean",
		id: "cs_command_script_running"
	},
	{
		symbol: "cs_command_script_queued",
		name: "cs_command_script_queued",
		description: "Returns true if the command script is in the ai's cs queue",
		arguments: [
			"ai",
			"ai_command_script"
		],
		returns: "boolean",
		id: "cs_command_script_queued"
	},
	{
		symbol: "cs_number_queued",
		name: "cs_number_queued",
		description: "Returns the number of queued command scripts",
		arguments: [
			"ai"
		],
		returns: "short",
		id: "cs_number_queued"
	},
	{
		symbol: "cs_moving",
		name: "cs_moving",
		description: "Returns TRUE if the actor is currently following a path",
		arguments: [],
		returns: "boolean",
		id: "cs_moving"
	},
	{
		symbol: "cs_moving",
		name: "cs_moving",
		description: "Returns TRUE if the actor is currently following a path",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "cs_moving1"
	},
	{
		symbol: "vs_running_atom",
		name: "vs_running_atom",
		description: "Returns true if the ai is running any atom",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "vs_running_atom"
	},
	{
		symbol: "vs_running_atom_movement",
		name: "vs_running_atom_movement",
		description: "Returns true if the ai is running an atom on the movement channel",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "vs_running_atom_movement"
	},
	{
		symbol: "vs_running_atom_action",
		name: "vs_running_atom_action",
		description: "Returns true if the ai is running an atom on the action channel",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "vs_running_atom_action"
	},
	{
		symbol: "vs_running_atom_dialogue",
		name: "vs_running_atom_dialogue",
		description: "Returns true if the ai is running an atom on the dialogue channel",
		arguments: [
			"ai"
		],
		returns: "boolean",
		id: "vs_running_atom_dialogue"
	},
	{
		symbol: "cs_fly_to",
		name: "cs_fly_to",
		description: "Flies the actor to the given point",
		arguments: [
			"point_reference"
		],
		id: "cs_fly_to"
	},
	{
		symbol: "vs_fly_to",
		name: "vs_fly_to",
		description: "Flies the actor to the given point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_fly_to"
	},
	{
		symbol: "cs_fly_to",
		name: "cs_fly_to",
		description: "Flies the actor to the given point (within the given tolerance)",
		arguments: [
			"point_reference",
			"real"
		],
		id: "cs_fly_to1"
	},
	{
		symbol: "vs_fly_to",
		name: "vs_fly_to",
		description: "Flies the actor to the given point (within the given tolerance)",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"real"
		],
		id: "vs_fly_to1"
	},
	{
		symbol: "cs_fly_to_and_face",
		name: "cs_fly_to_and_face",
		description: "Flies the actor to the given point and orients him in the appropriate direction",
		arguments: [
			"point_reference",
			"point_reference"
		],
		id: "cs_fly_to_and_face"
	},
	{
		symbol: "vs_fly_to_and_face",
		name: "vs_fly_to_and_face",
		description: "Flies the actor to the given point and orients him in the appropriate direction",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"point_reference"
		],
		id: "vs_fly_to_and_face"
	},
	{
		symbol: "cs_fly_to_and_face",
		name: "cs_fly_to_and_face",
		description: "Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
		arguments: [
			"point_reference",
			"point_reference",
			"real"
		],
		id: "cs_fly_to_and_face1"
	},
	{
		symbol: "vs_fly_to_and_face",
		name: "vs_fly_to_and_face",
		description: "Flies the actor to the given point and orients him in the appropriate direction (within the given tolerance)",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"point_reference",
			"real"
		],
		id: "vs_fly_to_and_face1"
	},
	{
		symbol: "cs_fly_by",
		name: "cs_fly_by",
		description: "Flies the actor through the given point",
		arguments: [
			"point_reference"
		],
		id: "cs_fly_by"
	},
	{
		symbol: "vs_fly_by",
		name: "vs_fly_by",
		description: "Flies the actor through the given point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_fly_by"
	},
	{
		symbol: "cs_fly_by",
		name: "cs_fly_by",
		description: "Flies the actor through the given point (within the given tolerance)",
		arguments: [
			"point_reference",
			"real"
		],
		id: "cs_fly_by1"
	},
	{
		symbol: "vs_fly_by",
		name: "vs_fly_by",
		description: "Flies the actor through the given point (within the given tolerance)",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"real"
		],
		id: "vs_fly_by1"
	},
	{
		symbol: "cs_go_to",
		name: "cs_go_to",
		description: "Moves the actor to a specified point",
		arguments: [
			"point_reference"
		],
		id: "cs_go_to"
	},
	{
		symbol: "vs_go_to",
		name: "vs_go_to",
		description: "Moves the actor to a specified point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_go_to"
	},
	{
		symbol: "cs_go_to",
		name: "cs_go_to",
		description: "Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
		arguments: [
			"point_reference",
			"real"
		],
		id: "cs_go_to1"
	},
	{
		symbol: "vs_go_to",
		name: "vs_go_to",
		description: "Moves the actor to a specified point, attenuating throttle by the given amount when near the goal",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"real"
		],
		id: "vs_go_to1"
	},
	{
		symbol: "cs_go_by",
		name: "cs_go_by",
		description: "Actor moves toward the point, and considers it hit when it breaks the indicated plane",
		arguments: [
			"point_reference",
			"point_reference"
		],
		id: "cs_go_by"
	},
	{
		symbol: "vs_go_by",
		name: "vs_go_by",
		description: "Actor moves toward the point, and considers it hit when it breaks the indicated plane",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"point_reference"
		],
		id: "vs_go_by"
	},
	{
		symbol: "cs_go_by",
		name: "cs_go_by",
		description: "Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
		arguments: [
			"point_reference",
			"point_reference",
			"real"
		],
		id: "cs_go_by1"
	},
	{
		symbol: "vs_go_by",
		name: "vs_go_by",
		description: "Actor moves toward the point, and considers it hit when it breaks the indicated plane, attenuating throttle by the given amount when near the goal",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"point_reference",
			"real"
		],
		id: "vs_go_by1"
	},
	{
		symbol: "cs_go_to_and_face",
		name: "cs_go_to_and_face",
		description: "Moves the actor to a specified point and has him face the second point",
		arguments: [
			"point_reference",
			"point_reference"
		],
		id: "cs_go_to_and_face"
	},
	{
		symbol: "vs_go_to_and_face",
		name: "vs_go_to_and_face",
		description: "Moves the actor to a specified point and has him face the second point",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"point_reference"
		],
		id: "vs_go_to_and_face"
	},
	{
		symbol: "cs_go_to_and_posture",
		name: "cs_go_to_and_posture",
		description: "Actor moves to the point and performs a posture once there",
		arguments: [
			"point_reference",
			"string_id"
		],
		id: "cs_go_to_and_posture"
	},
	{
		symbol: "vs_go_to_and_posture",
		name: "vs_go_to_and_posture",
		description: "Actor moves to the point and performs a posture once there",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"string_id"
		],
		id: "vs_go_to_and_posture"
	},
	{
		symbol: "cs_go_to_nearest",
		name: "cs_go_to_nearest",
		description: "Given a point set, AI goes toward the nearest point",
		arguments: [
			"point_reference"
		],
		id: "cs_go_to_nearest"
	},
	{
		symbol: "vs_go_to_nearest",
		name: "vs_go_to_nearest",
		description: "Given a point set, AI goes toward the nearest point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_go_to_nearest"
	},
	{
		symbol: "cs_move_in_direction",
		name: "cs_move_in_direction",
		description: "Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "cs_move_in_direction"
	},
	{
		symbol: "vs_move_in_direction",
		name: "vs_move_in_direction",
		description: "Actor moves at given angle, for the given distance, optionally with the given facing (angle, distance, facing)",
		arguments: [
			"ai",
			"boolean",
			"real",
			"real",
			"real"
		],
		id: "vs_move_in_direction"
	},
	{
		symbol: "cs_move_towards",
		name: "cs_move_towards",
		description: "Move in the direction of the given object",
		arguments: [
			"object"
		],
		id: "cs_move_towards"
	},
	{
		symbol: "vs_move_towards",
		name: "vs_move_towards",
		description: "Move in the direction of the given object",
		arguments: [
			"ai",
			"boolean",
			"object"
		],
		id: "vs_move_towards"
	},
	{
		symbol: "cs_move_towards",
		name: "cs_move_towards",
		description: "Move in the direction of the given object (and melee the target or not)",
		arguments: [
			"object",
			"boolean"
		],
		id: "cs_move_towards1"
	},
	{
		symbol: "vs_move_towards",
		name: "vs_move_towards",
		description: "Move in the direction of the given object (and melee the target or not)",
		arguments: [
			"ai",
			"boolean",
			"object",
			"boolean"
		],
		id: "vs_move_towards1"
	},
	{
		symbol: "cs_swarm_to",
		name: "cs_swarm_to",
		description: "A swarm swarms towards the point (or point set) in question, the individual forms stopping when they get within the given radius",
		arguments: [
			"point_reference",
			"real"
		],
		id: "cs_swarm_to"
	},
	{
		symbol: "vs_swarm_to",
		name: "vs_swarm_to",
		description: "A swarm swarms towards the point (or point set) in question, the individual forms stopping when they get within the given radius",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"real"
		],
		id: "vs_swarm_to"
	},
	{
		symbol: "cs_swarm_from",
		name: "cs_swarm_from",
		description: "A swarm swarms away from the point in question, going at least the given distance",
		arguments: [
			"point_reference",
			"real"
		],
		id: "cs_swarm_from"
	},
	{
		symbol: "vs_swarm_from",
		name: "vs_swarm_from",
		description: "A swarm swarms away from the point in question, going at least the given distance",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"real"
		],
		id: "vs_swarm_from"
	},
	{
		symbol: "cs_pause",
		name: "cs_pause",
		description: "The actor does nothing for the given number of seconds",
		arguments: [
			"real"
		],
		id: "cs_pause"
	},
	{
		symbol: "vs_pause",
		name: "vs_pause",
		description: "The actor does nothing for the given number of seconds",
		arguments: [
			"ai",
			"boolean",
			"real"
		],
		id: "vs_pause"
	},
	{
		symbol: "cs_grenade",
		name: "cs_grenade",
		description: "Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
		arguments: [
			"point_reference",
			"short"
		],
		id: "cs_grenade"
	},
	{
		symbol: "vs_grenade",
		name: "vs_grenade",
		description: "Actor throws a grenade, either by tossing (arg2=0), lobbing (1) or bouncing (2)",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"short"
		],
		id: "vs_grenade"
	},
	{
		symbol: "cs_equipment",
		name: "cs_equipment",
		description: "Actor throws their equipment in the direction of the given point",
		arguments: [
			"point_reference"
		],
		id: "cs_equipment"
	},
	{
		symbol: "vs_equipment",
		name: "vs_equipment",
		description: "Actor throws their equipment in the direction of the given point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_equipment"
	},
	{
		symbol: "cs_jump",
		name: "cs_jump",
		description: "Actor jumps in direction of angle at the given velocity (angle, velocity)",
		arguments: [
			"real",
			"real"
		],
		id: "cs_jump"
	},
	{
		symbol: "vs_jump",
		name: "vs_jump",
		description: "Actor jumps in direction of angle at the given velocity (angle, velocity)",
		arguments: [
			"ai",
			"boolean",
			"real",
			"real"
		],
		id: "vs_jump"
	},
	{
		symbol: "cs_jump_to_point",
		name: "cs_jump_to_point",
		description: "Actor jumps with given horizontal and vertical velocity",
		arguments: [
			"real",
			"real"
		],
		id: "cs_jump_to_point"
	},
	{
		symbol: "vs_jump_to_point",
		name: "vs_jump_to_point",
		description: "Actor jumps with given horizontal and vertical velocity",
		arguments: [
			"ai",
			"boolean",
			"real",
			"real"
		],
		id: "vs_jump_to_point"
	},
	{
		symbol: "cs_vocalize",
		name: "cs_vocalize",
		description: "Actor emits vocalization of given type",
		arguments: [
			"short"
		],
		id: "cs_vocalize"
	},
	{
		symbol: "vs_vocalize",
		name: "vs_vocalize",
		description: "Actor emits vocalization of given type",
		arguments: [
			"ai",
			"boolean",
			"short"
		],
		id: "vs_vocalize"
	},
	{
		symbol: "cs_play_sound",
		name: "cs_play_sound",
		description: "Actor plays an impulse sound and the atom blocks until it is complete",
		arguments: [
			"sound"
		],
		id: "cs_play_sound"
	},
	{
		symbol: "vs_play_sound",
		name: "vs_play_sound",
		description: "Actor plays an impulse sound and the atom blocks until it is complete",
		arguments: [
			"ai",
			"boolean",
			"sound"
		],
		id: "vs_play_sound"
	},
	{
		symbol: "cs_play_sound",
		name: "cs_play_sound",
		description: "Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
		arguments: [
			"sound",
			"real"
		],
		id: "cs_play_sound1"
	},
	{
		symbol: "vs_play_sound",
		name: "vs_play_sound",
		description: "Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length",
		arguments: [
			"ai",
			"boolean",
			"sound",
			"real"
		],
		id: "vs_play_sound1"
	},
	{
		symbol: "cs_play_sound",
		name: "cs_play_sound",
		description: "Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length, at the given volume (0..1)",
		arguments: [
			"sound",
			"real",
			"real"
		],
		id: "cs_play_sound2"
	},
	{
		symbol: "vs_play_sound",
		name: "vs_play_sound",
		description: "Actor plays an impulse sound and the atom blocks for the given percentage of the sound's total length, at the given volume (0..1)",
		arguments: [
			"ai",
			"boolean",
			"sound",
			"real",
			"real"
		],
		id: "vs_play_sound2"
	},
	{
		symbol: "cs_action",
		name: "cs_action",
		description: "Actor plays an AI action towards the given point. ai_action_<tab> to see action options",
		arguments: [
			"point_reference",
			"short"
		],
		id: "cs_action"
	},
	{
		symbol: "vs_action",
		name: "vs_action",
		description: "Actor plays an AI action towards the given point. ai_action_<tab> to see action options",
		arguments: [
			"ai",
			"boolean",
			"point_reference",
			"short"
		],
		id: "vs_action"
	},
	{
		symbol: "cs_action_at_object",
		name: "cs_action_at_object",
		description: "Actor plays an AI action towards the given object. ai_action_<tab> to see action options",
		arguments: [
			"object",
			"short"
		],
		id: "cs_action_at_object"
	},
	{
		symbol: "vs_action_at_object",
		name: "vs_action_at_object",
		description: "Actor plays an AI action towards the given object. ai_action_<tab> to see action options",
		arguments: [
			"ai",
			"boolean",
			"object",
			"short"
		],
		id: "vs_action_at_object"
	},
	{
		symbol: "cs_action_at_player",
		name: "cs_action_at_player",
		description: "Actor plays an AI action towards the nearest_player. ai_action_<tab> to see action options",
		arguments: [
			"short"
		],
		id: "cs_action_at_player"
	},
	{
		symbol: "vs_action_at_player",
		name: "vs_action_at_player",
		description: "Actor plays an AI action towards the nearest_player. ai_action_<tab> to see action options",
		arguments: [
			"ai",
			"boolean",
			"short"
		],
		id: "vs_action_at_player"
	},
	{
		symbol: "cs_custom_animation",
		name: "cs_custom_animation",
		description: "Starts a custom animation playing on the actor (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "cs_custom_animation"
	},
	{
		symbol: "vs_custom_animation",
		name: "vs_custom_animation",
		description: "Starts a custom animation playing on the actor (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"ai",
			"boolean",
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "vs_custom_animation"
	},
	{
		symbol: "cs_custom_animation",
		name: "cs_custom_animation",
		description: "Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"animation_graph",
			"string_id",
			"boolean",
			"point_reference"
		],
		id: "cs_custom_animation1"
	},
	{
		symbol: "vs_custom_animation",
		name: "vs_custom_animation",
		description: "Starts a custom animation playing on the actor at the given point (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"ai",
			"boolean",
			"animation_graph",
			"string_id",
			"boolean",
			"point_reference"
		],
		id: "vs_custom_animation1"
	},
	{
		symbol: "cs_custom_animation_death",
		name: "cs_custom_animation_death",
		description: "Starts a custom animation playing on the actor (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "cs_custom_animation_death"
	},
	{
		symbol: "vs_custom_animation_death",
		name: "vs_custom_animation_death",
		description: "Starts a custom animation playing on the actor (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"ai",
			"boolean",
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "vs_custom_animation_death"
	},
	{
		symbol: "cs_custom_animation_death",
		name: "cs_custom_animation_death",
		description: "Starts a custom animation playing on the actor (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"animation_graph",
			"string_id",
			"boolean",
			"point_reference"
		],
		id: "cs_custom_animation_death1"
	},
	{
		symbol: "vs_custom_animation_death",
		name: "vs_custom_animation_death",
		description: "Starts a custom animation playing on the actor (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"ai",
			"boolean",
			"animation_graph",
			"string_id",
			"boolean",
			"point_reference"
		],
		id: "vs_custom_animation_death1"
	},
	{
		symbol: "cs_custom_animation_loop",
		name: "cs_custom_animation_loop",
		description: "Starts a looping custom animation playing on the actor (interpolates into animation if last parameter is TRUE) NON-BLOCKING",
		arguments: [
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "cs_custom_animation_loop"
	},
	{
		symbol: "vs_custom_animation_loop",
		name: "vs_custom_animation_loop",
		description: "Starts a looping custom animation playing on the actor (interpolates into animation if last parameter is TRUE) NON-BLOCKING",
		arguments: [
			"ai",
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "vs_custom_animation_loop"
	},
	{
		symbol: "cs_custom_animation_loop",
		name: "cs_custom_animation_loop",
		description: "Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is TRUE) NON-BLOCKING",
		arguments: [
			"animation_graph",
			"string_id",
			"boolean",
			"point_reference"
		],
		id: "cs_custom_animation_loop1"
	},
	{
		symbol: "vs_custom_animation_loop",
		name: "vs_custom_animation_loop",
		description: "Starts a looping custom animation playing on the actor at the given point (interpolates into animation if last parameter is TRUE) NON-BLOCKING",
		arguments: [
			"ai",
			"animation_graph",
			"string_id",
			"boolean",
			"point_reference"
		],
		id: "vs_custom_animation_loop1"
	},
	{
		symbol: "cs_play_line",
		name: "cs_play_line",
		description: "Play the named line in the current scene",
		arguments: [
			"ai_line"
		],
		id: "cs_play_line"
	},
	{
		symbol: "vs_play_line",
		name: "vs_play_line",
		description: "Play the named line in the current scene",
		arguments: [
			"ai",
			"boolean",
			"ai_line"
		],
		id: "vs_play_line"
	},
	{
		symbol: "cs_die",
		name: "cs_die",
		description: "Actor dies in specified manner",
		arguments: [
			"short"
		],
		id: "cs_die"
	},
	{
		symbol: "vs_die",
		name: "vs_die",
		description: "Actor dies in specified manner",
		arguments: [
			"ai",
			"boolean",
			"short"
		],
		id: "vs_die"
	},
	{
		symbol: "cs_deploy_turret",
		name: "cs_deploy_turret",
		description: "Deploy a turret at the given script point",
		arguments: [
			"point_reference"
		],
		id: "cs_deploy_turret"
	},
	{
		symbol: "vs_deploy_turret",
		name: "vs_deploy_turret",
		description: "Deploy a turret at the given script point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_deploy_turret"
	},
	{
		symbol: "cs_approach",
		name: "cs_approach",
		arguments: [
			"object",
			"real",
			"real",
			"real"
		],
		id: "cs_approach"
	},
	{
		symbol: "vs_approach",
		name: "vs_approach",
		arguments: [
			"ai",
			"boolean",
			"object",
			"real",
			"real",
			"real"
		],
		id: "vs_approach"
	},
	{
		symbol: "cs_approach_player",
		name: "cs_approach_player",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "cs_approach_player"
	},
	{
		symbol: "vs_approach_player",
		name: "vs_approach_player",
		arguments: [
			"ai",
			"boolean",
			"real",
			"real",
			"real"
		],
		id: "vs_approach_player"
	},
	{
		symbol: "cs_go_to_vehicle",
		name: "cs_go_to_vehicle",
		description: "Actor gets in the appropriate vehicle",
		arguments: [
			"vehicle"
		],
		id: "cs_go_to_vehicle"
	},
	{
		symbol: "vs_go_to_vehicle",
		name: "vs_go_to_vehicle",
		description: "Actor gets in the appropriate vehicle",
		arguments: [
			"ai",
			"boolean",
			"vehicle"
		],
		id: "vs_go_to_vehicle"
	},
	{
		symbol: "cs_go_to_vehicle",
		name: "cs_go_to_vehicle",
		description: "Actor gets in the named seat of the appropriate vehicle",
		arguments: [
			"vehicle",
			"unit_seat_mapping"
		],
		id: "cs_go_to_vehicle1"
	},
	{
		symbol: "vs_go_to_vehicle",
		name: "vs_go_to_vehicle",
		description: "Actor gets in the named seat of the appropriate vehicle",
		arguments: [
			"ai",
			"boolean",
			"vehicle",
			"unit_seat_mapping"
		],
		id: "vs_go_to_vehicle1"
	},
	{
		symbol: "cs_set_style",
		name: "cs_set_style",
		description: "Override the actor's style",
		arguments: [
			"style"
		],
		id: "cs_set_style"
	},
	{
		symbol: "vs_set_style",
		name: "vs_set_style",
		description: "Override the actor's style",
		arguments: [
			"ai",
			"style"
		],
		id: "vs_set_style"
	},
	{
		symbol: "cs_force_combat_status",
		name: "cs_force_combat_status",
		description: "Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
		arguments: [
			"short"
		],
		id: "cs_force_combat_status"
	},
	{
		symbol: "vs_force_combat_status",
		name: "vs_force_combat_status",
		description: "Force the actor's combat status (0= no override, 1=idle, 2= alert, 3= active)",
		arguments: [
			"ai",
			"short"
		],
		id: "vs_force_combat_status"
	},
	{
		symbol: "cs_enable_targeting",
		name: "cs_enable_targeting",
		description: "Actor autonomous target selection enabled/disabled.",
		arguments: [
			"boolean"
		],
		id: "cs_enable_targeting"
	},
	{
		symbol: "vs_enable_targeting",
		name: "vs_enable_targeting",
		description: "Actor autonomous target selection enabled/disabled.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_enable_targeting"
	},
	{
		symbol: "cs_enable_looking",
		name: "cs_enable_looking",
		description: "Actor autonomous looking enabled/disabled.",
		arguments: [
			"boolean"
		],
		id: "cs_enable_looking"
	},
	{
		symbol: "vs_enable_looking",
		name: "vs_enable_looking",
		description: "Actor autonomous looking enabled/disabled.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_enable_looking"
	},
	{
		symbol: "cs_enable_moving",
		name: "cs_enable_moving",
		description: "Actor autonomous moving enabled/disabled.",
		arguments: [
			"boolean"
		],
		id: "cs_enable_moving"
	},
	{
		symbol: "vs_enable_moving",
		name: "vs_enable_moving",
		description: "Actor autonomous moving enabled/disabled.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_enable_moving"
	},
	{
		symbol: "cs_enable_dialogue",
		name: "cs_enable_dialogue",
		description: "Actor combat dialogue enabled/disabled.",
		arguments: [
			"boolean"
		],
		id: "cs_enable_dialogue"
	},
	{
		symbol: "vs_enable_dialogue",
		name: "vs_enable_dialogue",
		description: "Actor combat dialogue enabled/disabled.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_enable_dialogue"
	},
	{
		symbol: "cs_suppress_activity_termination",
		name: "cs_suppress_activity_termination",
		description: "Autonomous termination of activities is suppressed for the remainder of the command script",
		arguments: [
			"boolean"
		],
		id: "cs_suppress_activity_termination"
	},
	{
		symbol: "vs_suppress_activity_termination",
		name: "vs_suppress_activity_termination",
		description: "Autonomous termination of activities is suppressed for the remainder of the command script",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_suppress_activity_termination"
	},
	{
		symbol: "cs_suppress_dialogue_global",
		name: "cs_suppress_dialogue_global",
		description: "Combat dialogue is suppressed for the remainder of the command script",
		arguments: [
			"boolean"
		],
		id: "cs_suppress_dialogue_global"
	},
	{
		symbol: "vs_suppress_dialogue_global",
		name: "vs_suppress_dialogue_global",
		description: "Combat dialogue is suppressed for the remainder of the command script",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_suppress_dialogue_global"
	},
	{
		symbol: "cs_look",
		name: "cs_look",
		description: "Actor looks at the point for the remainder of the cs, or until overridden",
		arguments: [
			"boolean",
			"point_reference"
		],
		id: "cs_look"
	},
	{
		symbol: "vs_look",
		name: "vs_look",
		description: "Actor looks at the point for the remainder of the cs, or until overridden",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_look"
	},
	{
		symbol: "cs_look_player",
		name: "cs_look_player",
		description: "Actor looks at nearest player for the duration of the cs, or until overridden",
		arguments: [
			"boolean"
		],
		id: "cs_look_player"
	},
	{
		symbol: "vs_look_player",
		name: "vs_look_player",
		description: "Actor looks at nearest player for the duration of the cs, or until overridden",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_look_player"
	},
	{
		symbol: "cs_look_object",
		name: "cs_look_object",
		description: "Actor looks at the object for the duration of the cs, or until overridden",
		arguments: [
			"boolean",
			"object"
		],
		id: "cs_look_object"
	},
	{
		symbol: "vs_look_object",
		name: "vs_look_object",
		description: "Actor looks at the object for the duration of the cs, or until overridden",
		arguments: [
			"ai",
			"boolean",
			"object"
		],
		id: "vs_look_object"
	},
	{
		symbol: "cs_aim",
		name: "cs_aim",
		description: "Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
		arguments: [
			"boolean",
			"point_reference"
		],
		id: "cs_aim"
	},
	{
		symbol: "vs_aim",
		name: "vs_aim",
		description: "Actor aims at the point for the remainder of the cs, or until overridden (overrides look)",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_aim"
	},
	{
		symbol: "cs_aim_player",
		name: "cs_aim_player",
		description: "Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
		arguments: [
			"boolean"
		],
		id: "cs_aim_player"
	},
	{
		symbol: "vs_aim_player",
		name: "vs_aim_player",
		description: "Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_aim_player"
	},
	{
		symbol: "cs_aim_object",
		name: "cs_aim_object",
		description: "Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
		arguments: [
			"boolean",
			"object"
		],
		id: "cs_aim_object"
	},
	{
		symbol: "vs_aim_object",
		name: "vs_aim_object",
		description: "Actor aims at the object for the duration of the cs, or until overridden (overrides look)",
		arguments: [
			"ai",
			"boolean",
			"object"
		],
		id: "vs_aim_object"
	},
	{
		symbol: "cs_face",
		name: "cs_face",
		description: "Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"boolean",
			"point_reference"
		],
		id: "cs_face"
	},
	{
		symbol: "vs_face",
		name: "vs_face",
		description: "Actor faces exactly the point for the remainder of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_face"
	},
	{
		symbol: "cs_face_player",
		name: "cs_face_player",
		description: "Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"boolean"
		],
		id: "cs_face_player"
	},
	{
		symbol: "vs_face_player",
		name: "vs_face_player",
		description: "Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_face_player"
	},
	{
		symbol: "cs_face_object",
		name: "cs_face_object",
		description: "Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"boolean",
			"object"
		],
		id: "cs_face_object"
	},
	{
		symbol: "vs_face_object",
		name: "vs_face_object",
		description: "Actor faces exactly the given object for the duration of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"ai",
			"boolean",
			"object"
		],
		id: "vs_face_object"
	},
	{
		symbol: "cs_shoot",
		name: "cs_shoot",
		description: "Actor is allowed to shoot at its target or not",
		arguments: [
			"boolean"
		],
		id: "cs_shoot"
	},
	{
		symbol: "vs_shoot",
		name: "vs_shoot",
		description: "Actor is allowed to shoot at its target or not",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_shoot"
	},
	{
		symbol: "cs_shoot",
		name: "cs_shoot",
		description: "Actor shoots at given target",
		arguments: [
			"boolean",
			"object"
		],
		id: "cs_shoot1"
	},
	{
		symbol: "vs_shoot",
		name: "vs_shoot",
		description: "Actor shoots at given target",
		arguments: [
			"ai",
			"boolean",
			"object"
		],
		id: "vs_shoot1"
	},
	{
		symbol: "cs_shoot_point",
		name: "cs_shoot_point",
		description: "Actor shoots at given point",
		arguments: [
			"boolean",
			"point_reference"
		],
		id: "cs_shoot_point"
	},
	{
		symbol: "vs_shoot_point",
		name: "vs_shoot_point",
		description: "Actor shoots at given point",
		arguments: [
			"ai",
			"boolean",
			"point_reference"
		],
		id: "vs_shoot_point"
	},
	{
		symbol: "cs_shoot_secondary_trigger",
		name: "cs_shoot_secondary_trigger",
		description: "Actor uses secondary trigger whenever he shoots",
		arguments: [
			"boolean"
		],
		id: "cs_shoot_secondary_trigger"
	},
	{
		symbol: "vs_shoot_secondary_trigger",
		name: "vs_shoot_secondary_trigger",
		description: "Actor uses secondary trigger whenever he shoots",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_shoot_secondary_trigger"
	},
	{
		symbol: "cs_lower_weapon",
		name: "cs_lower_weapon",
		description: "Actor keeps weapon lowered",
		arguments: [
			"boolean"
		],
		id: "cs_lower_weapon"
	},
	{
		symbol: "vs_lower_weapon",
		name: "vs_lower_weapon",
		description: "Actor keeps weapon lowered",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_lower_weapon"
	},
	{
		symbol: "cs_vehicle_speed",
		name: "cs_vehicle_speed",
		description: "Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
		arguments: [
			"real"
		],
		id: "cs_vehicle_speed"
	},
	{
		symbol: "vs_vehicle_speed",
		name: "vs_vehicle_speed",
		description: "Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
		arguments: [
			"ai",
			"real"
		],
		id: "vs_vehicle_speed"
	},
	{
		symbol: "cs_vehicle_speed_instantaneous",
		name: "cs_vehicle_speed_instantaneous",
		description: "Set the instantaneous speed of the vehicle we're driving",
		arguments: [
			"real"
		],
		id: "cs_vehicle_speed_instantaneous"
	},
	{
		symbol: "vs_vehicle_speed_instantaneous",
		name: "vs_vehicle_speed_instantaneous",
		description: "Set the instantaneous speed of the vehicle we're driving",
		arguments: [
			"ai",
			"real"
		],
		id: "vs_vehicle_speed_instantaneous"
	},
	{
		symbol: "cs_vehicle_boost",
		name: "cs_vehicle_boost",
		description: "Enables or disables boost",
		arguments: [
			"boolean"
		],
		id: "cs_vehicle_boost"
	},
	{
		symbol: "vs_vehicle_boost",
		name: "vs_vehicle_boost",
		description: "Enables or disables boost",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_vehicle_boost"
	},
	{
		symbol: "cs_turn_sharpness",
		name: "cs_turn_sharpness",
		description: "Set the sharpness of a vehicle turn (values 0 -> 1). Only applicable to nondirectional flying vehicles (e.g. dropships)",
		arguments: [
			"boolean",
			"real"
		],
		id: "cs_turn_sharpness"
	},
	{
		symbol: "vs_turn_sharpness",
		name: "vs_turn_sharpness",
		description: "Set the sharpness of a vehicle turn (values 0 -> 1). Only applicable to nondirectional flying vehicles (e.g. dropships)",
		arguments: [
			"ai",
			"boolean",
			"real"
		],
		id: "vs_turn_sharpness"
	},
	{
		symbol: "cs_enable_pathfinding_failsafe",
		name: "cs_enable_pathfinding_failsafe",
		description: "Actor blocks until pathfinding calls succeed",
		arguments: [
			"boolean"
		],
		id: "cs_enable_pathfinding_failsafe"
	},
	{
		symbol: "vs_enable_pathfinding_failsafe",
		name: "vs_enable_pathfinding_failsafe",
		description: "Actor blocks until pathfinding calls succeed",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_enable_pathfinding_failsafe"
	},
	{
		symbol: "cs_set_pathfinding_radius",
		name: "cs_set_pathfinding_radius",
		description: "Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
		arguments: [
			"real"
		],
		id: "cs_set_pathfinding_radius"
	},
	{
		symbol: "vs_set_pathfinding_radius",
		name: "vs_set_pathfinding_radius",
		description: "Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
		arguments: [
			"ai",
			"real"
		],
		id: "vs_set_pathfinding_radius"
	},
	{
		symbol: "cs_ignore_obstacles",
		name: "cs_ignore_obstacles",
		description: "Actor does not avoid obstacles when true",
		arguments: [
			"boolean"
		],
		id: "cs_ignore_obstacles"
	},
	{
		symbol: "vs_ignore_obstacles",
		name: "vs_ignore_obstacles",
		description: "Actor does not avoid obstacles when true",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_ignore_obstacles"
	},
	{
		symbol: "cs_approach_stop",
		name: "cs_approach_stop",
		description: "Actor stops approaching",
		arguments: [],
		id: "cs_approach_stop"
	},
	{
		symbol: "vs_approach_stop",
		name: "vs_approach_stop",
		description: "Actor stops approaching",
		arguments: [
			"ai"
		],
		id: "vs_approach_stop"
	},
	{
		symbol: "cs_movement_mode",
		name: "cs_movement_mode",
		description: "Actor switches to given animation mode",
		arguments: [
			"short"
		],
		id: "cs_movement_mode"
	},
	{
		symbol: "vs_movement_mode",
		name: "vs_movement_mode",
		description: "Actor switches to given animation mode",
		arguments: [
			"ai",
			"short"
		],
		id: "vs_movement_mode"
	},
	{
		symbol: "cs_crouch",
		name: "cs_crouch",
		description: "Actor crouches for the remainder of the command script, or until overridden",
		arguments: [
			"boolean"
		],
		id: "cs_crouch"
	},
	{
		symbol: "vs_crouch",
		name: "vs_crouch",
		description: "Actor crouches for the remainder of the command script, or until overridden",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_crouch"
	},
	{
		symbol: "cs_crouch",
		name: "cs_crouch",
		description: "Actor crouches / uncrouches, transitioning over the given number of seconds",
		arguments: [
			"boolean",
			"real"
		],
		id: "cs_crouch1"
	},
	{
		symbol: "vs_crouch",
		name: "vs_crouch",
		description: "Actor crouches / uncrouches, transitioning over the given number of seconds",
		arguments: [
			"ai",
			"boolean",
			"real"
		],
		id: "vs_crouch1"
	},
	{
		symbol: "cs_walk",
		name: "cs_walk",
		description: "Actor walks for the remainder of the command script, or until overridden",
		arguments: [
			"boolean"
		],
		id: "cs_walk"
	},
	{
		symbol: "vs_walk",
		name: "vs_walk",
		description: "Actor walks for the remainder of the command script, or until overridden",
		arguments: [
			"ai",
			"boolean"
		],
		id: "vs_walk"
	},
	{
		symbol: "cs_posture_set",
		name: "cs_posture_set",
		description: "Actor enters the given posture (enters immediately rather than plays the entry animation if argument is TRUE)",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "cs_posture_set"
	},
	{
		symbol: "vs_posture_set",
		name: "vs_posture_set",
		description: "Actor enters the given posture (enters immediately rather than plays the entry animation if argument is TRUE)",
		arguments: [
			"ai",
			"string_id",
			"boolean"
		],
		id: "vs_posture_set"
	},
	{
		symbol: "cs_posture_exit",
		name: "cs_posture_exit",
		description: "Actor exits the posture it's in",
		arguments: [],
		id: "cs_posture_exit"
	},
	{
		symbol: "vs_posture_exit",
		name: "vs_posture_exit",
		description: "Actor exits the posture it's in",
		arguments: [
			"ai"
		],
		id: "vs_posture_exit"
	},
	{
		symbol: "cs_stow",
		name: "cs_stow",
		description: "Actor stows its current weapon",
		arguments: [],
		id: "cs_stow"
	},
	{
		symbol: "vs_stow",
		name: "vs_stow",
		description: "Actor stows its current weapon",
		arguments: [
			"ai"
		],
		id: "vs_stow"
	},
	{
		symbol: "cs_draw",
		name: "cs_draw",
		description: "Actor draws its current weapon",
		arguments: [],
		id: "cs_draw"
	},
	{
		symbol: "vs_draw",
		name: "vs_draw",
		description: "Actor draws its current weapon",
		arguments: [
			"ai"
		],
		id: "vs_draw"
	},
	{
		symbol: "cs_teleport",
		name: "cs_teleport",
		description: "Actor teleports to point1 facing point2",
		arguments: [
			"point_reference",
			"point_reference"
		],
		id: "cs_teleport"
	},
	{
		symbol: "vs_teleport",
		name: "vs_teleport",
		description: "Actor teleports to point1 facing point2",
		arguments: [
			"ai",
			"point_reference",
			"point_reference"
		],
		id: "vs_teleport"
	},
	{
		symbol: "cs_stop_custom_animation",
		name: "cs_stop_custom_animation",
		description: "Stop running a custom animation",
		arguments: [],
		id: "cs_stop_custom_animation"
	},
	{
		symbol: "vs_stop_custom_animation",
		name: "vs_stop_custom_animation",
		description: "Stop running a custom animation",
		arguments: [
			"ai"
		],
		id: "vs_stop_custom_animation"
	},
	{
		symbol: "cs_stop_sound",
		name: "cs_stop_sound",
		description: "Stops the specified impulse sound.",
		arguments: [
			"sound"
		],
		id: "cs_stop_sound"
	},
	{
		symbol: "vs_stop_sound",
		name: "vs_stop_sound",
		description: "Stops the specified impulse sound.",
		arguments: [
			"ai",
			"sound"
		],
		id: "vs_stop_sound"
	},
	{
		symbol: "cs_player_melee",
		name: "cs_player_melee",
		description: "Actor performs player-specific melee",
		arguments: [
			"long"
		],
		id: "cs_player_melee"
	},
	{
		symbol: "vs_player_melee",
		name: "vs_player_melee",
		description: "Actor performs player-specific melee",
		arguments: [
			"ai",
			"boolean",
			"long"
		],
		id: "vs_player_melee"
	},
	{
		symbol: "cs_melee_direction",
		name: "cs_melee_direction",
		description: "Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
		arguments: [
			"long"
		],
		id: "cs_melee_direction"
	},
	{
		symbol: "vs_melee_direction",
		name: "vs_melee_direction",
		description: "Actor performs melee in provided direction (0= front, 1= back, 2= offhand, 3= tackle)",
		arguments: [
			"ai",
			"boolean",
			"long"
		],
		id: "vs_melee_direction"
	},
	{
		symbol: "cs_smash_direction",
		name: "cs_smash_direction",
		description: "Actor performs smash in provided direction",
		arguments: [
			"long"
		],
		id: "cs_smash_direction"
	},
	{
		symbol: "vs_smash_direction",
		name: "vs_smash_direction",
		description: "Actor performs smash in provided direction",
		arguments: [
			"ai",
			"boolean",
			"long"
		],
		id: "vs_smash_direction"
	},
	{
		symbol: "camera_set_animation",
		name: "camera_set_animation",
		description: "Begins a prerecorded camera animation.",
		arguments: [
			"animation_graph",
			"string_id"
		],
		id: "camera_set_animation"
	},
	{
		symbol: "camera_set_animation_relative",
		name: "camera_set_animation_relative",
		description: "Begins a prerecorded camera animation synchronized to unit relative to cutscene flag.",
		arguments: [
			"animation_graph",
			"string_id",
			"unit",
			"cutscene_flag"
		],
		id: "camera_set_animation_relative"
	},
	{
		symbol: "camera_set_animation_with_speed",
		name: "camera_set_animation_with_speed",
		description: "Begins a prerecorded camera animation.",
		arguments: [
			"animation_graph",
			"string_id",
			"real"
		],
		id: "camera_set_animation_with_speed"
	},
	{
		symbol: "camera_set_animation_relative_with_speed",
		name: "camera_set_animation_relative_with_speed",
		description: "Begins a prerecorded camera animation synchronized to unit relative to cutscene flag.",
		arguments: [
			"animation_graph",
			"string_id",
			"unit",
			"cutscene_flag",
			"real"
		],
		id: "camera_set_animation_relative_with_speed"
	},
	{
		symbol: "camera_set_animation_relative_with_speed_loop",
		name: "camera_set_animation_relative_with_speed_loop",
		description: "Begins a prerecorded camera animation synchronized to unit relative to cutscene flag.",
		arguments: [
			"animation_graph",
			"string_id",
			"unit",
			"cutscene_flag",
			"real",
			"boolean"
		],
		id: "camera_set_animation_relative_with_speed_loop"
	},
	{
		symbol: "camera_set_animation_relative_with_speed_loop_offset",
		name: "camera_set_animation_relative_with_speed_loop_offset",
		description: "Begins a prerecorded camera animation synchronized to unit relative to cutscene flag.",
		arguments: [
			"animation_graph",
			"string_id",
			"unit",
			"cutscene_flag",
			"real",
			"boolean",
			"real"
		],
		id: "camera_set_animation_relative_with_speed_loop_offset"
	},
	{
		symbol: "camera_predict_resources_at_frame",
		name: "camera_predict_resources_at_frame",
		description: "Predict resources at a frame in camera animation.",
		arguments: [
			"animation_graph",
			"string_id",
			"unit",
			"cutscene_flag",
			"long"
		],
		id: "camera_predict_resources_at_frame"
	},
	{
		symbol: "camera_predict_resources_at_point",
		name: "camera_predict_resources_at_point",
		description: "Predict resources given a camera point",
		arguments: [
			"cutscene_camera_point"
		],
		id: "camera_predict_resources_at_point"
	},
	{
		symbol: "camera_set_cinematic",
		name: "camera_set_cinematic",
		description: "Makes the scripted camera follow the path of a cinematic scene.",
		arguments: [],
		id: "camera_set_cinematic"
	},
	{
		symbol: "camera_set_cinematic_scene",
		name: "camera_set_cinematic_scene",
		description: "Sets the scene, shot, and cutscene flag for the cinematic camera (NOTE: camera must be in cinematic mode by calling camera_set_cinematic).",
		arguments: [
			"cinematic scene definition",
			"long",
			"cutscene_flag"
		],
		id: "camera_set_cinematic_scene"
	},
	{
		symbol: "camera_place_relative",
		name: "camera_place_relative",
		description: "All subsequent camera placement in sapien be marked as relative to this object",
		arguments: [
			"object"
		],
		id: "camera_place_relative"
	},
	{
		symbol: "camera_place_worldspace",
		name: "camera_place_worldspace",
		description: "All subsequent camera placement in sapien will be marked as worldspace",
		arguments: [],
		id: "camera_place_worldspace"
	},
	{
		symbol: "camera_set_field_of_view",
		name: "camera_set_field_of_view",
		description: "Sets the field of view",
		arguments: [
			"real",
			"short"
		],
		id: "camera_set_field_of_view"
	},
	{
		symbol: "cinematic_camera_set_easing_in",
		name: "cinematic_camera_set_easing_in",
		description: "Controls the camera easing from player position",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "cinematic_camera_set_easing_in"
	},
	{
		symbol: "cinematic_camera_set_easing_out",
		name: "cinematic_camera_set_easing_out",
		description: "Controls the camera easing back to the player position",
		arguments: [
			"real"
		],
		id: "cinematic_camera_set_easing_out"
	},
	{
		symbol: "cinematic_print",
		name: "cinematic_print",
		description: "Print status lines for cinematic debugging",
		arguments: [
			"string"
		],
		id: "cinematic_print"
	},
	{
		symbol: "camera_set_pan",
		name: "camera_set_pan",
		description: "Moves the camera to the specified camera point over the specified number of ticks with a constant speed.",
		arguments: [
			"cutscene_camera_point",
			"short"
		],
		id: "camera_set_pan"
	},
	{
		symbol: "camera_pan",
		name: "camera_pan",
		description: "Camera_pan <start point> <end point> <ticks> <ease-in ticks> <start velocity scale> <ease-out ticks> <end velocity scale>",
		arguments: [
			"cutscene_camera_point",
			"cutscene_camera_point",
			"short",
			"short",
			"real",
			"short",
			"real"
		],
		id: "camera_pan"
	},
	{
		symbol: "director_debug_camera",
		name: "director_debug_camera",
		description: "Enable/disable camera debugging",
		arguments: [
			"boolean"
		],
		id: "director_debug_camera"
	},
	{
		symbol: "game_insertion_point_get",
		name: "game_insertion_point_get",
		description: "Returns the number of the insertion point the map was started at",
		arguments: [],
		returns: "real",
		id: "game_insertion_point_get"
	},
	{
		symbol: "game_insertion_point_set",
		name: "game_insertion_point_set",
		description: "Retroactively sets the insertion point that we started at.",
		arguments: [
			"short"
		],
		id: "game_insertion_point_set"
	},
	{
		symbol: "pvs_set_object",
		name: "pvs_set_object",
		description: "Sets the specified object as the special place that activates everything it sees.",
		arguments: [
			"object"
		],
		id: "pvs_set_object"
	},
	{
		symbol: "pvs_set_camera",
		name: "pvs_set_camera",
		description: "Sets the specified cutscene camera point as the special place that activates everything it sees.",
		arguments: [
			"cutscene_camera_point"
		],
		id: "pvs_set_camera"
	},
	{
		symbol: "pvs_clear",
		name: "pvs_clear",
		description: "Removes the special place that activates everything it sees.",
		arguments: [],
		id: "pvs_clear"
	},
	{
		symbol: "pvs_reset",
		name: "pvs_reset",
		description: "Forces pvs to empty then back to full.",
		arguments: [],
		id: "pvs_reset"
	},
	{
		symbol: "player_disable_movement",
		name: "player_disable_movement",
		description: "Toggle player input. the look stick works, but nothing else.",
		arguments: [
			"boolean"
		],
		id: "player_disable_movement"
	},
	{
		symbol: "player_disable_weapon_pickup",
		name: "player_disable_weapon_pickup",
		description: "Enable/disable all players' ability to pick up weapons",
		arguments: [
			"boolean"
		],
		id: "player_disable_weapon_pickup"
	},
	{
		symbol: "player_flashlight_on",
		name: "player_flashlight_on",
		description: "Returns true if any player has a flashlight on",
		arguments: [],
		returns: "boolean",
		id: "player_flashlight_on"
	},
	{
		symbol: "player_active_camouflage_on",
		name: "player_active_camouflage_on",
		description: "Returns true if any player is active camouflaged",
		arguments: [],
		returns: "boolean",
		id: "player_active_camouflage_on"
	},
	{
		symbol: "player_action_test_vision_trigger",
		name: "player_action_test_vision_trigger",
		description: "Returns true if any player has used vision trigger since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_vision_trigger"
	},
	{
		symbol: "player_action_test_rotate_weapons",
		name: "player_action_test_rotate_weapons",
		description: "Returns true if any player has hit the rotate-weapon button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_rotate_weapons"
	},
	{
		symbol: "player_action_test_rotate_grenades",
		name: "player_action_test_rotate_grenades",
		description: "Returns true if any player has hit the rotate-grenades button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_rotate_grenades"
	},
	{
		symbol: "player_action_test_melee",
		name: "player_action_test_melee",
		description: "Returns true if any player has hit the melee button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_melee"
	},
	{
		symbol: "player_action_test_cancel",
		name: "player_action_test_cancel",
		description: "Returns true if any player has hit cancel key since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_cancel"
	},
	{
		symbol: "player_action_test_cinematic_skip",
		name: "player_action_test_cinematic_skip",
		description: "Returns true if any player has pressed the cinematic skip button (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_cinematic_skip"
	},
	{
		symbol: "player_action_test_start",
		name: "player_action_test_start",
		description: "Returns true if any player has pressed the start button since the last call to (player_action_test_reset).",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_start"
	},
	{
		symbol: "player0_looking_up",
		name: "player0_looking_up",
		description: "True if the first player is looking up",
		arguments: [],
		returns: "boolean",
		id: "player0_looking_up"
	},
	{
		symbol: "player0_looking_down",
		name: "player0_looking_down",
		description: "True if the first player is looking down",
		arguments: [],
		returns: "boolean",
		id: "player0_looking_down"
	},
	{
		symbol: "player0_set_pitch",
		name: "player0_set_pitch",
		description: "Sets up player look up test",
		arguments: [
			"real",
			"long"
		],
		id: "player0_set_pitch"
	},
	{
		symbol: "player1_set_pitch",
		name: "player1_set_pitch",
		description: "Sets up player look up test",
		arguments: [
			"real",
			"long"
		],
		id: "player1_set_pitch"
	},
	{
		symbol: "player2_set_pitch",
		name: "player2_set_pitch",
		description: "Sets up player look up test",
		arguments: [
			"real",
			"long"
		],
		id: "player2_set_pitch"
	},
	{
		symbol: "player3_set_pitch",
		name: "player3_set_pitch",
		description: "Sets up player look up test",
		arguments: [
			"real",
			"long"
		],
		id: "player3_set_pitch"
	},
	{
		symbol: "player_action_test_look_up_begin",
		name: "player_action_test_look_up_begin",
		description: "Sets up player look up test",
		arguments: [
			"real",
			"real"
		],
		id: "player_action_test_look_up_begin"
	},
	{
		symbol: "player_action_test_look_down_begin",
		name: "player_action_test_look_down_begin",
		description: "Sets down player look down test",
		arguments: [
			"real",
			"real"
		],
		id: "player_action_test_look_down_begin"
	},
	{
		symbol: "player_action_test_look_pitch_end",
		name: "player_action_test_look_pitch_end",
		description: "Ends the look pitch testing",
		arguments: [],
		id: "player_action_test_look_pitch_end"
	},
	{
		symbol: "player_action_test_lookstick_forward",
		name: "player_action_test_lookstick_forward",
		description: "True if the first player pushed forward on lookstick",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_lookstick_forward"
	},
	{
		symbol: "player_action_test_lookstick_backward",
		name: "player_action_test_lookstick_backward",
		description: "True if the first player pushed backward on lookstick",
		arguments: [],
		returns: "boolean",
		id: "player_action_test_lookstick_backward"
	},
	{
		symbol: "debug_teleport_player",
		name: "debug_teleport_player",
		description: "For testing: teleports one player to another's location",
		arguments: [
			"long",
			"long"
		],
		id: "debug_teleport_player"
	},
	{
		symbol: "map_reset_random",
		name: "map_reset_random",
		description: "Starts the map from the beginning with a new random seed.",
		arguments: [],
		id: "map_reset_random"
	},
	{
		symbol: "switch_bsp",
		name: "switch_bsp",
		description: "Switches to a different zone set",
		arguments: [
			"long"
		],
		id: "switch_bsp"
	},
	{
		symbol: "switch_zone_set",
		name: "switch_zone_set",
		description: "Switches to a different zone set",
		arguments: [
			"zone_set"
		],
		id: "switch_zone_set"
	},
	{
		symbol: "current_zone_set",
		name: "current_zone_set",
		description: "Returns the current zone set",
		arguments: [],
		returns: "zone_set",
		id: "current_zone_set"
	},
	{
		symbol: "current_zone_set_fully_active",
		name: "current_zone_set_fully_active",
		description: "Returns the current zone set",
		arguments: [],
		returns: "zone_set",
		id: "current_zone_set_fully_active"
	},
	{
		symbol: "switch_map_and_zone_set",
		name: "switch_map_and_zone_set",
		description: "Switches to a different scenario and zone set",
		arguments: [
			"string",
			"long"
		],
		id: "switch_map_and_zone_set"
	},
	{
		symbol: "status",
		name: "status",
		description: "Prints the value of all global status variables.",
		arguments: [],
		id: "status"
	},
	{
		symbol: "record_movie",
		name: "record_movie",
		description: "<frame rate> <seconds> <width> <height>",
		arguments: [
			"short",
			"real",
			"short",
			"short"
		],
		id: "record_movie"
	},
	{
		symbol: "record_movie_distributed",
		name: "record_movie_distributed",
		description: "<frame rate> <seconds> <screen size> <mod count> <mod index>",
		arguments: [
			"short",
			"long",
			"short",
			"long",
			"long"
		],
		id: "record_movie_distributed"
	},
	{
		symbol: "screenshot",
		name: "screenshot",
		description: "Takes a screenshot and saves as <name>.tif",
		arguments: [
			"string"
		],
		id: "screenshot"
	},
	{
		symbol: "screenshot_debug",
		name: "screenshot_debug",
		description: "Takes a screenshot and saves as <name>.tif",
		arguments: [],
		id: "screenshot_debug"
	},
	{
		symbol: "screenshot_big",
		name: "screenshot_big",
		description: "Takes an NxN multiple-page screenshot and saves as <name>.tif",
		arguments: [
			"short",
			"string"
		],
		id: "screenshot_big"
	},
	{
		symbol: "screenshot_big_raw",
		name: "screenshot_big_raw",
		description: "Takes an NxN multiple-page screenshot and saves as an HDR <name>.tif",
		arguments: [
			"short",
			"string"
		],
		id: "screenshot_big_raw"
	},
	{
		symbol: "screenshot_size",
		name: "screenshot_size",
		description: "Takes a <width> x <height> screenshot and saves as an HDR <name>.tif",
		arguments: [
			"short",
			"short",
			"string"
		],
		id: "screenshot_size"
	},
	{
		symbol: "screenshot_simple",
		name: "screenshot_simple",
		description: "Takes a simple screenshot and saves as <name>.tif",
		arguments: [
			"string"
		],
		id: "screenshot_simple"
	},
	{
		symbol: "screenshot_cubemap",
		name: "screenshot_cubemap",
		description: "Takes a cubemap screenshot and saves as <name>.tif",
		arguments: [
			"string"
		],
		id: "screenshot_cubemap"
	},
	{
		symbol: "screenshot_webmap",
		name: "screenshot_webmap",
		description: "Takes two special screenshots and saves them, along with the camera information, as <name>.tif, <name>_secondary.tif and <name>_camera.txt",
		arguments: [
			"string"
		],
		id: "screenshot_webmap"
	},
	{
		symbol: "cubemap_dynamic_generate",
		name: "cubemap_dynamic_generate",
		description: "Generates a dynamic cubemap and saves in the cubemaps directory",
		arguments: [],
		id: "cubemap_dynamic_generate"
	},
	{
		symbol: "main_menu",
		name: "main_menu",
		description: "Goes back to the main menu",
		arguments: [],
		id: "main_menu"
	},
	{
		symbol: "main_halt",
		name: "main_halt",
		description: "Goes to a halted pregame state",
		arguments: [],
		id: "main_halt"
	},
	{
		symbol: "game_multiplayer",
		name: "game_multiplayer",
		description: "Debug map launching: sets the multiplayer engine for the next map.",
		arguments: [
			"string"
		],
		id: "game_multiplayer"
	},
	{
		symbol: "game_splitscreen",
		name: "game_splitscreen",
		description: "Debug map launching: sets the number of multiplayer splitscreen players for the next map.",
		arguments: [
			"long"
		],
		id: "game_splitscreen"
	},
	{
		symbol: "game_difficulty",
		name: "game_difficulty",
		description: "Debug map launching: sets the difficulty of the next map.",
		arguments: [
			"game_difficulty"
		],
		id: "game_difficulty"
	},
	{
		symbol: "game_active_primary_skulls",
		name: "game_active_primary_skulls",
		description: "Debug map launching: sets the active primary skulls of the next map.",
		arguments: [
			"long"
		],
		id: "game_active_primary_skulls"
	},
	{
		symbol: "game_active_secondary_skulls",
		name: "game_active_secondary_skulls",
		description: "Debug map launching: sets the active primary skulls of the next map.",
		arguments: [
			"long"
		],
		id: "game_active_secondary_skulls"
	},
	{
		symbol: "game_coop_players",
		name: "game_coop_players",
		description: "Debug map launching: sets the number of coop players for the next map.",
		arguments: [
			"long"
		],
		id: "game_coop_players"
	},
	{
		symbol: "game_initial_zone_set",
		name: "game_initial_zone_set",
		description: "Debug map launching: sets the initial bsp for the next map.",
		arguments: [
			"long"
		],
		id: "game_initial_zone_set"
	},
	{
		symbol: "game_tick_rate",
		name: "game_tick_rate",
		description: "Debug map launching: sets the tick rate for the next map.",
		arguments: [
			"long"
		],
		id: "game_tick_rate"
	},
	{
		symbol: "game_start",
		name: "game_start",
		description: "Debug map launching: starts a game on the specified map.",
		arguments: [
			"string"
		],
		id: "game_start"
	},
	{
		symbol: "game_start_when_ready",
		name: "game_start_when_ready",
		description: "Nicely starts the current game once the pregame lobby is stable",
		arguments: [],
		id: "game_start_when_ready"
	},
	{
		symbol: "game_start_when_joined",
		name: "game_start_when_joined",
		description: "Nicely starts a game when the specified number of users are in the lobby",
		arguments: [
			"long"
		],
		id: "game_start_when_joined"
	},
	{
		symbol: "game_rate",
		name: "game_rate",
		description: "Changes game update rate (DANGER: only use if you know what you're doing!)",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "game_rate"
	},
	{
		symbol: "texture_cache_flush",
		name: "texture_cache_flush",
		description: "Don't make me kick your ass",
		arguments: [],
		id: "texture_cache_flush"
	},
	{
		symbol: "geometry_cache_flush",
		name: "geometry_cache_flush",
		description: "We fear change",
		arguments: [],
		id: "geometry_cache_flush"
	},
	{
		symbol: "sound_cache_flush",
		name: "sound_cache_flush",
		description: "I'm a rebel!",
		arguments: [],
		id: "sound_cache_flush"
	},
	{
		symbol: "animation_cache_flush",
		name: "animation_cache_flush",
		description: "It's just sooooo wrong",
		arguments: [],
		id: "animation_cache_flush"
	},
	{
		symbol: "font_cache_flush",
		name: "font_cache_flush",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "font_cache_flush"
	},
	{
		symbol: "language_set",
		name: "language_set",
		description: "Change the language for localization",
		arguments: [
			"string"
		],
		id: "language_set"
	},
	{
		symbol: "texture_cache_test_malloc",
		name: "texture_cache_test_malloc",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "texture_cache_test_malloc"
	},
	{
		symbol: "debug_memory",
		name: "debug_memory",
		description: "Dumps memory leaks.",
		arguments: [],
		id: "debug_memory"
	},
	{
		symbol: "debug_memory_by_file",
		name: "debug_memory_by_file",
		description: "Dumps memory leaks by source file.",
		arguments: [],
		id: "debug_memory_by_file"
	},
	{
		symbol: "debug_memory_for_file",
		name: "debug_memory_for_file",
		description: "Dumps memory leaks from the specified source file.",
		arguments: [
			"string"
		],
		id: "debug_memory_for_file"
	},
	{
		symbol: "debug_tags",
		name: "debug_tags",
		description: "Writes all memory being used by tag files into tag_dump.txt",
		arguments: [],
		id: "debug_tags"
	},
	{
		symbol: "tags_verify_all",
		name: "tags_verify_all",
		description: "Verifies usage of infidel fields is correct",
		arguments: [],
		id: "tags_verify_all"
	},
	{
		symbol: "profiler_enable",
		name: "profiler_enable",
		description: "Toggles the profile display on/off",
		arguments: [
			"boolean"
		],
		id: "profiler_enable"
	},
	{
		symbol: "profiler_set_thread",
		name: "profiler_set_thread",
		description: "Sets the thread index being profiled",
		arguments: [
			"long"
		],
		id: "profiler_set_thread"
	},
	{
		symbol: "profiler_set_sort_method",
		name: "profiler_set_sort_method",
		description: "Sets the sorting method used",
		arguments: [
			"long"
		],
		id: "profiler_set_sort_method"
	},
	{
		symbol: "profiler_set_range",
		name: "profiler_set_range",
		description: "Sets the collection range used",
		arguments: [
			"long"
		],
		id: "profiler_set_range"
	},
	{
		symbol: "profiler_set_attribute",
		name: "profiler_set_attribute",
		description: "Sets an attribute to profile by name",
		arguments: [
			"string"
		],
		id: "profiler_set_attribute"
	},
	{
		symbol: "trace_next_frame",
		name: "trace_next_frame",
		description: "Creates a tracedump of the next frame",
		arguments: [
			"long"
		],
		id: "trace_next_frame"
	},
	{
		symbol: "trace_next_frame_to_file",
		name: "trace_next_frame_to_file",
		description: "Creates a tracedump of the next frame in a specific file",
		arguments: [
			"long",
			"string"
		],
		id: "trace_next_frame_to_file"
	},
	{
		symbol: "trace_tick",
		name: "trace_tick",
		description: "Creates a tracedump of a specific game tick",
		arguments: [
			"long"
		],
		id: "trace_tick"
	},
	{
		symbol: "collision_log_enable",
		name: "collision_log_enable",
		description: "Enables or disables collision logging.",
		arguments: [
			"boolean"
		],
		id: "collision_log_enable"
	},
	{
		symbol: "damage_control_get",
		name: "damage_control_get",
		description: "Gets a damage control setting by string",
		arguments: [
			"string"
		],
		id: "damage_control_get"
	},
	{
		symbol: "damage_control_set",
		name: "damage_control_set",
		description: "Sets a damage control setting by string",
		arguments: [
			"string",
			"boolean"
		],
		id: "damage_control_set"
	},
	{
		symbol: "ai_lines",
		name: "ai_lines",
		description: "Cycles through AI line-spray modes",
		arguments: [],
		id: "ai_lines"
	},
	{
		symbol: "ai_dialogue_break_on_vocalization",
		name: "ai_dialogue_break_on_vocalization",
		description: "Break when the following vocalization is chosen for utterance",
		arguments: [
			"string_id"
		],
		id: "ai_dialogue_break_on_vocalization"
	},
	{
		symbol: "cinematic_show_letterbox_immediate",
		name: "cinematic_show_letterbox_immediate",
		description: "Sets or removes the letterbox bars",
		arguments: [
			"boolean"
		],
		id: "cinematic_show_letterbox_immediate"
	},
	{
		symbol: "cinematic_subtitle",
		name: "cinematic_subtitle",
		description: "Displays the named subtitle for <real> seconds",
		arguments: [
			"string_id",
			"real"
		],
		id: "cinematic_subtitle"
	},
	{
		symbol: "cinematic_set",
		name: "cinematic_set",
		description: "Sets the cinematic name for the current cinematic.",
		arguments: [
			"cinematic definition"
		],
		id: "cinematic_set"
	},
	{
		symbol: "cinematic_set_shot",
		name: "cinematic_set_shot",
		description: "Sets the scene and shot for the current cinematic.",
		arguments: [
			"cinematic scene definition",
			"long"
		],
		id: "cinematic_set_shot"
	},
	{
		symbol: "cinematic_get_shot",
		name: "cinematic_get_shot",
		description: "Print the stored scene and shot information to the screen",
		arguments: [],
		id: "cinematic_get_shot"
	},
	{
		symbol: "cinematic_set_early_exit",
		name: "cinematic_set_early_exit",
		description: "Used to store the state of skippable cinematics",
		arguments: [
			"long"
		],
		id: "cinematic_set_early_exit"
	},
	{
		symbol: "cinematic_get_early_exit",
		name: "cinematic_get_early_exit",
		description: "Used to retrieve the state of skippable cinematics",
		arguments: [],
		id: "cinematic_get_early_exit"
	},
	{
		symbol: "cinematic_set_active_camera",
		name: "cinematic_set_active_camera",
		description: "Used to change the rasterizer to display one of the texture cameras",
		arguments: [
			"string_id"
		],
		id: "cinematic_set_active_camera"
	},
	{
		symbol: "cinematic_object_create",
		name: "cinematic_object_create",
		description: "Creates an object for use by cinematics",
		arguments: [
			"string"
		],
		id: "cinematic_object_create"
	},
	{
		symbol: "cinematic_object_create_cinematic_anchor",
		name: "cinematic_object_create_cinematic_anchor",
		description: "Creates a cinematic anchor object for use by cinematics",
		arguments: [
			"string",
			"cutscene_flag"
		],
		id: "cinematic_object_create_cinematic_anchor"
	},
	{
		symbol: "cinematic_object_destroy",
		name: "cinematic_object_destroy",
		description: "Destroys an object created by cinematic_object_create",
		arguments: [
			"string"
		],
		id: "cinematic_object_destroy"
	},
	{
		symbol: "cinematic_destroy",
		name: "cinematic_destroy",
		description: "Releases everything created by the cinematics system",
		arguments: [],
		id: "cinematic_destroy"
	},
	{
		symbol: "cinematic_clips_initialize_for_shot",
		name: "cinematic_clips_initialize_for_shot",
		description: "Intializes the cinematic clip planes for the given shot of the current cinematic",
		arguments: [
			"long"
		],
		id: "cinematic_clips_initialize_for_shot"
	},
	{
		symbol: "cinematic_clips_destroy",
		name: "cinematic_clips_destroy",
		description: "Destroys any existing cinematic clip planes for the current cinematic",
		arguments: [],
		id: "cinematic_clips_destroy"
	},
	{
		symbol: "cinematic_lights_initialize_for_shot",
		name: "cinematic_lights_initialize_for_shot",
		description: "Intializes the cinematic lighting for the given shot of the current cinematic",
		arguments: [
			"long"
		],
		id: "cinematic_lights_initialize_for_shot"
	},
	{
		symbol: "cinematic_lights_destroy",
		name: "cinematic_lights_destroy",
		description: "Destroys any existing cinematic lights for the current cinematic",
		arguments: [],
		id: "cinematic_lights_destroy"
	},
	{
		symbol: "cinematic_light_object",
		name: "cinematic_light_object",
		description: "Attaches cinematic lights to <object> at <marker> using scenario cinematic lighting palette entry <scenario-cinematic-lighting-name> from point of view of camera reference <camera>",
		arguments: [
			"object",
			"string_id",
			"cinematic_lightprobe",
			"cutscene_camera_point"
		],
		id: "cinematic_light_object"
	},
	{
		symbol: "cinematic_light_object_off",
		name: "cinematic_light_object_off",
		description: "Turn off cinematic lighting for the object.",
		arguments: [
			"object"
		],
		id: "cinematic_light_object_off"
	},
	{
		symbol: "cinematic_lighting_rebuild_all",
		name: "cinematic_lighting_rebuild_all",
		description: "Rebuild all cinematic lighting (SH only)",
		arguments: [],
		id: "cinematic_lighting_rebuild_all"
	},
	{
		symbol: "cinematic_object_get",
		name: "cinematic_object_get",
		description: "Returns an object created by cinematic_object_create",
		arguments: [
			"string"
		],
		id: "cinematic_object_get"
	},
	{
		symbol: "cinematic_object_get_unit",
		name: "cinematic_object_get_unit",
		description: "Returns a unit created by cinematic_object_create",
		arguments: [
			"string"
		],
		id: "cinematic_object_get_unit"
	},
	{
		symbol: "cinematic_object_get_scenery",
		name: "cinematic_object_get_scenery",
		description: "Returns a scenery object created by cinematic_object_create",
		arguments: [
			"string"
		],
		id: "cinematic_object_get_scenery"
	},
	{
		symbol: "cinematic_object_get_effect_scenery",
		name: "cinematic_object_get_effect_scenery",
		description: "Returns a scenery object created by cinematic_object_create",
		arguments: [
			"string"
		],
		id: "cinematic_object_get_effect_scenery"
	},
	{
		symbol: "cinematic_reset",
		name: "cinematic_reset",
		description: "Resets the cinematics internal state",
		arguments: [],
		id: "cinematic_reset"
	},
	{
		symbol: "camera_set_briefing",
		name: "camera_set_briefing",
		description: "Used for briefing cinematics",
		arguments: [
			"boolean"
		],
		id: "camera_set_briefing"
	},
	{
		symbol: "cinematic_tag_reference_get_cinematic",
		name: "cinematic_tag_reference_get_cinematic",
		description: "Retrieve a cinematic tag from the cinematic system",
		arguments: [
			"long"
		],
		id: "cinematic_tag_reference_get_cinematic"
	},
	{
		symbol: "cinematic_tag_reference_get_scene",
		name: "cinematic_tag_reference_get_scene",
		description: "Retrieve a cinematic tag from the cinematic system",
		arguments: [
			"long",
			"long"
		],
		id: "cinematic_tag_reference_get_scene"
	},
	{
		symbol: "cinematic_tag_reference_get_effect",
		name: "cinematic_tag_reference_get_effect",
		description: "Retrieve an effect tag from the cinematic system",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_tag_reference_get_effect"
	},
	{
		symbol: "cinematic_tag_reference_get_dialogue",
		name: "cinematic_tag_reference_get_dialogue",
		description: "Retrieve a sound tag from the cinematic system",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_tag_reference_get_dialogue"
	},
	{
		symbol: "cinematic_tag_reference_get_music",
		name: "cinematic_tag_reference_get_music",
		description: "Retrieve a sound tag from the cinematic system",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_tag_reference_get_music"
	},
	{
		symbol: "cinematic_tag_reference_get_music_looping",
		name: "cinematic_tag_reference_get_music_looping",
		description: "Retrieve a looping sound tag from the cinematic system",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_tag_reference_get_music_looping"
	},
	{
		symbol: "cinematic_tag_reference_get_animation",
		name: "cinematic_tag_reference_get_animation",
		description: "Retrieve a looping sound tag from the cinematic system",
		arguments: [
			"long",
			"long",
			"long"
		],
		id: "cinematic_tag_reference_get_animation"
	},
	{
		symbol: "cinematic_scripting_object_coop_flags_valid",
		name: "cinematic_scripting_object_coop_flags_valid",
		description: "Evaluate if a cinematic object should be displayed for the current coop flags",
		arguments: [
			"long",
			"long",
			"long"
		],
		id: "cinematic_scripting_object_coop_flags_valid"
	},
	{
		symbol: "cinematic_scripting_fade_out",
		name: "cinematic_scripting_fade_out",
		description: "Fade out at the end of the cinematic",
		arguments: [
			"real",
			"real",
			"real",
			"short"
		],
		id: "cinematic_scripting_fade_out"
	},
	{
		symbol: "cinematic_scripting_create_object",
		name: "cinematic_scripting_create_object",
		description: "Create a manually placed cinematic object",
		arguments: [
			"long",
			"long",
			"long",
			"object_name"
		],
		id: "cinematic_scripting_create_object"
	},
	{
		symbol: "cinematic_scripting_create_cinematic_object",
		name: "cinematic_scripting_create_cinematic_object",
		description: "Create a manually placed cinematic object",
		arguments: [
			"long",
			"long",
			"long"
		],
		id: "cinematic_scripting_create_cinematic_object"
	},
	{
		symbol: "cinematic_scripting_start_animation",
		name: "cinematic_scripting_start_animation",
		description: "Animate a manually placed cinematic object",
		arguments: [
			"long",
			"long",
			"long",
			"object",
			"string_id"
		],
		id: "cinematic_scripting_start_animation"
	},
	{
		symbol: "cinematic_scripting_destroy_object",
		name: "cinematic_scripting_destroy_object",
		description: "Destroy a cinematic object",
		arguments: [
			"long",
			"long",
			"long",
			"object"
		],
		id: "cinematic_scripting_destroy_object"
	},
	{
		symbol: "cinematic_scripting_start_effect",
		name: "cinematic_scripting_start_effect",
		description: "Play a cinematic effect",
		arguments: [
			"long",
			"long",
			"long",
			"long",
			"object"
		],
		id: "cinematic_scripting_start_effect"
	},
	{
		symbol: "cinematic_scripting_start_music",
		name: "cinematic_scripting_start_music",
		description: "Play a cinematic music",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_scripting_start_music"
	},
	{
		symbol: "cinematic_scripting_start_dialogue",
		name: "cinematic_scripting_start_dialogue",
		description: "Play a cinematic dialogue",
		arguments: [
			"long",
			"long",
			"long",
			"long",
			"object"
		],
		id: "cinematic_scripting_start_dialogue"
	},
	{
		symbol: "cinematic_scripting_stop_music",
		name: "cinematic_scripting_stop_music",
		description: "Stops a cinematic music",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_scripting_stop_music"
	},
	{
		symbol: "cinematic_scripting_create_and_animate_object",
		name: "cinematic_scripting_create_and_animate_object",
		description: "Create and Animate a cinematic object.",
		arguments: [
			"long",
			"long",
			"long",
			"object_name",
			"object",
			"string_id",
			"boolean"
		],
		id: "cinematic_scripting_create_and_animate_object"
	},
	{
		symbol: "cinematic_scripting_create_and_animate_cinematic_object",
		name: "cinematic_scripting_create_and_animate_cinematic_object",
		description: "Create and Animate a cinematic object.",
		arguments: [
			"long",
			"long",
			"long",
			"object",
			"string_id",
			"boolean"
		],
		id: "cinematic_scripting_create_and_animate_cinematic_object"
	},
	{
		symbol: "cinematic_scripting_create_and_animate_object_no_animation",
		name: "cinematic_scripting_create_and_animate_object_no_animation",
		description: "Create and Animate a cinematic object.",
		arguments: [
			"long",
			"long",
			"long",
			"object_name",
			"object",
			"boolean"
		],
		id: "cinematic_scripting_create_and_animate_object_no_animation"
	},
	{
		symbol: "cinematic_scripting_create_and_animate_cinematic_object_no_animation",
		name: "cinematic_scripting_create_and_animate_cinematic_object_no_animation",
		description: "Create and Animate a cinematic object.",
		arguments: [
			"long",
			"long",
			"long",
			"object",
			"boolean"
		],
		id: "cinematic_scripting_create_and_animate_cinematic_object_no_animation"
	},
	{
		symbol: "cinematic_scripting_play_cortana_effect",
		name: "cinematic_scripting_play_cortana_effect",
		description: "Play the associated cortana effect.",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "cinematic_scripting_play_cortana_effect"
	},
	{
		symbol: "attract_mode_start",
		name: "attract_mode_start",
		description: "Starts an attract mode movie",
		arguments: [],
		id: "attract_mode_start"
	},
	{
		symbol: "attract_mode_set_seconds",
		name: "attract_mode_set_seconds",
		description: "Sets number of seconds of the attract mode countdown timer.",
		arguments: [
			"long"
		],
		id: "attract_mode_set_seconds"
	},
	{
		symbol: "game_lost",
		name: "game_lost",
		description: "Marks the game as lost or not lost",
		arguments: [
			"boolean"
		],
		id: "game_lost"
	},
	{
		symbol: "game_is_playtest",
		name: "game_is_playtest",
		description: "Returns the hs global boolean 'global_playtest_mode' which can be set in your init.txt",
		arguments: [],
		returns: "boolean",
		id: "game_is_playtest"
	},
	{
		symbol: "game_can_use_flashlights",
		name: "game_can_use_flashlights",
		description: "Allows or disallows the user of player flashlights",
		arguments: [
			"boolean"
		],
		id: "game_can_use_flashlights"
	},
	{
		symbol: "game_save_and_quit",
		name: "game_save_and_quit",
		description: "Save & quit to the main menu",
		arguments: [],
		id: "game_save_and_quit"
	},
	{
		symbol: "game_save_unsafe",
		name: "game_save_unsafe",
		description: "Saves right now, even if the game is in an immediate-loss state (NEVER USE THIS! EVER!)",
		arguments: [],
		id: "game_save_unsafe"
	},
	{
		symbol: "game_insertion_point_unlock",
		name: "game_insertion_point_unlock",
		description: "Unlocks the given insertion point for the current map for all players",
		arguments: [
			"short"
		],
		id: "game_insertion_point_unlock"
	},
	{
		symbol: "game_insertion_point_lock",
		name: "game_insertion_point_lock",
		description: "Unlocks the given insertion point for the current map for all players",
		arguments: [
			"short"
		],
		id: "game_insertion_point_lock"
	},
	{
		symbol: "saved_games_enumerate",
		name: "saved_games_enumerate",
		description: "Test enumeration of saved game files on a controller",
		arguments: [
			"controller"
		],
		id: "saved_games_enumerate"
	},
	{
		symbol: "saved_games_delete_campaign_save",
		name: "saved_games_delete_campaign_save",
		description: "Delete the campaign saved game file for a controller",
		arguments: [
			"controller"
		],
		id: "saved_games_delete_campaign_save"
	},
	{
		symbol: "saved_games_save_last_film",
		name: "saved_games_save_last_film",
		description: "Test saving of last recorded film for a controller",
		arguments: [
			"controller"
		],
		id: "saved_games_save_last_film"
	},
	{
		symbol: "saved_games_autosave_free_up_space",
		name: "saved_games_autosave_free_up_space",
		description: "Tell the autosave queue to run its cleanup routine for each content type",
		arguments: [],
		id: "saved_games_autosave_free_up_space"
	},
	{
		symbol: "content_catalogue_display_status",
		name: "content_catalogue_display_status",
		description: "Display the status of content catalogue for a controller, optionally showing only open content items",
		arguments: [
			"controller",
			"boolean",
			"boolean"
		],
		id: "content_catalogue_display_status"
	},
	{
		symbol: "achievement_was_earned_by_player",
		name: "achievement_was_earned_by_player",
		description: "Check if player has been awarded named achievement",
		arguments: [
			"short",
			"string_id"
		],
		id: "achievement_was_earned_by_player"
	},
	{
		symbol: "achievement_grant_to_player",
		name: "achievement_grant_to_player",
		description: "Award named achievement to player",
		arguments: [
			"short",
			"string_id"
		],
		id: "achievement_grant_to_player"
	},
	{
		symbol: "achievements_enable",
		name: "achievements_enable",
		description: "Enable or disable the awarding of achievements",
		arguments: [
			"boolean"
		],
		id: "achievements_enable"
	},
	{
		symbol: "achievements_skip_validation_checks",
		name: "achievements_skip_validation_checks",
		description: "Toggle the disabling of validation checks on achievement awarding",
		arguments: [
			"boolean"
		],
		id: "achievements_skip_validation_checks"
	},
	{
		symbol: "debug_spawning_influencers",
		name: "debug_spawning_influencers",
		description: "Toggle debugging of any & all dynamic respawn influencers",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_influencers"
	},
	{
		symbol: "debug_spawning_respawn_zones",
		name: "debug_spawning_respawn_zones",
		description: "Debugs respawn zone influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_respawn_zones"
	},
	{
		symbol: "debug_spawning_proximity_forbid",
		name: "debug_spawning_proximity_forbid",
		description: "Debugs enemy proximity forbid influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_proximity_forbid"
	},
	{
		symbol: "debug_spawning_moving_vehicle",
		name: "debug_spawning_moving_vehicle",
		description: "Debugs moving vehicle danger influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_moving_vehicle"
	},
	{
		symbol: "debug_spawning_weapon_influences",
		name: "debug_spawning_weapon_influences",
		description: "Debugs enemy weapon danger influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_weapon_influences"
	},
	{
		symbol: "debug_spawning_dangerous_projectiles",
		name: "debug_spawning_dangerous_projectiles",
		description: "Debugs dangerous projectile influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_dangerous_projectiles"
	},
	{
		symbol: "debug_spawning_deployed_equipment",
		name: "debug_spawning_deployed_equipment",
		description: "Debugs deployed equipment influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_deployed_equipment"
	},
	{
		symbol: "debug_spawning_proximity_enemy",
		name: "debug_spawning_proximity_enemy",
		description: "Debugs enemy proximity bias influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_proximity_enemy"
	},
	{
		symbol: "debug_spawning_teammates",
		name: "debug_spawning_teammates",
		description: "Debugs teammate proximity bias influences",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_teammates"
	},
	{
		symbol: "debug_spawning_random_influence",
		name: "debug_spawning_random_influence",
		description: "Toggles display of random influence contribution",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_random_influence"
	},
	{
		symbol: "debug_spawning_nominal_weight",
		name: "debug_spawning_nominal_weight",
		description: "Toggles display of the nominal weight influence contribution",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_nominal_weight"
	},
	{
		symbol: "debug_spawning_natural_weight",
		name: "debug_spawning_natural_weight",
		description: "Toggles display of the natural weight influence contribution",
		arguments: [
			"boolean"
		],
		id: "debug_spawning_natural_weight"
	},
	{
		symbol: "debug_spawning_target",
		name: "debug_spawning_target",
		description: "Sets target player for respawn influencer debugging display",
		arguments: [
			"string"
		],
		id: "debug_spawning_target"
	},
	{
		symbol: "debug_spawning_use_history",
		name: "debug_spawning_use_history",
		description: "Sets the saved respawn state for respawn influencer debugging display",
		arguments: [
			"long"
		],
		id: "debug_spawning_use_history"
	},
	{
		symbol: "debug_initial_spawn_point_objects",
		name: "debug_initial_spawn_point_objects",
		description: "Toggles debug cycling through multiplayer initial spawn points objects",
		arguments: [
			"boolean"
		],
		id: "debug_initial_spawn_point_objects"
	},
	{
		symbol: "debug_respawn_point_objects",
		name: "debug_respawn_point_objects",
		description: "Toggles debug cycling through multiplayer respawn points objects",
		arguments: [
			"boolean"
		],
		id: "debug_respawn_point_objects"
	},
	{
		symbol: "game_export_variant_settings",
		name: "game_export_variant_settings",
		description: "Export the current game engine variant settings to the specified text file",
		arguments: [
			"string"
		],
		id: "game_export_variant_settings"
	},
	{
		symbol: "game_engine_event_test_general",
		name: "game_engine_event_test_general",
		description: "Test game engine general event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_general"
	},
	{
		symbol: "game_engine_event_test_flavor",
		name: "game_engine_event_test_flavor",
		description: "Test game engine flavor event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_flavor"
	},
	{
		symbol: "game_engine_event_test_slayer",
		name: "game_engine_event_test_slayer",
		description: "Test game engine slayer event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_slayer"
	},
	{
		symbol: "game_engine_event_test_ctf",
		name: "game_engine_event_test_ctf",
		description: "Test game engine ctf event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_ctf"
	},
	{
		symbol: "game_engine_event_test_oddball",
		name: "game_engine_event_test_oddball",
		description: "Test game engine oddball event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_oddball"
	},
	{
		symbol: "game_engine_event_test_king",
		name: "game_engine_event_test_king",
		description: "Test game engine king event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_king"
	},
	{
		symbol: "game_engine_event_test_vip",
		name: "game_engine_event_test_vip",
		description: "Test game engine vip event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_vip"
	},
	{
		symbol: "game_engine_event_test_juggernaut",
		name: "game_engine_event_test_juggernaut",
		description: "Test game engine juggernaut event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_juggernaut"
	},
	{
		symbol: "game_engine_event_test_territories",
		name: "game_engine_event_test_territories",
		description: "Test game engine territories event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_territories"
	},
	{
		symbol: "game_engine_event_test_assault",
		name: "game_engine_event_test_assault",
		description: "Test game engine assault event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_assault"
	},
	{
		symbol: "game_engine_event_test_infection",
		name: "game_engine_event_test_infection",
		description: "Test game engine infection event",
		arguments: [
			"long"
		],
		id: "game_engine_event_test_infection"
	},
	{
		symbol: "core_save_name",
		name: "core_save_name",
		description: "Saves debug game state to core\\<path>",
		arguments: [
			"string"
		],
		id: "core_save_name"
	},
	{
		symbol: "core_load_game",
		name: "core_load_game",
		description: "Loads level and game state from core\\core.bin",
		arguments: [],
		id: "core_load_game"
	},
	{
		symbol: "core_load_game_name",
		name: "core_load_game_name",
		description: "Loads level and game state from core\\<path>",
		arguments: [
			"string"
		],
		id: "core_load_game_name"
	},
	{
		symbol: "core_regular_upload_to_debug_server",
		name: "core_regular_upload_to_debug_server",
		description: "Toggle periodic core uploading to debug server",
		arguments: [
			"boolean"
		],
		id: "core_regular_upload_to_debug_server"
	},
	{
		symbol: "core_set_upload_option",
		name: "core_set_upload_option",
		description: "Sets options for game state uploading (current options are 'default', 'repro', and 'stress'",
		arguments: [
			"string"
		],
		id: "core_set_upload_option"
	},
	{
		symbol: "force_debugger_not_present",
		name: "force_debugger_not_present",
		description: "Forces is_debugger_present() to return false",
		arguments: [
			"boolean"
		],
		id: "force_debugger_not_present"
	},
	{
		symbol: "force_debugger_always_present",
		name: "force_debugger_always_present",
		description: "Forces is_debugger_present() to return true",
		arguments: [
			"boolean"
		],
		id: "force_debugger_always_present"
	},
	{
		symbol: "game_save_immediate",
		name: "game_save_immediate",
		description: "Disregards player's current situation and saves (BE VERY CAREFUL!)",
		arguments: [],
		id: "game_save_immediate"
	},
	{
		symbol: "sound_set_tag_parameter_unsafe",
		name: "sound_set_tag_parameter_unsafe",
		description: "This is the second sign of the coming of the antichrist",
		arguments: [
			"string",
			"string",
			"long",
			"long",
			"long",
			"real",
			"real",
			"real"
		],
		id: "sound_set_tag_parameter_unsafe"
	},
	{
		symbol: "sound_impulse_predict",
		name: "sound_impulse_predict",
		description: "Your mom part 2.",
		arguments: [
			"sound"
		],
		id: "sound_impulse_predict"
	},
	{
		symbol: "sound_impulse_trigger",
		name: "sound_impulse_trigger",
		description: "Plays an impulse sound from the specified source object (or \"none\"), with the specified scale.",
		arguments: [
			"sound",
			"object",
			"real",
			"long"
		],
		id: "sound_impulse_trigger"
	},
	{
		symbol: "sound_impulse_start_cinematic",
		name: "sound_impulse_start_cinematic",
		description: "<sound> <object> <scale> <3d gain> <first person gain> plays an impulse sound from the specified source object.",
		arguments: [
			"sound",
			"object",
			"real",
			"real",
			"real"
		],
		id: "sound_impulse_start_cinematic"
	},
	{
		symbol: "sound_impulse_start_effect",
		name: "sound_impulse_start_effect",
		description: "Plays an impulse sound from the specified source object (or \"none\"), with the specified scale and effect.",
		arguments: [
			"sound",
			"object",
			"real",
			"string_id"
		],
		id: "sound_impulse_start_effect"
	},
	{
		symbol: "sound_impulse_start_with_subtitle",
		name: "sound_impulse_start_with_subtitle",
		description: "Plays an impulse sound from the specified source object (or \"none\"), with the specified scale and displays a subtitle.",
		arguments: [
			"sound",
			"object",
			"real",
			"string_id",
			"string_id"
		],
		id: "sound_impulse_start_with_subtitle"
	},
	{
		symbol: "sound_impulse_language_time",
		name: "sound_impulse_language_time",
		description: "Returns the time remaining for the specified impulse sound. DO NOT CALL IN CUTSCENES.",
		arguments: [
			"sound"
		],
		returns: "long",
		id: "sound_impulse_language_time"
	},
	{
		symbol: "sound_impulse_start_3d",
		name: "sound_impulse_start_3d",
		description: "<sound> <azimuth> <scale> at the sound's minimum distance",
		arguments: [
			"sound",
			"real",
			"real"
		],
		id: "sound_impulse_start_3d"
	},
	{
		symbol: "sound_impulse_mark_as_outro",
		name: "sound_impulse_mark_as_outro",
		description: "Marks a sound as outro (meaning it plays past an unskipped cinematic).",
		arguments: [
			"sound"
		],
		id: "sound_impulse_mark_as_outro"
	},
	{
		symbol: "sound_impulse_start_naked",
		name: "sound_impulse_start_naked",
		description: "<sound> <pitch range name> <permutation index name> through the speakers it was encoded for",
		arguments: [
			"sound",
			"string_id",
			"string_id"
		],
		id: "sound_impulse_start_naked"
	},
	{
		symbol: "sound_looping_stop_immediately",
		name: "sound_looping_stop_immediately",
		description: "Stops the specified looping sound immediately.",
		arguments: [
			"looping_sound"
		],
		id: "sound_looping_stop_immediately"
	},
	{
		symbol: "sound_loop_spam",
		name: "sound_loop_spam",
		description: "Start all loaded looping sounds",
		arguments: [],
		id: "sound_loop_spam"
	},
	{
		symbol: "sound_class_show_channel",
		name: "sound_class_show_channel",
		description: "Shows/hides sound classes w/ substring in debug_sound_channels view",
		arguments: [
			"string",
			"boolean"
		],
		id: "sound_class_show_channel"
	},
	{
		symbol: "sound_class_debug_sound_start",
		name: "sound_class_debug_sound_start",
		description: "Shows/hides when sounds of sound classes w/ substring start",
		arguments: [
			"string",
			"boolean"
		],
		id: "sound_class_debug_sound_start"
	},
	{
		symbol: "sound_class_set_gain_db",
		name: "sound_class_set_gain_db",
		description: "Changes the gain on the specified sound class(es) to the specified gain(dB) over the specified number of ticks.",
		arguments: [
			"string",
			"real",
			"short"
		],
		id: "sound_class_set_gain_db"
	},
	{
		symbol: "sound_class_enable_ducker",
		name: "sound_class_enable_ducker",
		description: "Enables or disables the ducker on all sound classes matching the substring.",
		arguments: [
			"string",
			"boolean"
		],
		id: "sound_class_enable_ducker"
	},
	{
		symbol: "debug_sound_environment_parameter",
		name: "debug_sound_environment_parameter",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"long",
			"real"
		],
		id: "debug_sound_environment_parameter"
	},
	{
		symbol: "sound_set_global_effect",
		name: "sound_set_global_effect",
		description: "Bleh",
		arguments: [
			"string_id",
			"real"
		],
		id: "sound_set_global_effect"
	},
	{
		symbol: "sound_set_global_effect_scale",
		name: "sound_set_global_effect_scale",
		description: "More bleh",
		arguments: [
			"string_id",
			"real"
		],
		id: "sound_set_global_effect_scale"
	},
	{
		symbol: "vehicle_auto_turret",
		name: "vehicle_auto_turret",
		description: "Sets the specified trigger volume and parameters for an auto turret",
		arguments: [
			"vehicle",
			"trigger_volume",
			"real",
			"real",
			"real"
		],
		id: "vehicle_auto_turret"
	},
	{
		symbol: "vehicle_count_bipeds_killed",
		name: "vehicle_count_bipeds_killed",
		description: "Returns how many people this vehicle has killed",
		arguments: [
			"vehicle"
		],
		returns: "long",
		id: "vehicle_count_bipeds_killed"
	},
	{
		symbol: "biped_ragdoll",
		name: "biped_ragdoll",
		description: "Given a dead biped, turns on ragdoll",
		arguments: [
			"unit"
		],
		id: "biped_ragdoll"
	},
	{
		symbol: "water_float_reset",
		name: "water_float_reset",
		description: "Allows an object to continue floating",
		arguments: [
			"object"
		],
		id: "water_float_reset"
	},
	{
		symbol: "hud_show_training_text",
		name: "hud_show_training_text",
		description: "True turns on scripted training text",
		arguments: [
			"boolean"
		],
		id: "hud_show_training_text"
	},
	{
		symbol: "hud_set_training_text",
		name: "hud_set_training_text",
		description: "Sets the string id fo the scripted training text",
		arguments: [
			"string_id"
		],
		id: "hud_set_training_text"
	},
	{
		symbol: "hud_enable_training",
		name: "hud_enable_training",
		description: "True turns training on, false turns it off.",
		arguments: [
			"boolean"
		],
		id: "hud_enable_training"
	},
	{
		symbol: "player_training_activate_flashlight",
		name: "player_training_activate_flashlight",
		description: "Guess",
		arguments: [],
		id: "player_training_activate_flashlight"
	},
	{
		symbol: "player_training_activate_crouch",
		name: "player_training_activate_crouch",
		description: "Guess",
		arguments: [],
		id: "player_training_activate_crouch"
	},
	{
		symbol: "player_training_activate_stealth",
		name: "player_training_activate_stealth",
		description: "Guess",
		arguments: [],
		id: "player_training_activate_stealth"
	},
	{
		symbol: "player_training_activate_equipment",
		name: "player_training_activate_equipment",
		description: "Guess",
		arguments: [],
		id: "player_training_activate_equipment"
	},
	{
		symbol: "player_training_activate_jump",
		name: "player_training_activate_jump",
		description: "Guess",
		arguments: [],
		id: "player_training_activate_jump"
	},
	{
		symbol: "hud_activate_team_nav_point_flag",
		name: "hud_activate_team_nav_point_flag",
		description: "Activates a nav point type <string> attached to a team anchored to a flag with a vertical offset <real>. If the player is not local to the machine, this will fail",
		arguments: [
			"team",
			"cutscene_flag",
			"real"
		],
		id: "hud_activate_team_nav_point_flag"
	},
	{
		symbol: "hud_deactivate_team_nav_point_flag",
		name: "hud_deactivate_team_nav_point_flag",
		description: "Deactivates a nav point type attached to a team anchored to a flag",
		arguments: [
			"team",
			"cutscene_flag"
		],
		id: "hud_deactivate_team_nav_point_flag"
	},
	{
		symbol: "chud_cortana_suck",
		name: "chud_cortana_suck",
		description: "Turns on the cortana suck, attached to the object at the given marker",
		arguments: [
			"object",
			"string_id",
			"boolean"
		],
		id: "chud_cortana_suck"
	},
	{
		symbol: "chud_texture_cam",
		name: "chud_texture_cam",
		description: "Turns the chud texturecam on/off",
		arguments: [
			"boolean"
		],
		id: "chud_texture_cam"
	},
	{
		symbol: "chud_cortana_set_range_multiplier",
		name: "chud_cortana_set_range_multiplier",
		description: "Scales the cortana effect distances",
		arguments: [
			"real"
		],
		id: "chud_cortana_set_range_multiplier"
	},
	{
		symbol: "play_cortana_effect",
		name: "play_cortana_effect",
		description: "Scales the cortana effect distances",
		arguments: [
			"string_id"
		],
		id: "play_cortana_effect"
	},
	{
		symbol: "chud_show",
		name: "chud_show",
		description: "Hides/shows the entire chud",
		arguments: [
			"boolean"
		],
		id: "chud_show"
	},
	{
		symbol: "chud_show_weapon_stats",
		name: "chud_show_weapon_stats",
		description: "Hides/shows the weapon huds",
		arguments: [
			"boolean"
		],
		id: "chud_show_weapon_stats"
	},
	{
		symbol: "chud_show_crosshair",
		name: "chud_show_crosshair",
		description: "Hides/shows the crosshair",
		arguments: [
			"boolean"
		],
		id: "chud_show_crosshair"
	},
	{
		symbol: "chud_show_shield",
		name: "chud_show_shield",
		description: "Hides/shows the shield",
		arguments: [
			"boolean"
		],
		id: "chud_show_shield"
	},
	{
		symbol: "chud_show_grenades",
		name: "chud_show_grenades",
		description: "Hides/shows the grenade hud",
		arguments: [
			"boolean"
		],
		id: "chud_show_grenades"
	},
	{
		symbol: "chud_show_messages",
		name: "chud_show_messages",
		description: "Hides/shows the chud messages",
		arguments: [
			"boolean"
		],
		id: "chud_show_messages"
	},
	{
		symbol: "chud_show_motion_sensor",
		name: "chud_show_motion_sensor",
		description: "Hides/shows the motion sensor chud",
		arguments: [
			"boolean"
		],
		id: "chud_show_motion_sensor"
	},
	{
		symbol: "chud_show_spike_grenades",
		name: "chud_show_spike_grenades",
		description: "Hides/shows the spike grenade chud",
		arguments: [
			"boolean"
		],
		id: "chud_show_spike_grenades"
	},
	{
		symbol: "chud_show_fire_grenades",
		name: "chud_show_fire_grenades",
		description: "Hides/shows the firebomb chud",
		arguments: [
			"boolean"
		],
		id: "chud_show_fire_grenades"
	},
	{
		symbol: "chud_cinematic_fade",
		name: "chud_cinematic_fade",
		description: "Parameter 1 is how, parameter 2 is when",
		arguments: [
			"real",
			"real"
		],
		id: "chud_cinematic_fade"
	},
	{
		symbol: "events_spam_suppression_enable",
		name: "events_spam_suppression_enable",
		description: "Enables or disables the suppression of event spamming",
		arguments: [
			"boolean"
		],
		id: "events_spam_suppression_enable"
	},
	{
		symbol: "error_geometry_show",
		name: "error_geometry_show",
		description: "Highlights all error geometry with a name that includes the given substring",
		arguments: [
			"string"
		],
		id: "error_geometry_show"
	},
	{
		symbol: "error_geometry_hide",
		name: "error_geometry_hide",
		description: "Hides all error geometry with a name that includes the given substring",
		arguments: [
			"string"
		],
		id: "error_geometry_hide"
	},
	{
		symbol: "error_geometry_show_all",
		name: "error_geometry_show_all",
		description: "Highlights all error geometry",
		arguments: [],
		id: "error_geometry_show_all"
	},
	{
		symbol: "error_geometry_hide_all",
		name: "error_geometry_hide_all",
		description: "Hides all error geometry",
		arguments: [],
		id: "error_geometry_hide_all"
	},
	{
		symbol: "error_geometry_list",
		name: "error_geometry_list",
		description: "Prints out a list of all error geometry types and counts",
		arguments: [],
		id: "error_geometry_list"
	},
	{
		symbol: "player_effect_set_max_rumble",
		name: "player_effect_set_max_rumble",
		description: "<left> <right>",
		arguments: [
			"real",
			"real"
		],
		id: "player_effect_set_max_rumble"
	},
	{
		symbol: "time_code_show",
		name: "time_code_show",
		description: "Shows the time code timer",
		arguments: [
			"boolean"
		],
		id: "time_code_show"
	},
	{
		symbol: "time_code_start",
		name: "time_code_start",
		description: "Starts/stops the time code timer",
		arguments: [
			"boolean"
		],
		id: "time_code_start"
	},
	{
		symbol: "time_code_reset",
		name: "time_code_reset",
		description: "Resets the time code timer",
		arguments: [],
		id: "time_code_reset"
	},
	{
		symbol: "cinematic_screen_effect_set_crossfade",
		name: "cinematic_screen_effect_set_crossfade",
		description: "Transition-time",
		arguments: [
			"real"
		],
		id: "cinematic_screen_effect_set_crossfade"
	},
	{
		symbol: "cinematic_screen_effect_set_crossfade2",
		name: "cinematic_screen_effect_set_crossfade2",
		description: "Transition-time, exponent",
		arguments: [
			"real",
			"real"
		],
		id: "cinematic_screen_effect_set_crossfade2"
	},
	{
		symbol: "cinematic_set_far_clip_distance",
		name: "cinematic_set_far_clip_distance",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"real"
		],
		id: "cinematic_set_far_clip_distance"
	},
	{
		symbol: "render_atmosphere_fog",
		name: "render_atmosphere_fog",
		description: "Enable/disable atmosphere fog",
		arguments: [
			"boolean"
		],
		id: "render_atmosphere_fog"
	},
	{
		symbol: "motion_blur",
		name: "motion_blur",
		description: "Enable/disable motion blur",
		arguments: [
			"boolean"
		],
		id: "motion_blur"
	},
	{
		symbol: "render_weather",
		name: "render_weather",
		description: "Enable/disable atmosphere fog",
		arguments: [
			"boolean"
		],
		id: "render_weather"
	},
	{
		symbol: "render_patchy_fog",
		name: "render_patchy_fog",
		description: "Enable/disable patchy fog",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "render_patchy_fog"
	},
	{
		symbol: "cinematic_set_environment_map_attenuation",
		name: "cinematic_set_environment_map_attenuation",
		description: "Interpolates environment-map attenuation (on flagged shaders) from <low> to <high> over <time>",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "cinematic_set_environment_map_attenuation"
	},
	{
		symbol: "cinematic_set_environment_map_bitmap",
		name: "cinematic_set_environment_map_bitmap",
		description: "Sets environment-map bitmap (on flagged shaders) instantly",
		arguments: [
			"bitmap"
		],
		id: "cinematic_set_environment_map_bitmap"
	},
	{
		symbol: "cinematic_reset_environment_map_bitmap",
		name: "cinematic_reset_environment_map_bitmap",
		description: "Resets environment-map bitmap (on flagged shaders) to default instantly",
		arguments: [],
		id: "cinematic_reset_environment_map_bitmap"
	},
	{
		symbol: "cinematic_set_environment_map_tint",
		name: "cinematic_set_environment_map_tint",
		description: "Perpendicular color: (red green blue brightness), parallel color: (red green blue brightness)... sets environment-map tint (on flagged shaders) instantly",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "cinematic_set_environment_map_tint"
	},
	{
		symbol: "cinematic_reset_environment_map_tint",
		name: "cinematic_reset_environment_map_tint",
		description: "Resets environment-map tint (on flagged shaders) to default instantly",
		arguments: [],
		id: "cinematic_reset_environment_map_tint"
	},
	{
		symbol: "cinematic_layer",
		name: "cinematic_layer",
		description: "Interpolates the value of <cinematic layer x> from current position to <value> over <time>",
		arguments: [
			"long",
			"real",
			"real"
		],
		id: "cinematic_layer"
	},
	{
		symbol: "player_has_skills",
		name: "player_has_skills",
		description: "Are you the best?",
		arguments: [],
		returns: "boolean",
		id: "player_has_skills"
	},
	{
		symbol: "player_has_mad_secret_skills",
		name: "player_has_mad_secret_skills",
		description: "You are the best!",
		arguments: [
			"long"
		],
		id: "player_has_mad_secret_skills"
	},
	{
		symbol: "controller_invert_look",
		name: "controller_invert_look",
		description: "Invert look on all attached controllers",
		arguments: [],
		id: "controller_invert_look"
	},
	{
		symbol: "controller_look_speed",
		name: "controller_look_speed",
		description: "Set look speed for all attached controllers",
		arguments: [
			"short"
		],
		id: "controller_look_speed"
	},
	{
		symbol: "controller_set_look_invert",
		name: "controller_set_look_invert",
		description: "Invert player0's look",
		arguments: [
			"boolean"
		],
		id: "controller_set_look_invert"
	},
	{
		symbol: "controller_get_look_invert",
		name: "controller_get_look_invert",
		description: "Returns TRUE if player0's look pitch is inverted",
		arguments: [],
		returns: "boolean",
		id: "controller_get_look_invert"
	},
	{
		symbol: "user_interface_controller_get_last_level_played",
		name: "user_interface_controller_get_last_level_played",
		description: "Returns index of last completed solo level for profile index passed in",
		arguments: [
			"short"
		],
		returns: "long",
		id: "user_interface_controller_get_last_level_played"
	},
	{
		symbol: "controller_set_look_inverted",
		name: "controller_set_look_inverted",
		description: "Set look inversion for specified controller",
		arguments: [
			"controller",
			"boolean"
		],
		id: "controller_set_look_inverted"
	},
	{
		symbol: "controller_set_vibration_enabled",
		name: "controller_set_vibration_enabled",
		description: "Set vibration for specified controller",
		arguments: [
			"controller",
			"boolean"
		],
		id: "controller_set_vibration_enabled"
	},
	{
		symbol: "controller_set_flight_stick_aircraft_controls",
		name: "controller_set_flight_stick_aircraft_controls",
		description: "Set airrcraft flight stick controls for specified controller",
		arguments: [
			"controller",
			"boolean"
		],
		id: "controller_set_flight_stick_aircraft_controls"
	},
	{
		symbol: "controller_set_auto_center_look",
		name: "controller_set_auto_center_look",
		description: "Set auto center look for specified controller",
		arguments: [
			"controller",
			"boolean"
		],
		id: "controller_set_auto_center_look"
	},
	{
		symbol: "controller_set_crouch_lock",
		name: "controller_set_crouch_lock",
		description: "Set crouch lock for specified controller",
		arguments: [
			"controller",
			"boolean"
		],
		id: "controller_set_crouch_lock"
	},
	{
		symbol: "controller_set_button preset",
		name: "controller_set_button preset",
		description: "Set button preset for specified controller",
		arguments: [
			"controller",
			"button preset"
		],
		id: "controller_set_button preset"
	},
	{
		symbol: "controller_set_joystick preset",
		name: "controller_set_joystick preset",
		description: "Set joystick preset for specified controller",
		arguments: [
			"controller",
			"joystick preset"
		],
		id: "controller_set_joystick preset"
	},
	{
		symbol: "controller_set_look_sensitivity",
		name: "controller_set_look_sensitivity",
		description: "Set look sensitivity for specified controller",
		arguments: [
			"controller",
			"short"
		],
		id: "controller_set_look_sensitivity"
	},
	{
		symbol: "controller_unlock_single_player_levels",
		name: "controller_unlock_single_player_levels",
		description: "<controller> unlock all single player levels for specified controller",
		arguments: [
			"controller"
		],
		id: "controller_unlock_single_player_levels"
	},
	{
		symbol: "controller_lock_single_player_levels",
		name: "controller_lock_single_player_levels",
		description: "<controller> lock all single player levels for specified controller",
		arguments: [
			"controller"
		],
		id: "controller_lock_single_player_levels"
	},
	{
		symbol: "controller_unlock_skulls",
		name: "controller_unlock_skulls",
		description: "<controller> unlock all campaign skulls for specified controller",
		arguments: [
			"controller"
		],
		id: "controller_unlock_skulls"
	},
	{
		symbol: "controller_lock_skulls",
		name: "controller_lock_skulls",
		description: "<controller> lock all campaign skulls for specified controller",
		arguments: [
			"controller"
		],
		id: "controller_lock_skulls"
	},
	{
		symbol: "controller_unlock_models",
		name: "controller_unlock_models",
		description: "<controller> unlock all model permutations for specified controller",
		arguments: [
			"controller"
		],
		id: "controller_unlock_models"
	},
	{
		symbol: "controller_lock_models",
		name: "controller_lock_models",
		description: "<controller> lock all model permutations for specified controller",
		arguments: [
			"controller"
		],
		id: "controller_lock_models"
	},
	{
		symbol: "controller_set_single_player_level_completed",
		name: "controller_set_single_player_level_completed",
		description: "<controller> <level index> <co-op> <difficulty> <completed> set the single player levels completed state for specified controller",
		arguments: [
			"controller",
			"long",
			"boolean",
			"game_difficulty",
			"boolean"
		],
		id: "controller_set_single_player_level_completed"
	},
	{
		symbol: "controller_set_primary_change_color",
		name: "controller_set_primary_change_color",
		description: "Set primary change color for specified controller",
		arguments: [
			"controller",
			"player color"
		],
		id: "controller_set_primary_change_color"
	},
	{
		symbol: "controller_set_secondary_change_color",
		name: "controller_set_secondary_change_color",
		description: "Set secondary change color for specified controller",
		arguments: [
			"controller",
			"player color"
		],
		id: "controller_set_secondary_change_color"
	},
	{
		symbol: "controller_set_tertiary_change_color",
		name: "controller_set_tertiary_change_color",
		description: "Set tertiary color for specified controller",
		arguments: [
			"controller",
			"player color"
		],
		id: "controller_set_tertiary_change_color"
	},
	{
		symbol: "controller_set_primary_emblem_color",
		name: "controller_set_primary_emblem_color",
		description: "Set primary change color for specified controller",
		arguments: [
			"controller",
			"player color"
		],
		id: "controller_set_primary_emblem_color"
	},
	{
		symbol: "controller_set_secondary_emblem_color",
		name: "controller_set_secondary_emblem_color",
		description: "Set secondary change color for specified controller",
		arguments: [
			"controller",
			"player color"
		],
		id: "controller_set_secondary_emblem_color"
	},
	{
		symbol: "controller_set_background_emblem_color",
		name: "controller_set_background_emblem_color",
		description: "Set tertiary color for specified controller",
		arguments: [
			"controller",
			"player color"
		],
		id: "controller_set_background_emblem_color"
	},
	{
		symbol: "controller_set_player character type",
		name: "controller_set_player character type",
		description: "Set player character type for specified controller",
		arguments: [
			"controller",
			"player character type"
		],
		id: "controller_set_player character type"
	},
	{
		symbol: "controller_set_emblem_info",
		name: "controller_set_emblem_info",
		description: "Set emblem for specified controller",
		arguments: [
			"controller",
			"short",
			"short"
		],
		id: "controller_set_emblem_info"
	},
	{
		symbol: "controller_set_voice output setting",
		name: "controller_set_voice output setting",
		description: "Set voice output setting for specified controller",
		arguments: [
			"controller",
			"voice output setting"
		],
		id: "controller_set_voice output setting"
	},
	{
		symbol: "controller_set_voice mask",
		name: "controller_set_voice mask",
		description: "Set voice mask for specified controller",
		arguments: [
			"controller",
			"voice mask"
		],
		id: "controller_set_voice mask"
	},
	{
		symbol: "controller_set_subtitle setting",
		name: "controller_set_subtitle setting",
		description: "Set subtitle setting for specified controller",
		arguments: [
			"controller",
			"subtitle setting"
		],
		id: "controller_set_subtitle setting"
	},
	{
		symbol: "controller_set_unsignedin_user",
		name: "controller_set_unsignedin_user",
		description: "Toggle controller as unsigned-in user",
		arguments: [
			"controller",
			"boolean"
		],
		id: "controller_set_unsignedin_user"
	},
	{
		symbol: "controller_display_storage_device_selection",
		name: "controller_display_storage_device_selection",
		description: "Display storage device selection ui for the specified controller",
		arguments: [
			"controller"
		],
		id: "controller_display_storage_device_selection"
	},
	{
		symbol: "font_cache_bitmap_save",
		name: "font_cache_bitmap_save",
		description: "Save font cache bitmap to targa file",
		arguments: [
			"string"
		],
		id: "font_cache_bitmap_save"
	},
	{
		symbol: "ui_debug_load_main_menu",
		name: "ui_debug_load_main_menu",
		description: "Loads the main menu screen",
		arguments: [],
		id: "ui_debug_load_main_menu"
	},
	{
		symbol: "ui_debug_text_bounds",
		name: "ui_debug_text_bounds",
		description: "Toggle rendering of ui text boundaries",
		arguments: [
			"boolean"
		],
		id: "ui_debug_text_bounds"
	},
	{
		symbol: "ui_debug_text_font",
		name: "ui_debug_text_font",
		description: "Toggle display of ui text font",
		arguments: [
			"boolean"
		],
		id: "ui_debug_text_font"
	},
	{
		symbol: "ui_debug_show_title_safe_bounds",
		name: "ui_debug_show_title_safe_bounds",
		description: "Toggle display of title safe boundary",
		arguments: [
			"boolean"
		],
		id: "ui_debug_show_title_safe_bounds"
	},
	{
		symbol: "ui_debug_element_bounds",
		name: "ui_debug_element_bounds",
		description: "Toggle rendering of widget tag block bounds",
		arguments: [
			"boolean"
		],
		id: "ui_debug_element_bounds"
	},
	{
		symbol: "ui_memory_dump",
		name: "ui_memory_dump",
		description: "Dump the UI memory tracked allocations to a specified file",
		arguments: [
			"string"
		],
		id: "ui_memory_dump"
	},
	{
		symbol: "ui_time_scale_step",
		name: "ui_time_scale_step",
		description: "Move the ui time forward by a specified amount on next tick",
		arguments: [
			"real"
		],
		id: "ui_time_scale_step"
	},
	{
		symbol: "xoverlapped_debug_render",
		name: "xoverlapped_debug_render",
		description: "Toggle display a list of active xoverlapped tasks",
		arguments: [
			"boolean"
		],
		id: "xoverlapped_debug_render"
	},
	{
		symbol: "gui_load_screen",
		name: "gui_load_screen",
		description: "Load the named screen",
		arguments: [
			"string_id"
		],
		id: "gui_load_screen"
	},
	{
		symbol: "gui_reset",
		name: "gui_reset",
		description: "Cleans out the halox ui screens and errors",
		arguments: [],
		id: "gui_reset"
	},
	{
		symbol: "gui_start",
		name: "gui_start",
		description: "Tells the window location manager to resume",
		arguments: [],
		id: "gui_start"
	},
	{
		symbol: "gui_stop",
		name: "gui_stop",
		description: "Tells the window location manager to stop bringing up screens on its own",
		arguments: [],
		id: "gui_stop"
	},
	{
		symbol: "gui_error_post",
		name: "gui_error_post",
		description: "<error_code> <controller_index> <must_be_cleared> sets an error condition in the ui",
		arguments: [
			"string_id",
			"long",
			"boolean"
		],
		id: "gui_error_post"
	},
	{
		symbol: "gui_error_post_toast",
		name: "gui_error_post_toast",
		description: "<error_code> <controller_index> <must_be_cleared> sets an error condition in the ui",
		arguments: [
			"string_id",
			"long",
			"boolean"
		],
		id: "gui_error_post_toast"
	},
	{
		symbol: "gui_error_resolve",
		name: "gui_error_resolve",
		description: "<error_name> <controller_index> resolves an error condition in the ui",
		arguments: [
			"string_id",
			"long"
		],
		id: "gui_error_resolve"
	},
	{
		symbol: "gui_error_clear",
		name: "gui_error_clear",
		description: "<error_name> <controller_index> clears an error condition in the ui",
		arguments: [
			"string_id",
			"long"
		],
		id: "gui_error_clear"
	},
	{
		symbol: "gui_dialog_show",
		name: "gui_dialog_show",
		description: "<dialog name>",
		arguments: [
			"string_id"
		],
		id: "gui_dialog_show"
	},
	{
		symbol: "gui_spartan_milestone_show",
		name: "gui_spartan_milestone_show",
		description: "Show dialog for milestone upgrade (1..3)",
		arguments: [
			"short"
		],
		id: "gui_spartan_milestone_show"
	},
	{
		symbol: "gui_spartan_rank_show",
		name: "gui_spartan_rank_show",
		description: "Show toast for rank upgrade (1..36)",
		arguments: [
			"short"
		],
		id: "gui_spartan_rank_show"
	},
	{
		symbol: "gui_print_active_screens",
		name: "gui_print_active_screens",
		description: "Display list of active halox ui screens",
		arguments: [],
		id: "gui_print_active_screens"
	},
	{
		symbol: "gui_print_active_screen_strings",
		name: "gui_print_active_screen_strings",
		description: "Display strings tag file name for current topmost screen",
		arguments: [],
		id: "gui_print_active_screen_strings"
	},
	{
		symbol: "gui_debug_screen_name",
		name: "gui_debug_screen_name",
		description: "Toggle display of given screen's name, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_screen_name"
	},
	{
		symbol: "gui_debug_screen_animation",
		name: "gui_debug_screen_animation",
		description: "Toggle display of given screen animations, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_screen_animation"
	},
	{
		symbol: "gui_debug_screen_bounds",
		name: "gui_debug_screen_bounds",
		description: "Toggle display of given screen's bounds, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_screen_bounds"
	},
	{
		symbol: "gui_debug_screen_rotation",
		name: "gui_debug_screen_rotation",
		description: "Toggle display of given screen's rotation, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_screen_rotation"
	},
	{
		symbol: "gui_debug_group_name",
		name: "gui_debug_group_name",
		description: "Toggle display of given group's name, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_group_name"
	},
	{
		symbol: "gui_debug_group_animation",
		name: "gui_debug_group_animation",
		description: "Toggle display of given group's animations, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_group_animation"
	},
	{
		symbol: "gui_debug_group_bounds",
		name: "gui_debug_group_bounds",
		description: "Toggle display of given group's bounds, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_group_bounds"
	},
	{
		symbol: "gui_debug_group_rotation",
		name: "gui_debug_group_rotation",
		description: "Toggle display of given group's rotation, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_group_rotation"
	},
	{
		symbol: "gui_debug_list_name",
		name: "gui_debug_list_name",
		description: "Toggle display of given list's name, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_name"
	},
	{
		symbol: "gui_debug_list_animation",
		name: "gui_debug_list_animation",
		description: "Toggle display of given list's animations, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_animation"
	},
	{
		symbol: "gui_debug_list_bounds",
		name: "gui_debug_list_bounds",
		description: "Toggle display of given list's bounds, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_bounds"
	},
	{
		symbol: "gui_debug_list_rotation",
		name: "gui_debug_list_rotation",
		description: "Toggle display of given list's rotation, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_rotation"
	},
	{
		symbol: "gui_debug_list_item_name",
		name: "gui_debug_list_item_name",
		description: "Toggle display of given list item's name, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_item_name"
	},
	{
		symbol: "gui_debug_list_item_animation",
		name: "gui_debug_list_item_animation",
		description: "Toggle display of given list item's animation, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_item_animation"
	},
	{
		symbol: "gui_debug_list_item_bounds",
		name: "gui_debug_list_item_bounds",
		description: "Toggle display of given list item's bounds, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_item_bounds"
	},
	{
		symbol: "gui_debug_list_item_rotation",
		name: "gui_debug_list_item_rotation",
		description: "Toggle display of given list item's rotation, optionally recursive",
		arguments: [
			"string_id",
			"boolean",
			"boolean"
		],
		id: "gui_debug_list_item_rotation"
	},
	{
		symbol: "gui_debug_text_name",
		name: "gui_debug_text_name",
		description: "Toggle display of given text widget's name",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_text_name"
	},
	{
		symbol: "gui_debug_text_animation",
		name: "gui_debug_text_animation",
		description: "Toggle display of given text widget's animation state",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_text_animation"
	},
	{
		symbol: "gui_debug_text_bounds",
		name: "gui_debug_text_bounds",
		description: "Toggle display of given text widget's bounds",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_text_bounds"
	},
	{
		symbol: "gui_debug_text_rotation",
		name: "gui_debug_text_rotation",
		description: "Toggle display of given text widget's rotation",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_text_rotation"
	},
	{
		symbol: "gui_debug_bitmap_name",
		name: "gui_debug_bitmap_name",
		description: "Toggle display of given bitmap widget's name",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_bitmap_name"
	},
	{
		symbol: "gui_debug_bitmap_animation",
		name: "gui_debug_bitmap_animation",
		description: "Toggle display of given bitmap widget's animation state",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_bitmap_animation"
	},
	{
		symbol: "gui_debug_bitmap_bounds",
		name: "gui_debug_bitmap_bounds",
		description: "Toggle display of given bitmap widget's bounds",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_bitmap_bounds"
	},
	{
		symbol: "gui_debug_bitmap_rotation",
		name: "gui_debug_bitmap_rotation",
		description: "Toggle display of given bitmap widget's rotation",
		arguments: [
			"string_id",
			"boolean"
		],
		id: "gui_debug_bitmap_rotation"
	},
	{
		symbol: "gui_debug_music_state",
		name: "gui_debug_music_state",
		description: "Toggle display of UI music state",
		arguments: [
			"boolean"
		],
		id: "gui_debug_music_state"
	},
	{
		symbol: "cc_enable",
		name: "cc_enable",
		description: "Toggle closed captions",
		arguments: [
			"boolean"
		],
		id: "cc_enable"
	},
	{
		symbol: "cc_test",
		name: "cc_test",
		description: "Test a line of cc text",
		arguments: [
			"boolean"
		],
		id: "cc_test"
	},
	{
		symbol: "objectives_clear",
		name: "objectives_clear",
		description: "Clears the mission objectives.",
		arguments: [],
		id: "objectives_clear"
	},
	{
		symbol: "objectives_show_up_to",
		name: "objectives_show_up_to",
		description: "Show primary campaign objectives 0..n",
		arguments: [
			"long"
		],
		id: "objectives_show_up_to"
	},
	{
		symbol: "objectives_finish_up_to",
		name: "objectives_finish_up_to",
		description: "Mark primary campaign objectives 0..n as complete",
		arguments: [
			"long"
		],
		id: "objectives_finish_up_to"
	},
	{
		symbol: "objectives_secondary_show",
		name: "objectives_secondary_show",
		description: "Show secondary campaign objective N",
		arguments: [
			"long"
		],
		id: "objectives_secondary_show"
	},
	{
		symbol: "objectives_secondary_finish",
		name: "objectives_secondary_finish",
		description: "Mark secondary campaign objective N as complete",
		arguments: [
			"long"
		],
		id: "objectives_secondary_finish"
	},
	{
		symbol: "objectives_secondary_unavailable",
		name: "objectives_secondary_unavailable",
		description: "Mark secondary campaign objective N as unavailable",
		arguments: [
			"long"
		],
		id: "objectives_secondary_unavailable"
	},
	{
		symbol: "input_suppress_rumble",
		name: "input_suppress_rumble",
		description: "Disable the friggin' rumble",
		arguments: [
			"boolean"
		],
		id: "input_suppress_rumble"
	},
	{
		symbol: "input_disable_claw_button_combos",
		name: "input_disable_claw_button_combos",
		description: "Disabe the Claw button combos (for monkey testing)",
		arguments: [
			"boolean"
		],
		id: "input_disable_claw_button_combos"
	},
	{
		symbol: "update_remote_camera",
		name: "update_remote_camera",
		description: "Force synchronization of remote machine camera",
		arguments: [],
		id: "update_remote_camera"
	},
	{
		symbol: "net_build_network_config",
		name: "net_build_network_config",
		description: "Writes a new network configuration file",
		arguments: [],
		id: "net_build_network_config"
	},
	{
		symbol: "net_build_game_variant",
		name: "net_build_game_variant",
		description: "Writes the current game variant to a file",
		arguments: [
			"string"
		],
		id: "net_build_game_variant"
	},
	{
		symbol: "net_verify_game_variant",
		name: "net_verify_game_variant",
		description: "Verifies the contents of a packed game variant file",
		arguments: [
			"string"
		],
		id: "net_verify_game_variant"
	},
	{
		symbol: "net_load_and_use_game_variant",
		name: "net_load_and_use_game_variant",
		description: "Loads the contents of a packed game variant file and submits to networking for use in the current game",
		arguments: [
			"string"
		],
		id: "net_load_and_use_game_variant"
	},
	{
		symbol: "net_use_hopper_directory",
		name: "net_use_hopper_directory",
		description: "Set which hopper directory to use",
		arguments: [
			"string"
		],
		id: "net_use_hopper_directory"
	},
	{
		symbol: "net_quality_dump",
		name: "net_quality_dump",
		description: "Dump all network quality statistics",
		arguments: [],
		id: "net_quality_dump"
	},
	{
		symbol: "net_quality_clear",
		name: "net_quality_clear",
		description: "Clear all network quality statistics",
		arguments: [],
		id: "net_quality_clear"
	},
	{
		symbol: "net_quality_set_connection_badness_history",
		name: "net_quality_set_connection_badness_history",
		description: "Set connection history, true/false, # of bits to set",
		arguments: [
			"boolean",
			"short"
		],
		id: "net_quality_set_connection_badness_history"
	},
	{
		symbol: "net_quality_set_squad_host_badness_history",
		name: "net_quality_set_squad_host_badness_history",
		description: "Set host badness history, true/false, # of bits to set",
		arguments: [
			"boolean",
			"short"
		],
		id: "net_quality_set_squad_host_badness_history"
	},
	{
		symbol: "net_quality_set_squad_client_badness_history",
		name: "net_quality_set_squad_client_badness_history",
		description: "Set client badness history, true/false, # of bits to set",
		arguments: [
			"boolean",
			"short"
		],
		id: "net_quality_set_squad_client_badness_history"
	},
	{
		symbol: "net_quality_set_group_host_badness_history",
		name: "net_quality_set_group_host_badness_history",
		description: "Set host badness history, true/false, # of bits to set",
		arguments: [
			"boolean",
			"short"
		],
		id: "net_quality_set_group_host_badness_history"
	},
	{
		symbol: "net_quality_set_group_client_badness_history",
		name: "net_quality_set_group_client_badness_history",
		description: "Set client badness history, true/false, # of bits to set",
		arguments: [
			"boolean",
			"short"
		],
		id: "net_quality_set_group_client_badness_history"
	},
	{
		symbol: "net_quality_set_estimated_bandwidth",
		name: "net_quality_set_estimated_bandwidth",
		description: "Set upstream bandwidth history, <is reliable> <bandwidth in kbps>",
		arguments: [
			"boolean",
			"long"
		],
		id: "net_quality_set_estimated_bandwidth"
	},
	{
		symbol: "net_join_friend",
		name: "net_join_friend",
		description: "Join a friend's squad session, 'none' to cancel a previous join",
		arguments: [
			"string"
		],
		id: "net_join_friend"
	},
	{
		symbol: "net_join_squad_to_friend",
		name: "net_join_squad_to_friend",
		description: "Join our squad to a friend's squad session, 'none' to cancel a previous join",
		arguments: [
			"string"
		],
		id: "net_join_squad_to_friend"
	},
	{
		symbol: "net_join_sessionid",
		name: "net_join_sessionid",
		description: "Join a squad session by sessionid, 'none' to cancel a previous join",
		arguments: [
			"string"
		],
		id: "net_join_sessionid"
	},
	{
		symbol: "net_join_squad_to_sessionid",
		name: "net_join_squad_to_sessionid",
		description: "Join a squad session by sessionid, 'none' to cancel a previous join",
		arguments: [
			"string"
		],
		id: "net_join_squad_to_sessionid"
	},
	{
		symbol: "net_enable_join_friend_loop",
		name: "net_enable_join_friend_loop",
		description: "Randomly join a friend every <param> seconds, 0 to reset",
		arguments: [
			"long"
		],
		id: "net_enable_join_friend_loop"
	},
	{
		symbol: "net_set_maximum_player_count",
		name: "net_set_maximum_player_count",
		description: "Sets the maximum player count for this squad",
		arguments: [
			"long"
		],
		id: "net_set_maximum_player_count"
	},
	{
		symbol: "net_status_filter",
		name: "net_status_filter",
		description: "Filters the set of network status to display",
		arguments: [
			"string"
		],
		id: "net_status_filter"
	},
	{
		symbol: "net_sim_reset",
		name: "net_sim_reset",
		description: "Network simulation: resets the simulation state",
		arguments: [],
		id: "net_sim_reset"
	},
	{
		symbol: "net_sim_spike_now",
		name: "net_sim_spike_now",
		description: "Network simulation: starts a latency spike immediately",
		arguments: [],
		id: "net_sim_spike_now"
	},
	{
		symbol: "net_sim_dropspike_now",
		name: "net_sim_dropspike_now",
		description: "Network simulation: starts a packet loss spike immediately",
		arguments: [],
		id: "net_sim_dropspike_now"
	},
	{
		symbol: "net_test_ping",
		name: "net_test_ping",
		description: "Network test: sends a ping",
		arguments: [],
		id: "net_test_ping"
	},
	{
		symbol: "net_test_channel_delete",
		name: "net_test_channel_delete",
		description: "Network test: deletes all channels",
		arguments: [],
		id: "net_test_channel_delete"
	},
	{
		symbol: "net_test_delegate_host",
		name: "net_test_delegate_host",
		description: "Network test: delegate host to the specified player",
		arguments: [
			"long"
		],
		id: "net_test_delegate_host"
	},
	{
		symbol: "net_test_delegate_leader",
		name: "net_test_delegate_leader",
		description: "Network test: delegate leadership to the specified player",
		arguments: [
			"long"
		],
		id: "net_test_delegate_leader"
	},
	{
		symbol: "net_test_map_name",
		name: "net_test_map_name",
		description: "Network test: sets the name of the scenario to play",
		arguments: [
			"string"
		],
		id: "net_test_map_name"
	},
	{
		symbol: "net_test_variant",
		name: "net_test_variant",
		description: "Network test: sets the game variant to play",
		arguments: [
			"string"
		],
		id: "net_test_variant"
	},
	{
		symbol: "net_test_campaign_difficulty",
		name: "net_test_campaign_difficulty",
		description: "Network test: sets the difficulty of the campaign game to play",
		arguments: [
			"short"
		],
		id: "net_test_campaign_difficulty"
	},
	{
		symbol: "net_test_player color",
		name: "net_test_player color",
		description: "Network test: temporarily sets the color for all local players",
		arguments: [
			"long"
		],
		id: "net_test_player color"
	},
	{
		symbol: "net_test_reset_objects",
		name: "net_test_reset_objects",
		description: "Network test: resets all objects on the map",
		arguments: [],
		id: "net_test_reset_objects"
	},
	{
		symbol: "net_test_fatal_error",
		name: "net_test_fatal_error",
		description: "Creates a fatal simulation error",
		arguments: [],
		id: "net_test_fatal_error"
	},
	{
		symbol: "net_set_machine_name",
		name: "net_set_machine_name",
		description: "Sets the nickname of your xbox",
		arguments: [
			"string"
		],
		id: "net_set_machine_name"
	},
	{
		symbol: "events_enabled",
		name: "events_enabled",
		description: "Enable/disable all events",
		arguments: [
			"boolean"
		],
		id: "events_enabled"
	},
	{
		symbol: "events_disable_suppression",
		name: "events_disable_suppression",
		description: "Enable/disable event suppression",
		arguments: [
			"boolean"
		],
		id: "events_disable_suppression"
	},
	{
		symbol: "event_global_display_category",
		name: "event_global_display_category",
		description: "Sets the global event display level",
		arguments: [
			"event"
		],
		id: "event_global_display_category"
	},
	{
		symbol: "event_global_log_category",
		name: "event_global_log_category",
		description: "Sets the global evetn log level",
		arguments: [
			"event"
		],
		id: "event_global_log_category"
	},
	{
		symbol: "event_global_remote_log_category",
		name: "event_global_remote_log_category",
		description: "Sets the global remote evetn log level",
		arguments: [
			"event"
		],
		id: "event_global_remote_log_category"
	},
	{
		symbol: "event_display_category",
		name: "event_display_category",
		description: "Sets the display level for a named category of network events",
		arguments: [
			"string",
			"event"
		],
		id: "event_display_category"
	},
	{
		symbol: "event_force_display_category",
		name: "event_force_display_category",
		description: "Sets the forced display level for a named category of network events",
		arguments: [
			"string",
			"event"
		],
		id: "event_force_display_category"
	},
	{
		symbol: "event_log_category",
		name: "event_log_category",
		description: "Sets the log level for a named category of network events",
		arguments: [
			"string",
			"event"
		],
		id: "event_log_category"
	},
	{
		symbol: "event_remote_log_category",
		name: "event_remote_log_category",
		description: "Sets the remote log level for a named category of network events",
		arguments: [
			"string",
			"event"
		],
		id: "event_remote_log_category"
	},
	{
		symbol: "event_debugger_break_category",
		name: "event_debugger_break_category",
		description: "Sets the debugger break level for a named category of network events",
		arguments: [
			"string",
			"event"
		],
		id: "event_debugger_break_category"
	},
	{
		symbol: "event_halt_category",
		name: "event_halt_category",
		description: "Sets the halt (assert/crash) level for a named category of network events",
		arguments: [
			"string",
			"event"
		],
		id: "event_halt_category"
	},
	{
		symbol: "event_list_categories",
		name: "event_list_categories",
		description: "Lists all categories that exist under a particular category string",
		arguments: [
			"string"
		],
		id: "event_list_categories"
	},
	{
		symbol: "events_suppress_console_display",
		name: "events_suppress_console_display",
		description: "Disables console display for events",
		arguments: [
			"boolean"
		],
		id: "events_suppress_console_display"
	},
	{
		symbol: "play_bink_movie",
		name: "play_bink_movie",
		description: "Um...",
		arguments: [
			"string"
		],
		id: "play_bink_movie"
	},
	{
		symbol: "play_bink_movie_from_tag",
		name: "play_bink_movie_from_tag",
		description: "Play a bink movie from a tag",
		arguments: [
			"bink definition"
		],
		id: "play_bink_movie_from_tag"
	},
	{
		symbol: "play_credits_skip_to_menu",
		name: "play_credits_skip_to_menu",
		description: "Plays credits movie, pressing any button will stop credits and launch main menu",
		arguments: [],
		id: "play_credits_skip_to_menu"
	},
	{
		symbol: "bink_time",
		name: "bink_time",
		description: "Uh...",
		arguments: [],
		id: "bink_time"
	},
	{
		symbol: "set_global_doppler_factor",
		name: "set_global_doppler_factor",
		description: "New doppler factor: <real>",
		arguments: [
			"real"
		],
		id: "set_global_doppler_factor"
	},
	{
		symbol: "set_global_mixbin_headroom",
		name: "set_global_mixbin_headroom",
		description: "Blah",
		arguments: [
			"long",
			"long"
		],
		id: "set_global_mixbin_headroom"
	},
	{
		symbol: "debug_sound_environment_source_parameter",
		name: "debug_sound_environment_source_parameter",
		description: "Blah",
		arguments: [
			"long",
			"real"
		],
		id: "debug_sound_environment_source_parameter"
	},
	{
		symbol: "data_mine_set_mission_segment",
		name: "data_mine_set_mission_segment",
		description: "Sets the mission segment for single player data mine events",
		arguments: [
			"string"
		],
		id: "data_mine_set_mission_segment"
	},
	{
		symbol: "data_mine_insert",
		name: "data_mine_insert",
		description: "Insert text and camera position in the data mine",
		arguments: [
			"string"
		],
		id: "data_mine_insert"
	},
	{
		symbol: "data_mine_upload",
		name: "data_mine_upload",
		description: "Upload all data mining data files to debug server",
		arguments: [],
		id: "data_mine_upload"
	},
	{
		symbol: "data_mine_enable",
		name: "data_mine_enable",
		description: "Enable/disable data mining",
		arguments: [
			"boolean"
		],
		id: "data_mine_enable"
	},
	{
		symbol: "data_mine_flush",
		name: "data_mine_flush",
		description: "Flush any pending data mine data to disk",
		arguments: [],
		id: "data_mine_flush"
	},
	{
		symbol: "data_mine_debug_menu_setting",
		name: "data_mine_debug_menu_setting",
		description: "Close debug menu and set user experience setting to string",
		arguments: [
			"string"
		],
		id: "data_mine_debug_menu_setting"
	},
	{
		symbol: "data_mine_open_debug_menu",
		name: "data_mine_open_debug_menu",
		description: "Open debug menu",
		arguments: [],
		id: "data_mine_open_debug_menu"
	},
	{
		symbol: "data_mine_set_display_mission_segment",
		name: "data_mine_set_display_mission_segment",
		description: "Toggle display of data mine mission segment",
		arguments: [
			"boolean"
		],
		id: "data_mine_set_display_mission_segment"
	},
	{
		symbol: "test_memory_allocators",
		name: "test_memory_allocators",
		description: "Performs tests on different memory allocators",
		arguments: [
			"long",
			"short",
			"short",
			"short",
			"long"
		],
		id: "test_memory_allocators"
	},
	{
		symbol: "test_memory_allocators",
		name: "test_memory_allocators",
		description: "Performs tests on different memory allocators and saves the results",
		arguments: [
			"long",
			"short",
			"short",
			"short",
			"long",
			"string"
		],
		id: "test_memory_allocators1"
	},
	{
		symbol: "display_video_standard",
		name: "display_video_standard",
		description: "Displays the video standard the game is in",
		arguments: [],
		id: "display_video_standard"
	},
	{
		symbol: "test_xcr_monkey_enable",
		name: "test_xcr_monkey_enable",
		description: "Enable/disable controller monkeys for all in game players",
		arguments: [
			"boolean"
		],
		id: "test_xcr_monkey_enable"
	},
	{
		symbol: "test_show_guide_status",
		name: "test_show_guide_status",
		description: "Prints the guide status as automation events.",
		arguments: [],
		id: "test_show_guide_status"
	},
	{
		symbol: "test_show_users_xuids",
		name: "test_show_users_xuids",
		description: "Prints the signed in users' xuids as automation events.",
		arguments: [],
		id: "test_show_users_xuids"
	},
	{
		symbol: "test_show_are_users_friends",
		name: "test_show_are_users_friends",
		description: "Prints whether the current controller and specified xuid are friends as automation events",
		arguments: [
			"long",
			"string"
		],
		id: "test_show_are_users_friends"
	},
	{
		symbol: "test_invite_friend",
		name: "test_invite_friend",
		description: "Shows the guide send friend invite ui from the current controller to the specified xuid",
		arguments: [
			"long",
			"string"
		],
		id: "test_invite_friend"
	},
	{
		symbol: "test_get_squad_session_id",
		name: "test_get_squad_session_id",
		description: "Get the current squad session id",
		arguments: [],
		id: "test_get_squad_session_id"
	},
	{
		symbol: "test_auto_get_screens",
		name: "test_auto_get_screens",
		description: "<arbitrary int> list the current gui screens",
		arguments: [
			"long"
		],
		id: "test_auto_get_screens"
	},
	{
		symbol: "test_auto_get_screen_widgets",
		name: "test_auto_get_screen_widgets",
		description: "<arbitrary int> <screen index> lists widgets in a screen",
		arguments: [
			"long",
			"long"
		],
		id: "test_auto_get_screen_widgets"
	},
	{
		symbol: "test_auto_screen_get_datasources",
		name: "test_auto_screen_get_datasources",
		description: "<arbitrary int> <screen index> lists screen datasources",
		arguments: [
			"long",
			"long"
		],
		id: "test_auto_screen_get_datasources"
	},
	{
		symbol: "test_auto_screen_get_data_columns",
		name: "test_auto_screen_get_data_columns",
		description: "<arbitrary int> <screen index> <datasource string id> lists columns that make up this datasource",
		arguments: [
			"long",
			"long",
			"string_id"
		],
		id: "test_auto_screen_get_data_columns"
	},
	{
		symbol: "test_auto_screen_get_data",
		name: "test_auto_screen_get_data",
		description: "<arbitrary int> <screen index> <datasource string id> <datasource column string id> lists data from a datasource",
		arguments: [
			"long",
			"long",
			"string_id",
			"string_id"
		],
		id: "test_auto_screen_get_data"
	},
	{
		symbol: "test_auto_screen_invoke_list_item_by_name",
		name: "test_auto_screen_invoke_list_item_by_name",
		description: "<arbitrary int> <screen index> <list string id> <datasource column string id> <column value string id> triggers the list item who's column's value matches the specified one",
		arguments: [
			"long",
			"long",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "test_auto_screen_invoke_list_item_by_name"
	},
	{
		symbol: "test_auto_screen_invoke_list_item_by_text",
		name: "test_auto_screen_invoke_list_item_by_text",
		description: "<arbitrary int> <screen index> <list string id> <datasource column string id> <column value string id> triggers the list item who's column's value matches the specified one",
		arguments: [
			"long",
			"long",
			"string_id",
			"string_id",
			"string"
		],
		id: "test_auto_screen_invoke_list_item_by_text"
	},
	{
		symbol: "test_auto_screen_invoke_list_item_by_handle",
		name: "test_auto_screen_invoke_list_item_by_handle",
		description: "<arbitrary int> <screen index> <list string id> <element handle> triggers the list item specified by the element handle",
		arguments: [
			"long",
			"long",
			"string_id",
			"long"
		],
		id: "test_auto_screen_invoke_list_item_by_handle"
	},
	{
		symbol: "test_auto_screen_send_button_press",
		name: "test_auto_screen_send_button_press",
		description: "<arbitrary int> <screen index> <button name> sends the button press to the screen",
		arguments: [
			"long",
			"long",
			"string"
		],
		id: "test_auto_screen_send_button_press"
	},
	{
		symbol: "test_download_storage_file",
		name: "test_download_storage_file",
		description: "<url> <filename> downloads a file from LSP to the client",
		arguments: [
			"string",
			"string"
		],
		id: "test_download_storage_file"
	},
	{
		symbol: "test_game_results_save_to_file",
		name: "test_game_results_save_to_file",
		description: "<filename> save game results to a file.",
		arguments: [
			"string"
		],
		id: "test_game_results_save_to_file"
	},
	{
		symbol: "test_game_results_load_from_file",
		name: "test_game_results_load_from_file",
		description: "<filename> load game results into memory for use in the carnage report.  the format may change build to build causing this to fail or weird results to come up.",
		arguments: [
			"string"
		],
		id: "test_game_results_load_from_file"
	},
	{
		symbol: "test_roster_save_to_file",
		name: "test_roster_save_to_file",
		description: "<filename> save roster to a file.",
		arguments: [
			"string"
		],
		id: "test_roster_save_to_file"
	},
	{
		symbol: "test_roster_load_from_file",
		name: "test_roster_load_from_file",
		description: "<filename> load roster into memory.  the format may change build to build causing this to fail or weird results to come up.",
		arguments: [
			"string"
		],
		id: "test_roster_load_from_file"
	},
	{
		symbol: "test_fragment_utility_drive",
		name: "test_fragment_utility_drive",
		description: "<file_count> <growth_repetitions> <growth_size> writes files of varying sizes to the utiltiy drive in an effort to fragment it really badly",
		arguments: [
			"long",
			"long",
			"long"
		],
		id: "test_fragment_utility_drive"
	},
	{
		symbol: "clear_webcache",
		name: "clear_webcache",
		description: "Clears the webcache",
		arguments: [],
		id: "clear_webcache"
	},
	{
		symbol: "force_manifest_redownload",
		name: "force_manifest_redownload",
		description: "Redownload the online storage manifest",
		arguments: [],
		id: "force_manifest_redownload"
	},
	{
		symbol: "online_files_retry",
		name: "online_files_retry",
		description: "Tell the upload queue to start up again after a failure",
		arguments: [],
		id: "online_files_retry"
	},
	{
		symbol: "online_files_upload",
		name: "online_files_upload",
		description: "<filename> <slot_index> enqueues the specified filename for upload",
		arguments: [
			"string",
			"long"
		],
		id: "online_files_upload"
	},
	{
		symbol: "online_files_throttle_bandwidth",
		name: "online_files_throttle_bandwidth",
		description: "<bytes per second> sets the maximum bandwidth that online_files can use",
		arguments: [
			"long"
		],
		id: "online_files_throttle_bandwidth"
	},
	{
		symbol: "online_marketplace_refresh",
		name: "online_marketplace_refresh",
		description: "Tells the marketplace manager to take another look at signed in users",
		arguments: [],
		id: "online_marketplace_refresh"
	},
	{
		symbol: "webstats_disable",
		name: "webstats_disable",
		description: "Disables webstats",
		arguments: [
			"boolean"
		],
		id: "webstats_disable"
	},
	{
		symbol: "webstats_test_submit",
		name: "webstats_test_submit",
		description: "Submits a string to webstats upload",
		arguments: [
			"string"
		],
		id: "webstats_test_submit"
	},
	{
		symbol: "webstats_test_submit_multiplayer",
		name: "webstats_test_submit_multiplayer",
		description: "Submits a test multiplayer blob to webstats",
		arguments: [],
		id: "webstats_test_submit_multiplayer"
	},
	{
		symbol: "webstats_test_submit_campaign",
		name: "webstats_test_submit_campaign",
		description: "Submits a test campaign blob to webstats",
		arguments: [],
		id: "webstats_test_submit_campaign"
	},
	{
		symbol: "webstats_throttle_bandwidth",
		name: "webstats_throttle_bandwidth",
		description: "<bytes per second> sets the maximum bandwidth that webstats can use",
		arguments: [
			"long"
		],
		id: "webstats_throttle_bandwidth"
	},
	{
		symbol: "netdebug_prefer_internet",
		name: "netdebug_prefer_internet",
		description: "Hints to the netdebug code that that we're on the internet",
		arguments: [
			"boolean"
		],
		id: "netdebug_prefer_internet"
	},
	{
		symbol: "flag_new",
		name: "flag_new",
		description: "<name> <description>",
		arguments: [
			"string",
			"string"
		],
		id: "flag_new"
	},
	{
		symbol: "flag_new_at_look",
		name: "flag_new_at_look",
		description: "<name> <description>",
		arguments: [
			"string",
			"string"
		],
		id: "flag_new_at_look"
	},
	{
		symbol: "flags_clear",
		name: "flags_clear",
		description: "Erases all comment flags when not in editor (sapien)",
		arguments: [],
		id: "flags_clear"
	},
	{
		symbol: "flags_default_name",
		name: "flags_default_name",
		description: "<default comment flag name>",
		arguments: [
			"string"
		],
		id: "flags_default_name"
	},
	{
		symbol: "flags_default_comment",
		name: "flags_default_comment",
		description: "<default comment flag description>",
		arguments: [
			"string"
		],
		id: "flags_default_comment"
	},
	{
		symbol: "flags_set_filter",
		name: "flags_set_filter",
		description: "<flag name filter>",
		arguments: [
			"string"
		],
		id: "flags_set_filter"
	},
	{
		symbol: "bug_now",
		name: "bug_now",
		description: "Uploads files for bug <name>",
		arguments: [
			"string"
		],
		id: "bug_now"
	},
	{
		symbol: "bug_now_lite",
		name: "bug_now_lite",
		description: "Uploads files (w/ no minidump) for bug <name>",
		arguments: [
			"string"
		],
		id: "bug_now_lite"
	},
	{
		symbol: "bug_now_auto",
		name: "bug_now_auto",
		description: "Uploads bug files, auto named <include_minidump>",
		arguments: [
			"boolean"
		],
		id: "bug_now_auto"
	},
	{
		symbol: "object_list_children",
		name: "object_list_children",
		description: "Returns list of child objects by definition.",
		arguments: [
			"object",
			"object_definition"
		],
		returns: "object_list",
		id: "object_list_children"
	},
	{
		symbol: "voice_set_outgoing_channel_count",
		name: "voice_set_outgoing_channel_count",
		description: "Sets the outgoing channel count <in-game> <out-of-game>",
		arguments: [
			"long",
			"long"
		],
		id: "voice_set_outgoing_channel_count"
	},
	{
		symbol: "voice_set_voice_repeater_peer_index",
		name: "voice_set_voice_repeater_peer_index",
		description: "Sets the repeater peer index",
		arguments: [
			"long"
		],
		id: "voice_set_voice_repeater_peer_index"
	},
	{
		symbol: "voice_set_mute",
		name: "voice_set_mute",
		description: "Mute a player",
		arguments: [
			"long",
			"long",
			"boolean"
		],
		id: "voice_set_mute"
	},
	{
		symbol: "net_leaderboard_clear_hopper",
		name: "net_leaderboard_clear_hopper",
		description: "<user index> clears the hopper stats for the user",
		arguments: [
			"long"
		],
		id: "net_leaderboard_clear_hopper"
	},
	{
		symbol: "net_leaderboard_clear_global_arbitrated",
		name: "net_leaderboard_clear_global_arbitrated",
		description: "<user index> clears the global arbitrated stats for the user",
		arguments: [
			"long"
		],
		id: "net_leaderboard_clear_global_arbitrated"
	},
	{
		symbol: "net_leaderboard_clear_global_unarbitrated",
		name: "net_leaderboard_clear_global_unarbitrated",
		description: "<user index> clears the global unarbitrated stats for the user",
		arguments: [
			"long"
		],
		id: "net_leaderboard_clear_global_unarbitrated"
	},
	{
		symbol: "net_leaderboard_refresh",
		name: "net_leaderboard_refresh",
		description: "<user index> refreshes stats for everybody in the session",
		arguments: [],
		id: "net_leaderboard_refresh"
	},
	{
		symbol: "dump_loaded_tags",
		name: "dump_loaded_tags",
		description: "Dump a list of open tags to <map_name>_tags.txt",
		arguments: [],
		id: "dump_loaded_tags"
	},
	{
		symbol: "interpolator_start",
		name: "interpolator_start",
		description: "<name> <final value> <time>",
		arguments: [
			"string_id",
			"real",
			"real"
		],
		returns: "long",
		id: "interpolator_start"
	},
	{
		symbol: "interpolator_start_smooth",
		name: "interpolator_start_smooth",
		description: "<name> <final value> <time>",
		arguments: [
			"string_id",
			"real",
			"real"
		],
		returns: "long",
		id: "interpolator_start_smooth"
	},
	{
		symbol: "interpolator_stop",
		name: "interpolator_stop",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "long",
		id: "interpolator_stop"
	},
	{
		symbol: "interpolator_restart",
		name: "interpolator_restart",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "long",
		id: "interpolator_restart"
	},
	{
		symbol: "interpolator_is_active",
		name: "interpolator_is_active",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "boolean",
		id: "interpolator_is_active"
	},
	{
		symbol: "interpolator_is_finished",
		name: "interpolator_is_finished",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "boolean",
		id: "interpolator_is_finished"
	},
	{
		symbol: "interpolator_set_current_value",
		name: "interpolator_set_current_value",
		description: "<name> <current value>",
		arguments: [
			"string_id",
			"real"
		],
		returns: "long",
		id: "interpolator_set_current_value"
	},
	{
		symbol: "interpolator_get_current_value",
		name: "interpolator_get_current_value",
		description: "<name> <use function ON/OFF>",
		arguments: [
			"string_id",
			"boolean"
		],
		returns: "real",
		id: "interpolator_get_current_value"
	},
	{
		symbol: "interpolator_get_start_value",
		name: "interpolator_get_start_value",
		description: "<name> <use function ON/OFF>",
		arguments: [
			"string_id",
			"boolean"
		],
		returns: "real",
		id: "interpolator_get_start_value"
	},
	{
		symbol: "interpolator_get_final_value",
		name: "interpolator_get_final_value",
		description: "<name> <use function ON/OFF>",
		arguments: [
			"string_id",
			"boolean"
		],
		returns: "real",
		id: "interpolator_get_final_value"
	},
	{
		symbol: "interpolator_get_current_phase",
		name: "interpolator_get_current_phase",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "real",
		id: "interpolator_get_current_phase"
	},
	{
		symbol: "interpolator_get_current_time_fraction",
		name: "interpolator_get_current_time_fraction",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "real",
		id: "interpolator_get_current_time_fraction"
	},
	{
		symbol: "interpolator_get_start_time",
		name: "interpolator_get_start_time",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "real",
		id: "interpolator_get_start_time"
	},
	{
		symbol: "interpolator_get_final_time",
		name: "interpolator_get_final_time",
		description: "<name>",
		arguments: [
			"string_id"
		],
		returns: "real",
		id: "interpolator_get_final_time"
	},
	{
		symbol: "interpolator_evaluate_at",
		name: "interpolator_evaluate_at",
		description: "<name> <value in> <use function ON/OFF>",
		arguments: [
			"string_id",
			"real",
			"boolean"
		],
		returns: "real",
		id: "interpolator_evaluate_at"
	},
	{
		symbol: "interpolator_evaluate_at_time_fraction",
		name: "interpolator_evaluate_at_time_fraction",
		description: "<name> <time fraction in> <use function ON/OFF>",
		arguments: [
			"string_id",
			"real",
			"boolean"
		],
		returns: "real",
		id: "interpolator_evaluate_at_time_fraction"
	},
	{
		symbol: "interpolator_evaluate_at_time",
		name: "interpolator_evaluate_at_time",
		description: "<name> <time in> <use function ON/OFF>",
		arguments: [
			"string_id",
			"real",
			"boolean"
		],
		returns: "real",
		id: "interpolator_evaluate_at_time"
	},
	{
		symbol: "interpolator_evaluate_at_time_delta",
		name: "interpolator_evaluate_at_time_delta",
		description: "<name> <time delta> <use function ON/OFF>",
		arguments: [
			"string_id",
			"real",
			"boolean"
		],
		returns: "real",
		id: "interpolator_evaluate_at_time_delta"
	},
	{
		symbol: "interpolator_stop_all",
		name: "interpolator_stop_all",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "interpolator_stop_all"
	},
	{
		symbol: "interpolator_restart_all",
		name: "interpolator_restart_all",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "interpolator_restart_all"
	},
	{
		symbol: "interpolator_flip",
		name: "interpolator_flip",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "interpolator_flip"
	},
	{
		symbol: "set_pc_runtime_language",
		name: "set_pc_runtime_language",
		description: "Sets the pc language from a string",
		arguments: [
			"string"
		],
		id: "set_pc_runtime_language"
	},
	{
		symbol: "animation_cache_stats_reset",
		name: "animation_cache_stats_reset",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [],
		id: "animation_cache_stats_reset"
	},
	{
		symbol: "cinematic_clone_players_weapon",
		name: "cinematic_clone_players_weapon",
		description: "Clone the first player's most reasonable weapon and attach it to the specified object's marker",
		arguments: [
			"object",
			"string_id",
			"string_id"
		],
		id: "cinematic_clone_players_weapon"
	},
	{
		symbol: "cinematic_move_attached_objects",
		name: "cinematic_move_attached_objects",
		description: "Move the object's children attached to the first marker to the second marker",
		arguments: [
			"object",
			"string_id",
			"string_id",
			"string_id"
		],
		id: "cinematic_move_attached_objects"
	},
	{
		symbol: "vehicle_enable_ghost_effects",
		name: "vehicle_enable_ghost_effects",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"boolean"
		],
		id: "vehicle_enable_ghost_effects"
	},
	{
		symbol: "set_global_sound_environment",
		name: "set_global_sound_environment",
		description: "This is your brain on drugs",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"long",
			"real"
		],
		id: "set_global_sound_environment"
	},
	{
		symbol: "reset_dsp_image",
		name: "reset_dsp_image",
		description: "If we ever need to use this someone is getting fired",
		arguments: [],
		id: "reset_dsp_image"
	},
	{
		symbol: "game_save_cinematic_skip",
		name: "game_save_cinematic_skip",
		description: "Don't use this, except in one place.",
		arguments: [],
		id: "game_save_cinematic_skip"
	},
	{
		symbol: "cinematic_outro_start",
		name: "cinematic_outro_start",
		description: "Flag this cutscene as an outro cutscene",
		arguments: [],
		id: "cinematic_outro_start"
	},
	{
		symbol: "cinematic_enable_ambience_details",
		name: "cinematic_enable_ambience_details",
		description: "Enable/disable ambience details in cinematics",
		arguments: [
			"boolean"
		],
		id: "cinematic_enable_ambience_details"
	},
	{
		symbol: "rasterizer_bloom_override",
		name: "rasterizer_bloom_override",
		description: "Enable",
		arguments: [
			"boolean"
		],
		id: "rasterizer_bloom_override"
	},
	{
		symbol: "rasterizer_bloom_override_reset",
		name: "rasterizer_bloom_override_reset",
		description: "Reset",
		arguments: [
			"boolean"
		],
		id: "rasterizer_bloom_override_reset"
	},
	{
		symbol: "rasterizer_bloom_override_blur_amount",
		name: "rasterizer_bloom_override_blur_amount",
		description: "Blur mount",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_blur_amount"
	},
	{
		symbol: "rasterizer_bloom_override_threshold",
		name: "rasterizer_bloom_override_threshold",
		description: "Threshold",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_threshold"
	},
	{
		symbol: "rasterizer_bloom_override_brightness",
		name: "rasterizer_bloom_override_brightness",
		description: "Brightness",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_brightness"
	},
	{
		symbol: "rasterizer_bloom_override_box_factor",
		name: "rasterizer_bloom_override_box_factor",
		description: "Box factor",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_box_factor"
	},
	{
		symbol: "rasterizer_bloom_override_max_factor",
		name: "rasterizer_bloom_override_max_factor",
		description: "Max factor",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_max_factor"
	},
	{
		symbol: "rasterizer_bloom_override_silver_bullet",
		name: "rasterizer_bloom_override_silver_bullet",
		description: "Silver bullet",
		arguments: [
			"boolean"
		],
		id: "rasterizer_bloom_override_silver_bullet"
	},
	{
		symbol: "rasterizer_bloom_override_only",
		name: "rasterizer_bloom_override_only",
		description: "Only",
		arguments: [
			"boolean"
		],
		id: "rasterizer_bloom_override_only"
	},
	{
		symbol: "rasterizer_bloom_override_high_res",
		name: "rasterizer_bloom_override_high_res",
		description: "High res",
		arguments: [
			"boolean"
		],
		id: "rasterizer_bloom_override_high_res"
	},
	{
		symbol: "rasterizer_bloom_override_brightness_alpha",
		name: "rasterizer_bloom_override_brightness_alpha",
		description: "Brightness alpha",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_brightness_alpha"
	},
	{
		symbol: "rasterizer_bloom_override_max_factor_alpha",
		name: "rasterizer_bloom_override_max_factor_alpha",
		description: "Max factor alpha",
		arguments: [
			"real"
		],
		id: "rasterizer_bloom_override_max_factor_alpha"
	},
	{
		symbol: "cache_block_for_one_frame",
		name: "cache_block_for_one_frame",
		description: "Call this to force texture and geometry cache to block until satiated",
		arguments: [],
		id: "cache_block_for_one_frame"
	},
	{
		symbol: "sound_suppress_ambience_update_on_revert",
		name: "sound_suppress_ambience_update_on_revert",
		description: "Call this when transitioning between two cinematics so ambience won't fade in between the skips",
		arguments: [],
		id: "sound_suppress_ambience_update_on_revert"
	},
	{
		symbol: "render_autoexposure_enable",
		name: "render_autoexposure_enable",
		description: "Toggle autoexposure",
		arguments: [
			"boolean"
		],
		id: "render_autoexposure_enable"
	},
	{
		symbol: "render_exposure_full",
		name: "render_exposure_full",
		description: "Animate exposure from <initial> to <final> stops using <initial> to <final> opacity in <seconds>",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "render_exposure_full"
	},
	{
		symbol: "render_exposure_fade_in",
		name: "render_exposure_fade_in",
		description: "Fade to animated exposure <stops> in <seconds>",
		arguments: [
			"real",
			"real"
		],
		id: "render_exposure_fade_in"
	},
	{
		symbol: "render_exposure_fade_out",
		name: "render_exposure_fade_out",
		description: "Fade to default exposure settings in <seconds>",
		arguments: [
			"real"
		],
		id: "render_exposure_fade_out"
	},
	{
		symbol: "render_exposure",
		name: "render_exposure",
		description: "Fade to animated exposure <stops> in <seconds>",
		arguments: [
			"real",
			"real"
		],
		id: "render_exposure"
	},
	{
		symbol: "render_autoexposure_instant",
		name: "render_autoexposure_instant",
		description: "Instantly adopt auto exposure values in the next N frames",
		arguments: [
			"long"
		],
		id: "render_autoexposure_instant"
	},
	{
		symbol: "render_exposure_set_environment_darken",
		name: "render_exposure_set_environment_darken",
		description: "Set environmental darkening",
		arguments: [
			"real"
		],
		id: "render_exposure_set_environment_darken"
	},
	{
		symbol: "render_depth_of_field_enable",
		name: "render_depth_of_field_enable",
		description: "Turns depth of field on and off",
		arguments: [
			"boolean"
		],
		id: "render_depth_of_field_enable"
	},
	{
		symbol: "render_depth_of_field",
		name: "render_depth_of_field",
		description: "Animate depth of field, in focus from <near> to <far>, with depth of field <depth>, in <ticks>",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "render_depth_of_field"
	},
	{
		symbol: "render_dof_focus_depth",
		name: "render_dof_focus_depth",
		description: "Interpolate depth of field to <depth>",
		arguments: [
			"real"
		],
		id: "render_dof_focus_depth"
	},
	{
		symbol: "render_dof_blur_animate",
		name: "render_dof_blur_animate",
		description: "Interpolate depth of field maximum blur to <blur> in <ticks>",
		arguments: [
			"real",
			"real"
		],
		id: "render_dof_blur_animate"
	},
	{
		symbol: "render_debug_video_mode",
		name: "render_debug_video_mode",
		description: "Displays the current video mode",
		arguments: [],
		id: "render_debug_video_mode"
	},
	{
		symbol: "cinematic_lightmap_shadow_disable",
		name: "cinematic_lightmap_shadow_disable",
		description: "Turn off lightmap shadow in cinematics",
		arguments: [],
		id: "cinematic_lightmap_shadow_disable"
	},
	{
		symbol: "cinematic_lightmap_shadow_enable",
		name: "cinematic_lightmap_shadow_enable",
		description: "Turn on lightmap shadow in cinematics",
		arguments: [],
		id: "cinematic_lightmap_shadow_enable"
	},
	{
		symbol: "predict_animation",
		name: "predict_animation",
		description: "Begin loading an animation for the graph provided",
		arguments: [
			"animation_graph",
			"string_id"
		],
		id: "predict_animation"
	},
	{
		symbol: "mp_players_by_team",
		name: "mp_players_by_team",
		description: "Given a team index, returns an object list containing all living player objects belonging to that team",
		arguments: [
			"mp_team"
		],
		returns: "object_list",
		id: "mp_players_by_team"
	},
	{
		symbol: "mp_active_player_count_by_team",
		name: "mp_active_player_count_by_team",
		description: "Given a team index, returns an object list containing all living player objects belonging to that team",
		arguments: [
			"mp_team"
		],
		returns: "object_list",
		id: "mp_active_player_count_by_team"
	},
	{
		symbol: "deterministic_end_game",
		name: "deterministic_end_game",
		description: "End game deterministically, by inserting a simulation queue event",
		arguments: [],
		id: "deterministic_end_game"
	},
	{
		symbol: "mp_game_won",
		name: "mp_game_won",
		description: "Given a team index, declares the game a victory for that team and a loss for all others",
		arguments: [
			"mp_team"
		],
		id: "mp_game_won"
	},
	{
		symbol: "mp_respawn_override_timers",
		name: "mp_respawn_override_timers",
		description: "Causes all players on the specified team waiting to respawn (due to timer) to respawn immediately",
		arguments: [
			"mp_team"
		],
		id: "mp_respawn_override_timers"
	},
	{
		symbol: "mp_ai_allegiance",
		name: "mp_ai_allegiance",
		description: "Causes an allegiance to be formed between an AI squad team and a multiplayer team",
		arguments: [
			"team",
			"mp_team"
		],
		id: "mp_ai_allegiance"
	},
	{
		symbol: "mp_allegiance",
		name: "mp_allegiance",
		description: "Create an allegiance between two multiplayer teams",
		arguments: [
			"mp_team",
			"mp_team"
		],
		id: "mp_allegiance"
	},
	{
		symbol: "mp_round_started",
		name: "mp_round_started",
		description: "Used to determine if the mp game is in the active-round phase or not",
		arguments: [],
		id: "mp_round_started"
	},
	{
		symbol: "give_medal",
		name: "give_medal",
		description: "Awards a medal (0..58) to pad 1 due to pad 2 (if they're there)",
		arguments: [
			"short"
		],
		id: "give_medal"
	},
	{
		symbol: "mp_scripts_reset",
		name: "mp_scripts_reset",
		description: "On the host in a distributed game, resets the scripts (but not internal hs globals)",
		arguments: [],
		id: "mp_scripts_reset"
	},
	{
		symbol: "mp_ai_place",
		name: "mp_ai_place",
		description: "Places the specified squad on the map as a non-authoritative object",
		arguments: [
			"ai"
		],
		id: "mp_ai_place"
	},
	{
		symbol: "mp_ai_place",
		name: "mp_ai_place",
		description: "Places the given number of members of the specified squad as non-authoritative objects",
		arguments: [
			"ai",
			"short"
		],
		id: "mp_ai_place1"
	},
	{
		symbol: "mp_ai_kill",
		name: "mp_ai_kill",
		description: "Instantly kills the specified non-authoritative encounter and/or squad.",
		arguments: [
			"ai"
		],
		id: "mp_ai_kill"
	},
	{
		symbol: "mp_ai_kill_silent",
		name: "mp_ai_kill_silent",
		description: "Instantly and silently (no animation or sound played) kills the specified non-authoritative encounter and/or squad.",
		arguments: [
			"ai"
		],
		id: "mp_ai_kill_silent"
	},
	{
		symbol: "mp_object_create",
		name: "mp_object_create",
		description: "Creates a non-authoratative object from the scenario.",
		arguments: [
			"object_name"
		],
		id: "mp_object_create"
	},
	{
		symbol: "mp_object_create_clone",
		name: "mp_object_create_clone",
		description: "Creates a non-authoratative object, potentially resulting in multiple objects if it already exists.",
		arguments: [
			"object_name"
		],
		id: "mp_object_create_clone"
	},
	{
		symbol: "mp_object_create_anew",
		name: "mp_object_create_anew",
		description: "Creates a non-authoratative object, destroying it first if it already exists.",
		arguments: [
			"object_name"
		],
		id: "mp_object_create_anew"
	},
	{
		symbol: "mp_object_destroy",
		name: "mp_object_destroy",
		description: "Destroys a non-authoratative object.",
		arguments: [
			"object"
		],
		id: "mp_object_destroy"
	},
	{
		symbol: "tag_file_set_backend",
		name: "tag_file_set_backend",
		description: "Override the tag file system backend",
		arguments: [
			"string"
		],
		id: "tag_file_set_backend"
	},
	{
		symbol: "mp_object_belongs_to_team",
		name: "mp_object_belongs_to_team",
		description: "Causes specified object to belong to the given team, so that only that team can pick it up",
		arguments: [
			"object",
			"mp_team"
		],
		id: "mp_object_belongs_to_team"
	},
	{
		symbol: "mp_weapon_belongs_to_team",
		name: "mp_weapon_belongs_to_team",
		description: "Causes specified weapon to belong to the given team, so that only that team can pick it up",
		arguments: [
			"object",
			"mp_team"
		],
		id: "mp_weapon_belongs_to_team"
	},
	{
		symbol: "mp_debug_goal_object_boundary_geometry",
		name: "mp_debug_goal_object_boundary_geometry",
		description: "Toggle debug geometry for multiplayer goal objects",
		arguments: [
			"boolean"
		],
		id: "mp_debug_goal_object_boundary_geometry"
	},
	{
		symbol: "mp_dump_candy_monitor_state",
		name: "mp_dump_candy_monitor_state",
		description: "Dumps the current candy monitor state to a file on disk",
		arguments: [],
		id: "mp_dump_candy_monitor_state"
	},
	{
		symbol: "set_camera_third_person",
		name: "set_camera_third_person",
		description: "<user_index> <third_person (yes/no)> sets user's camera perspective",
		arguments: [
			"long",
			"boolean"
		],
		id: "set_camera_third_person"
	},
	{
		symbol: "get_camera_third_person",
		name: "get_camera_third_person",
		description: "<user_index> gets user's camera perspective",
		arguments: [
			"long"
		],
		id: "get_camera_third_person"
	},
	{
		symbol: "determinism_debug_manager_enable_logging",
		name: "determinism_debug_manager_enable_logging",
		description: "Enable/disable determinism logging",
		arguments: [
			"boolean"
		],
		id: "determinism_debug_manager_enable_logging"
	},
	{
		symbol: "determinism_debug_manager_set_trace_flags",
		name: "determinism_debug_manager_set_trace_flags",
		description: "Set which determinism debugging traces should be turned on",
		arguments: [
			"long"
		],
		id: "determinism_debug_manager_set_trace_flags"
	},
	{
		symbol: "determinism_debug_manager_enable_game_state_checksum",
		name: "determinism_debug_manager_enable_game_state_checksum",
		description: "Enable/disable determinism checkpoints",
		arguments: [
			"boolean"
		],
		id: "determinism_debug_manager_enable_game_state_checksum"
	},
	{
		symbol: "determinism_debug_manager_enable_trace",
		name: "determinism_debug_manager_enable_trace",
		description: "Enable determinism tracing",
		arguments: [
			"boolean"
		],
		id: "determinism_debug_manager_enable_trace"
	},
	{
		symbol: "determinism_debug_manager_set_consumer_sample_level",
		name: "determinism_debug_manager_set_consumer_sample_level",
		description: "Sets sample level for a consumer",
		arguments: [
			"string",
			"long"
		],
		id: "determinism_debug_manager_set_consumer_sample_level"
	},
	{
		symbol: "saved_film_play",
		name: "saved_film_play",
		description: "Plays a saved film for given controller",
		arguments: [
			"controller",
			"string"
		],
		id: "saved_film_play"
	},
	{
		symbol: "saved_film_play_last",
		name: "saved_film_play_last",
		description: "Play back last recorded saved film for given controller",
		arguments: [],
		id: "saved_film_play_last"
	},
	{
		symbol: "saved_film_disable_version_checking",
		name: "saved_film_disable_version_checking",
		description: "Disable saved film version checking",
		arguments: [
			"boolean"
		],
		id: "saved_film_disable_version_checking"
	},
	{
		symbol: "saved_film_toggle_debug_saving",
		name: "saved_film_toggle_debug_saving",
		description: "Toggle saving of last film to the debug output directory automatically after each game level",
		arguments: [
			"boolean"
		],
		id: "saved_film_toggle_debug_saving"
	},
	{
		symbol: "saved_films_delete_on_level_load",
		name: "saved_films_delete_on_level_load",
		description: "Toggle deletion last saved film after loading a new game level",
		arguments: [
			"boolean"
		],
		id: "saved_films_delete_on_level_load"
	},
	{
		symbol: "saved_films_show_timestamp",
		name: "saved_films_show_timestamp",
		description: "Toggle showing timestamp for saved film playback",
		arguments: [
			"boolean"
		],
		id: "saved_films_show_timestamp"
	},
	{
		symbol: "saved_film_manager_should_record_film_default",
		name: "saved_film_manager_should_record_film_default",
		description: "Toggle recording of replay in single player game",
		arguments: [
			"boolean"
		],
		id: "saved_film_manager_should_record_film_default"
	},
	{
		symbol: "mover_set_program",
		name: "mover_set_program",
		description: "Set the motor program of the given mover object",
		arguments: [
			"object",
			"short"
		],
		id: "mover_set_program"
	},
	{
		symbol: "determinism_log_compare_log_files",
		name: "determinism_log_compare_log_files",
		description: "Comares determinism log files",
		arguments: [
			"string",
			"string"
		],
		id: "determinism_log_compare_log_files"
	},
	{
		symbol: "floating_point_exceptions_enable",
		name: "floating_point_exceptions_enable",
		description: "Enables/disables floating point exceptions",
		arguments: [
			"boolean"
		],
		id: "floating_point_exceptions_enable"
	},
	{
		symbol: "determinism_debug_manager_enable_log_file_comparision_on_oos",
		name: "determinism_debug_manager_enable_log_file_comparision_on_oos",
		description: "Enables/disables determinism log file comparision on oos",
		arguments: [
			"boolean"
		],
		id: "determinism_debug_manager_enable_log_file_comparision_on_oos"
	},
	{
		symbol: "event_logs_snapshot",
		name: "event_logs_snapshot",
		description: "Copy error files to the error snapshot folder",
		arguments: [],
		id: "event_logs_snapshot"
	},
	{
		symbol: "tag_reload_force",
		name: "tag_reload_force",
		description: "Rather than force a painful xsync to test xsync, allow me to fake a tag_reload",
		arguments: [
			"string"
		],
		id: "tag_reload_force"
	},
	{
		symbol: "tag_unload_force",
		name: "tag_unload_force",
		description: "Call tag_unload",
		arguments: [
			"string"
		],
		id: "tag_unload_force"
	},
	{
		symbol: "tag_load_force",
		name: "tag_load_force",
		description: "Call tag_load",
		arguments: [
			"string"
		],
		id: "tag_load_force"
	},
	{
		symbol: "predict_bink_movie",
		name: "predict_bink_movie",
		description: "Um2...",
		arguments: [
			"string"
		],
		id: "predict_bink_movie"
	},
	{
		symbol: "predict_bink_movie_from_tag",
		name: "predict_bink_movie_from_tag",
		description: "Um2...",
		arguments: [
			"bink definition"
		],
		id: "predict_bink_movie_from_tag"
	},
	{
		symbol: "profiler_dump_history",
		name: "profiler_dump_history",
		description: "Dump profile history.",
		arguments: [],
		id: "profiler_dump_history"
	},
	{
		symbol: "camera_set_mode",
		name: "camera_set_mode",
		description: "<user_index> <mode_index> sets user's camera perspective",
		arguments: [
			"long",
			"long"
		],
		id: "camera_set_mode"
	},
	{
		symbol: "camera_set_flying_cam_at_point",
		name: "camera_set_flying_cam_at_point",
		description: "<user_index> <camera_point> sets a flying camera perspective",
		arguments: [
			"long",
			"cutscene_camera_point"
		],
		id: "camera_set_flying_cam_at_point"
	},
	{
		symbol: "game_coop_player_count",
		name: "game_coop_player_count",
		description: "Returns the number of coop players active in game",
		arguments: [],
		returns: "real",
		id: "game_coop_player_count"
	},
	{
		symbol: "player_force_mode",
		name: "player_force_mode",
		description: "Force your will upon the player",
		arguments: [
			"string_id"
		],
		id: "player_force_mode"
	},
	{
		symbol: "profiler_output_pulse",
		name: "profiler_output_pulse",
		description: "Dump profile stats to telnet console.",
		arguments: [],
		id: "profiler_output_pulse"
	},
	{
		symbol: "string_id_name",
		name: "string_id_name",
		description: "Prints the name of the string id to the console",
		arguments: [
			"long"
		],
		id: "string_id_name"
	},
	{
		symbol: "find",
		name: "find",
		description: "Prints any hs command matching the string passed in",
		arguments: [
			"string"
		],
		id: "find"
	},
	{
		symbol: "add_recycling_volume",
		name: "add_recycling_volume",
		description: "Removes garbage in specified trigger volume to a max count over n seconds",
		arguments: [
			"trigger_volume",
			"long",
			"long"
		],
		id: "add_recycling_volume"
	},
	{
		symbol: "tag_resources_set_per_frame_publish",
		name: "tag_resources_set_per_frame_publish",
		description: "Turns on/off per frame resource publish (stress testing)",
		arguments: [
			"boolean"
		],
		id: "tag_resources_set_per_frame_publish"
	},
	{
		symbol: "object_recycling_clear_history",
		name: "object_recycling_clear_history",
		description: "Clear object recycling history",
		arguments: [],
		id: "object_recycling_clear_history"
	},
	{
		symbol: "dump_cinematics_script",
		name: "dump_cinematics_script",
		description: "Dump the cinematic script to cinematic_dump.txt",
		arguments: [],
		id: "dump_cinematics_script"
	},
	{
		symbol: "global_preferences_clear",
		name: "global_preferences_clear",
		description: "Clears all game preference information",
		arguments: [],
		id: "global_preferences_clear"
	},
	{
		symbol: "network_storage_set_storage_subdirectory",
		name: "network_storage_set_storage_subdirectory",
		description: "<subdirectory> The default is the build number or 'untracked'",
		arguments: [
			"string"
		],
		id: "network_storage_set_storage_subdirectory"
	},
	{
		symbol: "network_storage_set_storage_user",
		name: "network_storage_set_storage_user",
		description: "<user> Use the network file stored on untracked\\<user>.",
		arguments: [
			"string"
		],
		id: "network_storage_set_storage_user"
	},
	{
		symbol: "status_line_dump",
		name: "status_line_dump",
		description: "Dumps active status_lines to system_log.txt",
		arguments: [],
		id: "status_line_dump"
	},
	{
		symbol: "game_tick_get",
		name: "game_tick_get",
		description: "Returns current game tick",
		arguments: [],
		returns: "long",
		id: "game_tick_get"
	},
	{
		symbol: "loop_it",
		name: "loop_it",
		description: "Runs the expression at most once per tick",
		arguments: [
			"string"
		],
		id: "loop_it"
	},
	{
		symbol: "loop_clear",
		name: "loop_clear",
		description: "Runs the expression at most once per tick",
		arguments: [],
		id: "loop_clear"
	},
	{
		symbol: "status_lines_enable",
		name: "status_lines_enable",
		description: "Enables status_lines that were initialized with identifiers that match the input substring",
		arguments: [
			"string"
		],
		id: "status_lines_enable"
	},
	{
		symbol: "status_lines_disable",
		name: "status_lines_disable",
		description: "Disables status_lines that were initialized with identifiers that match the input substring",
		arguments: [
			"string"
		],
		id: "status_lines_disable"
	},
	{
		symbol: "on_target_platform",
		name: "on_target_platform",
		description: "Returns true if the game thinks it's running on the target platform",
		arguments: [],
		returns: "boolean",
		id: "on_target_platform"
	},
	{
		symbol: "profile_activate",
		name: "profile_activate",
		description: "Activates profile sections based on a substring.",
		arguments: [
			"string"
		],
		id: "profile_activate"
	},
	{
		symbol: "profile_deactivate",
		name: "profile_deactivate",
		description: "Deactivates profile sections based on a substring.",
		arguments: [
			"string"
		],
		id: "profile_deactivate"
	},
	{
		symbol: "net_game_set_player_standing",
		name: "net_game_set_player_standing",
		description: "Set's a player's standing by gamertag",
		arguments: [
			"string",
			"long"
		],
		id: "net_game_set_player_standing"
	},
	{
		symbol: "net_get_game_id",
		name: "net_get_game_id",
		description: "Prints the id of the game to the console",
		arguments: [],
		id: "net_get_game_id"
	},
	{
		symbol: "generate_rsa_2048_key_pair",
		name: "generate_rsa_2048_key_pair",
		description: "Generates an RSA key pair",
		arguments: [],
		id: "generate_rsa_2048_key_pair"
	},
	{
		symbol: "create_secure_test_file",
		name: "create_secure_test_file",
		description: "Generates a compressed encrypted test file",
		arguments: [],
		id: "create_secure_test_file"
	},
	{
		symbol: "net_test_matchmaking_hopper_list",
		name: "net_test_matchmaking_hopper_list",
		description: "Prints the hopper list",
		arguments: [],
		id: "net_test_matchmaking_hopper_list"
	},
	{
		symbol: "net_test_matchmaking_hopper_game_list",
		name: "net_test_matchmaking_hopper_game_list",
		description: "Prints games for the current hopper",
		arguments: [],
		id: "net_test_matchmaking_hopper_game_list"
	},
	{
		symbol: "net_test_matchmaking_hopper_set_game",
		name: "net_test_matchmaking_hopper_set_game",
		description: "Sets the game vairant for the current hopper",
		arguments: [
			"long"
		],
		id: "net_test_matchmaking_hopper_set_game"
	},
	{
		symbol: "saved_film_set_playback_game_speed",
		name: "saved_film_set_playback_game_speed",
		description: "Set the saved film playback speed",
		arguments: [
			"real"
		],
		id: "saved_film_set_playback_game_speed"
	},
	{
		symbol: "saved_film_set_pending_playback_game_speed",
		name: "saved_film_set_pending_playback_game_speed",
		description: "Set the pending saved film playback speed",
		arguments: [
			"real"
		],
		id: "saved_film_set_pending_playback_game_speed"
	},
	{
		symbol: "noguchis_mystery_tour",
		name: "noguchis_mystery_tour",
		description: "Set the additional music directory to dump into the cache file",
		arguments: [
			"string"
		],
		id: "noguchis_mystery_tour"
	},
	{
		symbol: "designer_zone_sync",
		name: "designer_zone_sync",
		description: "Synchronizes global objects with loaded designer zones",
		arguments: [],
		id: "designer_zone_sync"
	},
	{
		symbol: "dump_designer_zone",
		name: "dump_designer_zone",
		description: "Dump interesting info about a designer zone",
		arguments: [
			"designer_zone"
		],
		id: "dump_designer_zone"
	},
	{
		symbol: "designer_zone_activate",
		name: "designer_zone_activate",
		description: "Activate designer zone",
		arguments: [
			"designer_zone"
		],
		id: "designer_zone_activate"
	},
	{
		symbol: "designer_zone_deactivate",
		name: "designer_zone_deactivate",
		description: "Deactivates designer zone, deletes objects that were part of that designer zone",
		arguments: [
			"designer_zone"
		],
		id: "designer_zone_deactivate"
	},
	{
		symbol: "object_set_always_active",
		name: "object_set_always_active",
		description: "Sets/unsets the object always active flag to ignore pvs changes",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_always_active"
	},
	{
		symbol: "saved_film_seek_to_film_tick",
		name: "saved_film_seek_to_film_tick",
		description: "Seeks to a film tick",
		arguments: [
			"long"
		],
		id: "saved_film_seek_to_film_tick"
	},
	{
		symbol: "tag_is_active",
		name: "tag_is_active",
		description: "Returns true/false if you can create this tag with the active zones",
		arguments: [
			"any tag not resolving"
		],
		returns: "boolean",
		id: "tag_is_active"
	},
	{
		symbol: "tag_resources_set_incremental_publish",
		name: "tag_resources_set_incremental_publish",
		description: "Turns on/off incremental resource publish (prediction)",
		arguments: [
			"boolean"
		],
		id: "tag_resources_set_incremental_publish"
	},
	{
		symbol: "tag_resources_enable_optional_caching",
		name: "tag_resources_enable_optional_caching",
		description: "Turns on/off optional resource prediction",
		arguments: [
			"boolean"
		],
		id: "tag_resources_enable_optional_caching"
	},
	{
		symbol: "dump_active_resources",
		name: "dump_active_resources",
		description: "Blah",
		arguments: [],
		id: "dump_active_resources"
	},
	{
		symbol: "object_set_persistent",
		name: "object_set_persistent",
		description: "<object_index> <true/false> prevent this object from being garbage collected",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_set_persistent"
	},
	{
		symbol: "display_zone_size_estimates",
		name: "display_zone_size_estimates",
		description: "Display zone size estimates HUD",
		arguments: [
			"boolean"
		],
		id: "display_zone_size_estimates"
	},
	{
		symbol: "report_zone_size_estimates",
		name: "report_zone_size_estimates",
		description: "Dump zone size estimates to design report log",
		arguments: [],
		id: "report_zone_size_estimates"
	},
	{
		symbol: "net_test_disconnect_squad",
		name: "net_test_disconnect_squad",
		description: "Disconnects the squad session",
		arguments: [],
		id: "net_test_disconnect_squad"
	},
	{
		symbol: "net_test_disconnect_group",
		name: "net_test_disconnect_group",
		description: "Disconnects the group session",
		arguments: [],
		id: "net_test_disconnect_group"
	},
	{
		symbol: "net_test_clear_squad_session_parameter",
		name: "net_test_clear_squad_session_parameter",
		description: "Clears a squad session parameter",
		arguments: [
			"long"
		],
		id: "net_test_clear_squad_session_parameter"
	},
	{
		symbol: "net_test_clear_group_session_parameter",
		name: "net_test_clear_group_session_parameter",
		description: "Clears a group session parameter",
		arguments: [
			"long"
		],
		id: "net_test_clear_group_session_parameter"
	},
	{
		symbol: "net_test_life_cycle_pause",
		name: "net_test_life_cycle_pause",
		description: "Pauses the life cycle in the specified state",
		arguments: [
			"string",
			"boolean"
		],
		id: "net_test_life_cycle_pause"
	},
	{
		symbol: "net_test_life_cycle_display_states",
		name: "net_test_life_cycle_display_states",
		description: "Display the life cycle states",
		arguments: [],
		id: "net_test_life_cycle_display_states"
	},
	{
		symbol: "overlapped_display_task_descriptions",
		name: "overlapped_display_task_descriptions",
		description: "Displays all tasks",
		arguments: [],
		id: "overlapped_display_task_descriptions"
	},
	{
		symbol: "overlapped_task_inject_error",
		name: "overlapped_task_inject_error",
		description: "Inject error for tasks",
		arguments: [
			"string",
			"boolean"
		],
		id: "overlapped_task_inject_error"
	},
	{
		symbol: "net_leaderboard_clear_hopper_all_users",
		name: "net_leaderboard_clear_hopper_all_users",
		description: "Clears the hopper stats for the all user",
		arguments: [
			"string"
		],
		id: "net_leaderboard_clear_hopper_all_users"
	},
	{
		symbol: "net_leaderboard_clear_global_arbitrated_all_users",
		name: "net_leaderboard_clear_global_arbitrated_all_users",
		description: "Clears the global arbitrated stats for all user",
		arguments: [
			"string"
		],
		id: "net_leaderboard_clear_global_arbitrated_all_users"
	},
	{
		symbol: "net_leaderboard_clear_global_unarbitrated_all_users",
		name: "net_leaderboard_clear_global_unarbitrated_all_users",
		description: "Clears the global unarbitrated stats for all user",
		arguments: [
			"string"
		],
		id: "net_leaderboard_clear_global_unarbitrated_all_users"
	},
	{
		symbol: "test_sapien_crash",
		name: "test_sapien_crash",
		arguments: [],
		id: "test_sapien_crash"
	},
	{
		symbol: "decorators_split",
		name: "decorators_split",
		description: "Duplicates decorator set <index> and moves <percentage> of the decorators into it",
		arguments: [
			"long",
			"real"
		],
		id: "decorators_split"
	},
	{
		symbol: "bandwidth_profiler_enable",
		name: "bandwidth_profiler_enable",
		description: "Enables bandwidth profiler",
		arguments: [
			"boolean"
		],
		id: "bandwidth_profiler_enable"
	},
	{
		symbol: "bandwidth_profiler_set_context",
		name: "bandwidth_profiler_set_context",
		description: "Sets bandwidth profiler context",
		arguments: [
			"boolean"
		],
		id: "bandwidth_profiler_set_context"
	},
	{
		symbol: "overlapped_task_pause",
		name: "overlapped_task_pause",
		description: "Pause tasks",
		arguments: [
			"string",
			"boolean"
		],
		id: "overlapped_task_pause"
	},
	{
		symbol: "net_banhammer_set_controller_cheat_flags",
		name: "net_banhammer_set_controller_cheat_flags",
		description: "Sets cheat flags",
		arguments: [
			"controller",
			"string",
			"boolean"
		],
		id: "net_banhammer_set_controller_cheat_flags"
	},
	{
		symbol: "net_banhammer_set_controller_ban_flags",
		name: "net_banhammer_set_controller_ban_flags",
		description: "Sets ban flags",
		arguments: [
			"controller",
			"string",
			"long",
			"boolean"
		],
		id: "net_banhammer_set_controller_ban_flags"
	},
	{
		symbol: "net_banhammer_dump_strings",
		name: "net_banhammer_dump_strings",
		description: "Display cheat/ban strings",
		arguments: [],
		id: "net_banhammer_dump_strings"
	},
	{
		symbol: "net_banhammer_dump_repeated_play_list",
		name: "net_banhammer_dump_repeated_play_list",
		description: "Display repeated play lists",
		arguments: [],
		id: "net_banhammer_dump_repeated_play_list"
	},
	{
		symbol: "net_leaderboard_set_user_stats",
		name: "net_leaderboard_set_user_stats",
		description: "Slams user leaderboard values locally",
		arguments: [
			"long",
			"real",
			"real",
			"long",
			"long",
			"long"
		],
		id: "net_leaderboard_set_user_stats"
	},
	{
		symbol: "net_leaderboard_set_user_game_stats",
		name: "net_leaderboard_set_user_game_stats",
		description: "Slams more user stats",
		arguments: [
			"long",
			"long",
			"long",
			"long",
			"long"
		],
		id: "net_leaderboard_set_user_game_stats"
	},
	{
		symbol: "net_build_map_variant",
		name: "net_build_map_variant",
		description: "Writes the current map variant to a file",
		arguments: [
			"string"
		],
		id: "net_build_map_variant"
	},
	{
		symbol: "net_verify_map_variant",
		name: "net_verify_map_variant",
		description: "Verifies the contents of a packed map variant file",
		arguments: [
			"string"
		],
		id: "net_verify_map_variant"
	},
	{
		symbol: "async_set_work_delay_milliseconds",
		name: "async_set_work_delay_milliseconds",
		description: "Set an artificial delay time for the performance of any asynchronous task work",
		arguments: [
			"long"
		],
		id: "async_set_work_delay_milliseconds"
	},
	{
		symbol: "sound_looping_start_with_effect",
		name: "sound_looping_start_with_effect",
		description: "Plays a looping sound from the specified source object (or \"none\"), with the specified scale and playback effect.",
		arguments: [
			"looping_sound",
			"object",
			"real",
			"string_id"
		],
		id: "sound_looping_start_with_effect"
	},
	{
		symbol: "tag_resources_set_demand_throttle_to_io",
		name: "tag_resources_set_demand_throttle_to_io",
		description: "Turns on/off demand throttling based on io",
		arguments: [
			"boolean"
		],
		id: "tag_resources_set_demand_throttle_to_io"
	},
	{
		symbol: "tag_resources_flush_optional",
		name: "tag_resources_flush_optional",
		description: "Flushes optional resources",
		arguments: [],
		id: "tag_resources_flush_optional"
	},
	{
		symbol: "set_performance_throttle",
		name: "set_performance_throttle",
		description: "Sets a default value for a performance throttle for a given number of players",
		arguments: [
			"string",
			"long",
			"real"
		],
		id: "set_performance_throttle"
	},
	{
		symbol: "get_performance_throttle",
		name: "get_performance_throttle",
		description: "Gets the value of a performance throttle for a given number of players",
		arguments: [
			"string",
			"long"
		],
		id: "get_performance_throttle"
	},
	{
		symbol: "cinematic_zone_activate",
		name: "cinematic_zone_activate",
		description: "Activates scenario cinematic zone (automatically generated script function!)",
		arguments: [
			"long"
		],
		id: "cinematic_zone_activate"
	},
	{
		symbol: "cinematic_zone_deactivate",
		name: "cinematic_zone_deactivate",
		description: "Deactivates scenario cinematic zone (automatically generated script function!)",
		arguments: [
			"long"
		],
		id: "cinematic_zone_deactivate"
	},
	{
		symbol: "cinematic_zone_activate_from_editor",
		name: "cinematic_zone_activate_from_editor",
		description: "Activates cinematic zone from tag (automatically generated script function!)",
		arguments: [
			"any tag"
		],
		id: "cinematic_zone_activate_from_editor"
	},
	{
		symbol: "cinematic_zone_deactivate_from_editor",
		name: "cinematic_zone_deactivate_from_editor",
		description: "Deactivates cinematic zone from tag (automatically generated script function!)",
		arguments: [
			"any tag"
		],
		id: "cinematic_zone_deactivate_from_editor"
	},
	{
		symbol: "tiling_current",
		name: "tiling_current",
		description: "Returns the actual tiling configuration (could have been overridden from the requested configuration)",
		arguments: [],
		id: "tiling_current"
	},
	{
		symbol: "unit_limit_lipsync_to_mouth_only",
		name: "unit_limit_lipsync_to_mouth_only",
		description: "Cinematic lipsync means you can't use all the facial bones, just the mouth",
		arguments: [
			"unit",
			"boolean"
		],
		id: "unit_limit_lipsync_to_mouth_only"
	},
	{
		symbol: "dump_active_zone_tags",
		name: "dump_active_zone_tags",
		description: "Blah",
		arguments: [],
		id: "dump_active_zone_tags"
	},
	{
		symbol: "calculate_tag_prediction",
		name: "calculate_tag_prediction",
		arguments: [
			"any tag"
		],
		id: "calculate_tag_prediction"
	},
	{
		symbol: "tag_resources_enable_fast_prediction",
		name: "tag_resources_enable_fast_prediction",
		description: "Turns on/off faster prediction, in case I messed up something",
		arguments: [
			"boolean"
		],
		id: "tag_resources_enable_fast_prediction"
	},
	{
		symbol: "unit_start_first_person_custom_animation",
		name: "unit_start_first_person_custom_animation",
		description: "Starts a custom animation playing on a unit (puts away weapon if last parameter is TRUE)",
		arguments: [
			"unit",
			"animation_graph",
			"string_id",
			"boolean"
		],
		id: "unit_start_first_person_custom_animation"
	},
	{
		symbol: "unit_is_playing_custom_first_person_animation",
		name: "unit_is_playing_custom_first_person_animation",
		description: "Returns TRUE if the given unit is still playing a custom animation in first person",
		arguments: [
			"unit"
		],
		returns: "boolean",
		id: "unit_is_playing_custom_first_person_animation"
	},
	{
		symbol: "unit_stop_first_person_custom_animation",
		name: "unit_stop_first_person_custom_animation",
		description: "Ends any custom first person animation running on the unit",
		arguments: [
			"unit"
		],
		id: "unit_stop_first_person_custom_animation"
	},
	{
		symbol: "prepare_to_switch_to_zone_set",
		name: "prepare_to_switch_to_zone_set",
		description: "Prepare for switch to zone set",
		arguments: [
			"zone_set"
		],
		id: "prepare_to_switch_to_zone_set"
	},
	{
		symbol: "cinematic_zone_activate_for_debugging",
		name: "cinematic_zone_activate_for_debugging",
		description: "Activates scenario cinematic zone for debugging (automatically generated script function!)",
		arguments: [
			"long"
		],
		id: "cinematic_zone_activate_for_debugging"
	},
	{
		symbol: "unit_play_random_ping",
		name: "unit_play_random_ping",
		description: "Plays a random ping on the unit",
		arguments: [
			"unit"
		],
		id: "unit_play_random_ping"
	},
	{
		symbol: "player_control_fade_out_all_input",
		name: "player_control_fade_out_all_input",
		description: "Fade out all play control over x seconds",
		arguments: [
			"real"
		],
		id: "player_control_fade_out_all_input"
	},
	{
		symbol: "player_control_fade_in_all_input",
		name: "player_control_fade_in_all_input",
		description: "Fade in all play control over x seconds",
		arguments: [
			"real"
		],
		id: "player_control_fade_in_all_input"
	},
	{
		symbol: "player_control_lock_gaze",
		name: "player_control_lock_gaze",
		description: "Player turn to face point with max velocity degrees/second",
		arguments: [
			"unit",
			"point_reference",
			"real"
		],
		id: "player_control_lock_gaze"
	},
	{
		symbol: "player_control_unlock_gaze",
		name: "player_control_unlock_gaze",
		description: "Unlock player from any gaze point",
		arguments: [
			"unit"
		],
		id: "player_control_unlock_gaze"
	},
	{
		symbol: "player_control_scale_all_input",
		name: "player_control_scale_all_input",
		description: "Scale input to x strength over y seconds",
		arguments: [
			"real",
			"real"
		],
		id: "player_control_scale_all_input"
	},
	{
		symbol: "run_like_dvd",
		name: "run_like_dvd",
		arguments: [],
		id: "run_like_dvd"
	},
	{
		symbol: "profiler_auto_core_save",
		name: "profiler_auto_core_save",
		description: "Profiler dumps a core for each encounter",
		arguments: [
			"boolean"
		],
		id: "profiler_auto_core_save"
	},
	{
		symbol: "run_no_hdd",
		name: "run_no_hdd",
		arguments: [],
		id: "run_no_hdd"
	},
	{
		symbol: "cinematic_tag_reference_get_bink",
		name: "cinematic_tag_reference_get_bink",
		description: "Retrieve the bink tag from the cinematic system",
		arguments: [
			"long"
		],
		id: "cinematic_tag_reference_get_bink"
	},
	{
		symbol: "voice_set_force_match_configurations",
		name: "voice_set_force_match_configurations",
		description: "Sets matchmaking voice options",
		arguments: [
			"long",
			"long",
			"long",
			"boolean"
		],
		id: "voice_set_force_match_configurations"
	},
	{
		symbol: "voice_set_force_hud",
		name: "voice_set_force_hud",
		description: "Sets matchmaking voice hud",
		arguments: [
			"long",
			"long"
		],
		id: "voice_set_force_hud"
	},
	{
		symbol: "object_set_custom_animation_speed",
		name: "object_set_custom_animation_speed",
		description: "If the object is playing a custom animation, scale it to n playback speed",
		arguments: [
			"object",
			"real"
		],
		id: "object_set_custom_animation_speed"
	},
	{
		symbol: "scenery_animation_start_at_frame_loop",
		name: "scenery_animation_start_at_frame_loop",
		description: "Starts a custom animation playing on a piece of scenery at a specific frame and then loops",
		arguments: [
			"scenery",
			"animation_graph",
			"string_id",
			"short"
		],
		id: "scenery_animation_start_at_frame_loop"
	},
	{
		symbol: "saved_film_set_repro_mode",
		name: "saved_film_set_repro_mode",
		description: "Set the saved film into repro mode (splitscreen users are created based on the number of splitscreen players that recorded the film)",
		arguments: [
			"boolean"
		],
		id: "saved_film_set_repro_mode"
	},
	{
		symbol: "chud_show_arbiter_ai_navpoint",
		name: "chud_show_arbiter_ai_navpoint",
		description: "Hides/shows the entire chud",
		arguments: [
			"boolean"
		],
		id: "chud_show_arbiter_ai_navpoint"
	},
	{
		symbol: "cortana_tag_reference_get_scene",
		name: "cortana_tag_reference_get_scene",
		description: "Retrieve a cinematic tag from the cinematic system",
		arguments: [
			"long"
		],
		id: "cortana_tag_reference_get_scene"
	},
	{
		symbol: "net_banhammer_force_download",
		name: "net_banhammer_force_download",
		description: "Force banhammer file download",
		arguments: [
			"boolean",
			"boolean"
		],
		id: "net_banhammer_force_download"
	},
	{
		symbol: "font_set_emergency",
		name: "font_set_emergency",
		description: "Sets the font system into emergency mode",
		arguments: [],
		id: "font_set_emergency"
	},
	{
		symbol: "biped_force_ground_fitting_on",
		name: "biped_force_ground_fitting_on",
		description: "Force ground fitting on, even during custom animations or movement",
		arguments: [
			"unit",
			"boolean"
		],
		id: "biped_force_ground_fitting_on"
	},
	{
		symbol: "cinematic_set_chud_objective",
		name: "cinematic_set_chud_objective",
		description: "Activates the chapter title",
		arguments: [
			"cutscene_title"
		],
		id: "cinematic_set_chud_objective"
	},
	{
		symbol: "terminal_is_being_read",
		name: "terminal_is_being_read",
		description: "Returns whether or not a terminal is currently being read",
		arguments: [],
		returns: "boolean",
		id: "terminal_is_being_read"
	},
	{
		symbol: "terminal_was_accessed",
		name: "terminal_was_accessed",
		description: "Returns whether or not the given terminal was accessed",
		arguments: [
			"object"
		],
		returns: "boolean",
		id: "terminal_was_accessed"
	},
	{
		symbol: "terminal_was_completed",
		name: "terminal_was_completed",
		description: "Returns whether or not the given terminal was read to completion",
		arguments: [
			"object"
		],
		returns: "boolean",
		id: "terminal_was_completed"
	},
	{
		symbol: "cortana_terminal_was_accessed",
		name: "cortana_terminal_was_accessed",
		description: "Hack for ace as cortana's terminal needs to callback to terminal code",
		arguments: [],
		id: "cortana_terminal_was_accessed"
	},
	{
		symbol: "unit_get_primary_weapon",
		name: "unit_get_primary_weapon",
		description: "Return the primary weapon of the specified unit",
		arguments: [
			"unit"
		],
		returns: "weapon",
		id: "unit_get_primary_weapon"
	},
	{
		symbol: "dump_cortana_script",
		name: "dump_cortana_script",
		description: "Dump the cinematic script to cinematic_dump_cortana.txt",
		arguments: [],
		id: "dump_cortana_script"
	},
	{
		symbol: "budget_resource_get_animation_graph",
		name: "budget_resource_get_animation_graph",
		description: "Get a non resolving reference to a model animation graph budget reference",
		arguments: [
			"animation budget reference"
		],
		id: "budget_resource_get_animation_graph"
	},
	{
		symbol: "game_award_level_complete_achievements",
		name: "game_award_level_complete_achievements",
		description: "Causes the player to successfully finish the current level and move to the next",
		arguments: [],
		id: "game_award_level_complete_achievements"
	},
	{
		symbol: "budget_resource_get_looping_sound",
		name: "budget_resource_get_looping_sound",
		description: "Get a non resolving reference to a looping sound budget reference",
		arguments: [
			"looping sound budget reference"
		],
		id: "budget_resource_get_looping_sound"
	},
	{
		symbol: "game_safe_to_respawn",
		name: "game_safe_to_respawn",
		description: "NETWORK SAFE: Unknown, assumed unsafe",
		arguments: [
			"boolean"
		],
		id: "game_safe_to_respawn"
	},
	{
		symbol: "cortana_effect_kill",
		name: "cortana_effect_kill",
		description: "Kills the cortana effect",
		arguments: [],
		id: "cortana_effect_kill"
	},
	{
		symbol: "test_create_content_item_slayer",
		name: "test_create_content_item_slayer",
		description: "Creates a slayer variant",
		arguments: [],
		id: "test_create_content_item_slayer"
	},
	{
		symbol: "test_create_content_item_screenshot",
		name: "test_create_content_item_screenshot",
		description: "Creates a screenshot (which isn't actually viewable)",
		arguments: [],
		id: "test_create_content_item_screenshot"
	},
	{
		symbol: "cinematic_scripting_destroy_cortana_effect_cinematic",
		name: "cinematic_scripting_destroy_cortana_effect_cinematic",
		description: "Destroy cortana effect cinematic",
		arguments: [],
		id: "cinematic_scripting_destroy_cortana_effect_cinematic"
	},
	{
		symbol: "ai_migrate_infanty",
		name: "ai_migrate_infanty",
		description: "Migrates the infantry in an encounter into a different squad.",
		arguments: [
			"ai",
			"ai"
		],
		id: "ai_migrate_infanty"
	},
	{
		symbol: "render_cinematic_motion_blur",
		name: "render_cinematic_motion_blur",
		description: "Enable/disable cinematic motion blur",
		arguments: [
			"boolean"
		],
		id: "render_cinematic_motion_blur"
	},
	{
		symbol: "ai_dont_do_avoidance",
		name: "ai_dont_do_avoidance",
		description: "Set the AI to not do any vector avoidance when flying",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_dont_do_avoidance"
	},
	{
		symbol: "cinematic_scripting_clean_up",
		name: "cinematic_scripting_clean_up",
		description: "Unload the scenario cinematic zone",
		arguments: [
			"long"
		],
		id: "cinematic_scripting_clean_up"
	},
	{
		symbol: "ai_erase_inactive",
		name: "ai_erase_inactive",
		description: "Erase inactive actors in the given ai index, and any of those actors who become inactive within the next designated ticks",
		arguments: [
			"ai",
			"short"
		],
		id: "ai_erase_inactive"
	},
	{
		symbol: "stop_bink_movie",
		name: "stop_bink_movie",
		description: "Stops all bink movie playback",
		arguments: [],
		id: "stop_bink_movie"
	},
	{
		symbol: "play_credits_unskippable",
		name: "play_credits_unskippable",
		description: "Plays credits movie, no button press detection (you can still use cinematic skipping around this)",
		arguments: [],
		id: "play_credits_unskippable"
	},
	{
		symbol: "budget_resource_get_sound",
		name: "budget_resource_get_sound",
		description: "Get a non resolving reference to a looping sound budget reference",
		arguments: [
			"sound budget reference"
		],
		id: "budget_resource_get_sound"
	},
	{
		symbol: "controller_set_single_player_level_unlocked",
		name: "controller_set_single_player_level_unlocked",
		description: "<controller> <level index> <bool locked> set single player level locked state for specified controller",
		arguments: [
			"controller",
			"short",
			"boolean"
		],
		id: "controller_set_single_player_level_unlocked"
	},
	{
		symbol: "physical_memory_dump",
		name: "physical_memory_dump",
		description: "Dumps a record of all physical memory allocations",
		arguments: [],
		id: "physical_memory_dump"
	},
	{
		symbol: "tag_resources_validate_all_pages",
		name: "tag_resources_validate_all_pages",
		description: "Resource validation every main_loop_body call",
		arguments: [
			"boolean"
		],
		id: "tag_resources_validate_all_pages"
	},
	{
		symbol: "controller_set_popup_message_index",
		name: "controller_set_popup_message_index",
		description: "<controller> <message index> set the highest popup message that the player has accepted",
		arguments: [
			"controller",
			"long"
		],
		id: "controller_set_popup_message_index"
	},
	{
		symbol: "gui_enter_lobby",
		name: "gui_enter_lobby",
		description: "<lobby index> index 0-4",
		arguments: [
			"long"
		],
		id: "gui_enter_lobby"
	},
	{
		symbol: "gui_spartan_reset_profile",
		name: "gui_spartan_reset_profile",
		description: "Reset profile stored milestone and hopper rankings",
		arguments: [
			"controller"
		],
		id: "gui_spartan_reset_profile"
	},
	{
		symbol: "game_achievements_display_achievement_names",
		name: "game_achievements_display_achievement_names",
		description: "Displays the achievement list",
		arguments: [],
		id: "game_achievements_display_achievement_names"
	},
	{
		symbol: "game_grant_achievement_to_controller_by_string",
		name: "game_grant_achievement_to_controller_by_string",
		description: "Unlocks an achievement for a given controller",
		arguments: [
			"controller",
			"string"
		],
		id: "game_grant_achievement_to_controller_by_string"
	},
	{
		symbol: "game_grant_all_achievements_to_controller",
		name: "game_grant_all_achievements_to_controller",
		description: "Unlocks all achievements for a given controller",
		arguments: [
			"controller"
		],
		id: "game_grant_all_achievements_to_controller"
	},
	{
		symbol: "gui_spartan_set_achievement_day_of_month",
		name: "gui_spartan_set_achievement_day_of_month",
		description: "Overrides the system time's day of the month for 7 on 7 EXP achievement",
		arguments: [
			"short"
		],
		id: "gui_spartan_set_achievement_day_of_month"
	},
	{
		symbol: "ui_set_is_blue",
		name: "ui_set_is_blue",
		description: "Fool the system into thinking it is or is not blue disk",
		arguments: [
			"boolean"
		],
		id: "ui_set_is_blue"
	},
	{
		symbol: "d3d_enum_modes",
		name: "d3d_enum_modes",
		description: "Enumerate and dump available video modes",
		arguments: [],
		id: "d3d_enum_modes"
	},
	{
		symbol: "d3d_set_mode_idx",
		name: "d3d_set_mode_idx",
		description: "Set render mode (<adapter> <mode> <fullscreen>)",
		arguments: [
			"short",
			"short",
			"boolean"
		],
		id: "d3d_set_mode_idx"
	},
	{
		symbol: "d3d_set_mode",
		name: "d3d_set_mode",
		description: "Set render mode (<adapter> <width> <height> <fullscreen>)",
		arguments: [
			"short",
			"short",
			"short",
			"boolean"
		],
		id: "d3d_set_mode"
	},
	{
		symbol: "d3d_reset",
		name: "d3d_reset",
		description: "Reset device",
		arguments: [],
		id: "d3d_reset"
	},
	{
		symbol: "dip_stats_enable",
		name: "dip_stats_enable",
		description: "<on> enable DIP statistics",
		arguments: [
			"boolean"
		],
		id: "dip_stats_enable"
	},
	{
		symbol: "dip_stats_dump",
		name: "dip_stats_dump",
		description: "Save DIP statistics to file",
		arguments: [],
		id: "dip_stats_dump"
	},
	{
		symbol: "dip_stats_sort_toggle",
		name: "dip_stats_sort_toggle",
		description: "Toggle DIP statistics sort mode (inclusive DIP, exclusive DIP)",
		arguments: [],
		id: "dip_stats_sort_toggle"
	},
	{
		symbol: "sys_info",
		name: "sys_info",
		description: "Dump cpu, gpu and system information",
		arguments: [],
		id: "sys_info"
	},
	{
		symbol: "is_ace_build",
		name: "is_ace_build",
		description: "Returns if this is an ACE enabled build",
		arguments: [],
		returns: "boolean",
		id: "is_ace_build"
	},
	{
		symbol: "ssao_enable",
		name: "ssao_enable",
		description: "Turn on/off ssao",
		arguments: [
			"short"
		],
		id: "ssao_enable"
	},
	{
		symbol: "ssao_radius",
		name: "ssao_radius",
		description: "Set ssao radius (0.75 is default)",
		arguments: [
			"real"
		],
		id: "ssao_radius"
	},
	{
		symbol: "ssao_intensity",
		name: "ssao_intensity",
		description: "Set ssao intensity (1.0 is default)",
		arguments: [
			"real"
		],
		id: "ssao_intensity"
	},
	{
		symbol: "ssao_sampleZThreshold",
		name: "ssao_sampleZThreshold",
		description: "Set ssao sample z threshold (0.5 is default)",
		arguments: [
			"real"
		],
		id: "ssao_sampleZThreshold"
	},
	{
		symbol: "fxaa_enable",
		name: "fxaa_enable",
		description: "Turn on/off fxaa",
		arguments: [
			"boolean"
		],
		id: "fxaa_enable"
	},
	{
		symbol: "color_grading_enable",
		name: "color_grading_enable",
		description: "Turn on/off color grading",
		arguments: [
			"boolean"
		],
		id: "color_grading_enable"
	},
	{
		symbol: "lightshafts_enable",
		name: "lightshafts_enable",
		description: "Turn on/off lightshafts",
		arguments: [
			"boolean"
		],
		id: "lightshafts_enable"
	},
	{
		symbol: "debug_menu_rebuild",
		name: "debug_menu_rebuild",
		description: "Reparses the debug menu from the text file.",
		arguments: [],
		id: "debug_menu_rebuild"
	},
	{
		symbol: "simulation_profiler_enable",
		name: "simulation_profiler_enable",
		description: "Turns on the simulation/bandwidth profiler and configures it for high level use (similar to the old screen-text-based bandwidth profiler).",
		arguments: [],
		id: "simulation_profiler_enable"
	},
	{
		symbol: "simulation_profiler_detail_level",
		name: "simulation_profiler_detail_level",
		description: "Set detail level of simulation profiler capture on the host (affects perf & saved film size).  0-9 are valid, else clamped.",
		arguments: [
			"long"
		],
		id: "simulation_profiler_detail_level"
	},
	{
		symbol: "simulation_profiler_enable_downstream_processing",
		name: "simulation_profiler_enable_downstream_processing",
		description: "Enable/disable the processing of downstream data by the simulation profiler database (default is disabled, so if you want to examine downstream, you need to turn this on at display time.  Does not affect recording!)",
		arguments: [
			"boolean"
		],
		id: "simulation_profiler_enable_downstream_processing"
	},
	{
		symbol: "drop_variant",
		name: "drop_variant",
		description: "Drops the named tag e.g. objectsehiclesansheeanshee.vehicle using the specified variant name",
		arguments: [
			"string",
			"string"
		],
		id: "drop_variant"
	},
	{
		symbol: "drop_permutation",
		name: "drop_permutation",
		description: "Drops the named tag e.g. objects\\charactersruterute.biped using the specified permutation. permutations are specified as a comma-delimited string of region=permutation pairs (e.g. region1=permutation1,region2=permutation2).",
		arguments: [
			"string",
			"string"
		],
		id: "drop_permutation"
	},
	{
		symbol: "mp_wake_script",
		name: "mp_wake_script",
		description: "On the host in a distributed game, sends a message to clients to wake a dormant script",
		arguments: [
			"string"
		],
		id: "mp_wake_script"
	}
];

export default H3Functions;

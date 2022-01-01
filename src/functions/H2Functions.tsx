// @ts-nocheck
import FunctionType from "../types/function-type/FunctionType";

const H2Functions: FunctionType[] = [
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
		symbol: "damage_object",
		name: "damage_object",
		description: "Causes the specified damage at the specified object.",
		arguments: [
			"damage",
			"object"
		],
		id: "damage_object"
	},
	{
		symbol: "damage_objects",
		name: "damage_objects",
		description: "Causes the specified damage at the specified object list.",
		arguments: [
			"damage",
			"object_list"
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
		symbol: "object_create_clone",
		name: "object_create_clone",
		description: "Creates an object, potentially resulting in multiple objects if it already exists.",
		arguments: [
			"object_name"
		],
		id: "object_create_clone"
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
		symbol: "object_destroy_type_mask",
		name: "object_destroy_type_mask",
		description: "Destroys all objects matching the type mask",
		arguments: [
			"long"
		],
		id: "object_destroy_type_mask"
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
		symbol: "object_uses_cinematic_lighting",
		name: "object_uses_cinematic_lighting",
		description: "Makes an object use the cinematic directional and ambient lights instead of sampling the lightmap.",
		arguments: [
			"object",
			"boolean"
		],
		id: "object_uses_cinematic_lighting"
	},
	{
		symbol: "cinematic_lighting_set_primary_light",
		name: "cinematic_lighting_set_primary_light",
		description: "Sets the pitch, yaw, and color (red, green, blue) of the cinematic shadowing diffuse and specular directional light.",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "cinematic_lighting_set_primary_light"
	},
	{
		symbol: "cinematic_lighting_set_secondary_light",
		name: "cinematic_lighting_set_secondary_light",
		description: "Sets the pitch, yaw, and color (red, green, blue) of the cinematic non-shadowing diffuse directional light.",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "cinematic_lighting_set_secondary_light"
	},
	{
		symbol: "cinematic_lighting_set_ambient_light",
		name: "cinematic_lighting_set_ambient_light",
		description: "Sets the color (red, green, blue) of the cinematic ambient light.",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "cinematic_lighting_set_ambient_light"
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
		description: "Prints the current map and bsp name and index",
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
		symbol: "havok_profile_end",
		name: "havok_profile_end",
		description: "Start profiling havok",
		arguments: [],
		id: "havok_profile_end"
	},
	{
		symbol: "havok_reset_allocated_state",
		name: "havok_reset_allocated_state",
		description: "Strips down and builds back up all allocated havok memory",
		arguments: [],
		id: "havok_reset_allocated_state"
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
		symbol: "texture_camera_off",
		name: "texture_camera_off",
		description: "Turns off the render texture camera",
		arguments: [],
		id: "texture_camera_off"
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
		symbol: "fog_report",
		name: "fog_report",
		description: ";",
		arguments: [],
		id: "fog_report"
	},
	{
		symbol: "fog_report_summary",
		name: "fog_report_summary",
		description: ";",
		arguments: [],
		id: "fog_report_summary"
	},
	{
		symbol: "fog_report_verbose",
		name: "fog_report_verbose",
		description: ";",
		arguments: [],
		id: "fog_report_verbose"
	},
	{
		symbol: "fog_mode_control",
		name: "fog_mode_control",
		description: ";",
		arguments: [
			"boolean",
			"boolean",
			"boolean",
			"boolean"
		],
		id: "fog_mode_control"
	},
	{
		symbol: "fog_override_off",
		name: "fog_override_off",
		description: ";",
		arguments: [],
		id: "fog_override_off"
	},
	{
		symbol: "fog_override_mode",
		name: "fog_override_mode",
		description: ";",
		arguments: [
			"long"
		],
		id: "fog_override_mode"
	},
	{
		symbol: "fog_override_mode_off",
		name: "fog_override_mode_off",
		description: ";",
		arguments: [],
		id: "fog_override_mode_off"
	},
	{
		symbol: "fog_override_atmospheric_fog",
		name: "fog_override_atmospheric_fog",
		description: ";",
		arguments: [
			"real",
			"string",
			"real",
			"real"
		],
		id: "fog_override_atmospheric_fog"
	},
	{
		symbol: "fog_override_atmospheric_fog_off",
		name: "fog_override_atmospheric_fog_off",
		description: ";",
		arguments: [],
		id: "fog_override_atmospheric_fog_off"
	},
	{
		symbol: "fog_override_secondary_fog",
		name: "fog_override_secondary_fog",
		description: ";",
		arguments: [
			"real",
			"string",
			"real",
			"real"
		],
		id: "fog_override_secondary_fog"
	},
	{
		symbol: "fog_override_secondary_fog_off",
		name: "fog_override_secondary_fog_off",
		description: ";",
		arguments: [],
		id: "fog_override_secondary_fog_off"
	},
	{
		symbol: "fog_override_sky_fog",
		name: "fog_override_sky_fog",
		description: ";",
		arguments: [
			"real",
			"string"
		],
		id: "fog_override_sky_fog"
	},
	{
		symbol: "fog_override_sky_fog_off",
		name: "fog_override_sky_fog_off",
		description: ";",
		arguments: [],
		id: "fog_override_sky_fog_off"
	},
	{
		symbol: "fog_override_planar_fog",
		name: "fog_override_planar_fog",
		description: ";",
		arguments: [
			"real",
			"string",
			"real",
			"real",
			"real"
		],
		id: "fog_override_planar_fog"
	},
	{
		symbol: "fog_override_planar_fog_off",
		name: "fog_override_planar_fog_off",
		description: ";",
		arguments: [],
		id: "fog_override_planar_fog_off"
	},
	{
		symbol: "fog_override_planar_fog_plane",
		name: "fog_override_planar_fog_plane",
		description: ";",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "fog_override_planar_fog_plane"
	},
	{
		symbol: "fog_override_planar_fog_plane_off",
		name: "fog_override_planar_fog_plane_off",
		description: ";",
		arguments: [],
		id: "fog_override_planar_fog_plane_off"
	},
	{
		symbol: "fog_override_planar_max_atmospheric_depth",
		name: "fog_override_planar_max_atmospheric_depth",
		description: ";",
		arguments: [
			"real"
		],
		id: "fog_override_planar_max_atmospheric_depth"
	},
	{
		symbol: "fog_override_planar_max_atmospheric_depth_off",
		name: "fog_override_planar_max_atmospheric_depth_off",
		description: ";",
		arguments: [],
		id: "fog_override_planar_max_atmospheric_depth_off"
	},
	{
		symbol: "fog_override_planar_planar_eye_density",
		name: "fog_override_planar_planar_eye_density",
		description: ";",
		arguments: [
			"real"
		],
		id: "fog_override_planar_planar_eye_density"
	},
	{
		symbol: "fog_override_planar_planar_eye_density_off",
		name: "fog_override_planar_planar_eye_density_off",
		description: ";",
		arguments: [],
		id: "fog_override_planar_planar_eye_density_off"
	},
	{
		symbol: "fog_override_atmospheric_secondary_blend",
		name: "fog_override_atmospheric_secondary_blend",
		description: ";",
		arguments: [
			"real"
		],
		id: "fog_override_atmospheric_secondary_blend"
	},
	{
		symbol: "fog_override_atmospheric_secondary_blend_off",
		name: "fog_override_atmospheric_secondary_blend_off",
		description: ";",
		arguments: [],
		id: "fog_override_atmospheric_secondary_blend_off"
	},
	{
		symbol: "fog_override_atmospheric_planar_blend",
		name: "fog_override_atmospheric_planar_blend",
		description: ";",
		arguments: [
			"real"
		],
		id: "fog_override_atmospheric_planar_blend"
	},
	{
		symbol: "fog_override_atmospheric_planar_blend_off",
		name: "fog_override_atmospheric_planar_blend_off",
		description: ";",
		arguments: [],
		id: "fog_override_atmospheric_planar_blend_off"
	},
	{
		symbol: "render_debug_structure_cluster_visibility",
		name: "render_debug_structure_cluster_visibility",
		description: "Enables cluster visibility debugging",
		arguments: [
			"long"
		],
		id: "render_debug_structure_cluster_visibility"
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
			"short"
		],
		id: "unit_set_emotion"
	},
	{
		symbol: "unit_set_emotion_animation",
		name: "unit_set_emotion_animation",
		description: "Sets the emotion animation to be used for the given unit",
		arguments: [
			"unit",
			"string_id"
		],
		id: "unit_set_emotion_animation"
	},
	{
		symbol: "unit_set_emotional_state",
		name: "unit_set_emotional_state",
		description: "Sets a unit's facial expression by name with weight and transition time",
		arguments: [
			"unit",
			"string_id",
			"real",
			"short"
		],
		id: "unit_set_emotional_state"
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
		symbol: "ai_overcomes_oversteer",
		name: "ai_overcomes_oversteer",
		description: "Don't use this for anything other than bug 3926.  AI magically cancels vehicle oversteer.",
		arguments: [
			"ai",
			"boolean"
		],
		id: "ai_overcomes_oversteer"
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
		symbol: "ai_teleport_to_starting_location_if_outside_bsp",
		name: "ai_teleport_to_starting_location_if_outside_bsp",
		description: "Teleports a group of actors to the starting locations of their current squad(s) if they are currently outside the world.",
		arguments: [
			"ai"
		],
		id: "ai_teleport_to_starting_location_if_outside_bsp"
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
		symbol: "ai_set_orders",
		name: "ai_set_orders",
		description: "Takes the squad or squad group (arg1) and gives it the order (arg3) in zone (arg2). Use the zone_name/order_name format",
		arguments: [
			"ai",
			"ai_orders"
		],
		id: "ai_set_orders"
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
		symbol: "ai_trigger_test",
		name: "ai_trigger_test",
		description: "Tests the named trigger on the named squad",
		arguments: [
			"string",
			"ai"
		],
		returns: "boolean",
		id: "ai_trigger_test"
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
			"string_id",
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
			"string_id"
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
			"string_id"
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
			"string_id"
		],
		returns: "real",
		id: "ai_play_line_on_object"
	},
	{
		symbol: "ai_scene",
		name: "ai_scene",
		description: "Start the named scene, with the named command script on the named squad",
		arguments: [
			"string_id",
			"ai_command_script",
			"ai"
		],
		returns: "boolean",
		id: "ai_scene"
	},
	{
		symbol: "ai_scene",
		name: "ai_scene",
		description: "Start the named scene, with the named command script on the named set of squads",
		arguments: [
			"string_id",
			"ai_command_script",
			"ai",
			"ai"
		],
		returns: "boolean",
		id: "ai_scene1"
	},
	{
		symbol: "ai_scene",
		name: "ai_scene",
		description: "Start the named scene, with the named command script on the named set of squads",
		arguments: [
			"string_id",
			"ai_command_script",
			"ai",
			"ai",
			"ai"
		],
		returns: "boolean",
		id: "ai_scene2"
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
		symbol: "cs_run_joint_command_script",
		name: "cs_run_joint_command_script",
		description: "Causes the specified actor(s) to start executing a command script immediately (discarding any other command scripts in the queue)",
		arguments: [
			"ai_command_script",
			"ai",
			"ai"
		],
		id: "cs_run_joint_command_script"
	},
	{
		symbol: "cs_run_joint_command_script",
		name: "cs_run_joint_command_script",
		description: "Causes the specified actor(s) to start executing a command script immediately (discarding any other command scripts in the queue)",
		arguments: [
			"ai_command_script",
			"ai",
			"ai",
			"ai"
		],
		id: "cs_run_joint_command_script1"
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
		symbol: "cs_switch",
		name: "cs_switch",
		description: "Switch control of the joint command script to the given member",
		arguments: [
			"string_id"
		],
		id: "cs_switch"
	},
	{
		symbol: "cs_switch_index",
		name: "cs_switch_index",
		description: "Switch control of the joint command script to the given member",
		arguments: [
			"short"
		],
		id: "cs_switch_index"
	},
	{
		symbol: "cs_transfer",
		name: "cs_transfer",
		description: "Transfer control of the command script to the given actor (replacing what he has)",
		arguments: [
			"ai"
		],
		id: "cs_transfer"
	},
	{
		symbol: "cs_transfer_stack",
		name: "cs_transfer_stack",
		description: "Transfer control of the command script to the given actor (stacking it)",
		arguments: [
			"ai"
		],
		id: "cs_transfer_stack"
	},
	{
		symbol: "cs_transfer_queue",
		name: "cs_transfer_queue",
		description: "Transfer control of the command script to the given actor (queueing it)",
		arguments: [
			"ai"
		],
		id: "cs_transfer_queue"
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
		symbol: "cs_fly_by",
		name: "cs_fly_by",
		description: "Flies the actor through the given point",
		arguments: [
			"point_reference"
		],
		id: "cs_fly_by"
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
		symbol: "cs_go_to",
		name: "cs_go_to",
		description: "Moves the actor to a specified point",
		arguments: [
			"point_reference"
		],
		id: "cs_go_to"
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
		symbol: "cs_start_to",
		name: "cs_start_to",
		description: "Moves the actor to a specified point. DOES NOT BLOCK SCRIPT EXECUTION.",
		arguments: [
			"point_reference"
		],
		id: "cs_start_to"
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
		symbol: "cs_moving",
		name: "cs_moving",
		description: "Returns TRUE if the actor is currently following a path",
		arguments: [],
		returns: "boolean",
		id: "cs_moving"
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
		symbol: "cs_look_player",
		name: "cs_look_player",
		description: "Actor looks at nearest player for the duration of the cs, or until overridden",
		arguments: [
			"boolean"
		],
		id: "cs_look_player"
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
		symbol: "cs_aim_player",
		name: "cs_aim_player",
		description: "Actor aims at nearest player for the duration of the cs, or until overridden (overrides look)",
		arguments: [
			"boolean"
		],
		id: "cs_aim_player"
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
		symbol: "cs_face_player",
		name: "cs_face_player",
		description: "Actor faces exactly the nearest player for the duration of the cs, or until overridden (overrides aim, look)",
		arguments: [
			"boolean"
		],
		id: "cs_face_player"
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
		symbol: "cs_pause",
		name: "cs_pause",
		description: "The actor does nothing for the given number of seconds",
		arguments: [
			"real"
		],
		id: "cs_pause"
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
		symbol: "cs_vehicle_speed",
		name: "cs_vehicle_speed",
		description: "Set the speed at which the actor will drive a vehicle, expressed as a multiplier 0-1",
		arguments: [
			"real"
		],
		id: "cs_vehicle_speed"
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
		symbol: "cs_vocalize",
		name: "cs_vocalize",
		description: "Actor emits vocalization of given type",
		arguments: [
			"short"
		],
		id: "cs_vocalize"
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
		symbol: "cs_stop_sound",
		name: "cs_stop_sound",
		description: "Stops the specified impulse sound.",
		arguments: [
			"sound"
		],
		id: "cs_stop_sound"
	},
	{
		symbol: "cs_custom_animation",
		name: "cs_custom_animation",
		description: "Starts a custom animation playing on the unit (interpolates into animation if last parameter is TRUE)",
		arguments: [
			"animation_graph",
			"string_id",
			"real",
			"boolean"
		],
		id: "cs_custom_animation"
	},
	{
		symbol: "cs_stop_custom_animation",
		name: "cs_stop_custom_animation",
		description: "Stop running a custom animation",
		arguments: [],
		id: "cs_stop_custom_animation"
	},
	{
		symbol: "cs_play_line",
		name: "cs_play_line",
		description: "Play the named line in the current scene",
		arguments: [
			"string_id"
		],
		id: "cs_play_line"
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
		symbol: "cs_animate",
		name: "cs_animate",
		description: "Actor performs animation with given modifier (anim-ref, modifier)",
		arguments: [
			"long",
			"short"
		],
		id: "cs_animate"
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
		symbol: "cs_crouch",
		name: "cs_crouch",
		description: "Actor crouches for the remainder of the command script, or until overridden",
		arguments: [
			"boolean"
		],
		id: "cs_crouch"
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
		symbol: "cs_set_pathfinding_radius",
		name: "cs_set_pathfinding_radius",
		description: "Sets the actor's pathfinding radius (this distance at which a destination is considered to have been reached) for the remainder of the command script",
		arguments: [
			"real"
		],
		id: "cs_set_pathfinding_radius"
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
		symbol: "cs_set_behavior",
		name: "cs_set_behavior",
		description: "Actor performs the indicated behavior",
		arguments: [
			"ai_behavior"
		],
		id: "cs_set_behavior"
	},
	{
		symbol: "cs_formation",
		name: "cs_formation",
		description: "Actor initiates a formation of the given type at the given point, facing (initially) at the given other point. Formation types are (0) 1x column (1) 2x column ... (4) wall (5) wedge.",
		arguments: [
			"short",
			"ai",
			"point_reference",
			"point_reference"
		],
		id: "cs_formation"
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
		symbol: "cs_approach",
		name: "cs_approach",
		description: "(approach <object> <distance> <max-distance> <follow-distance>)",
		arguments: [
			"object",
			"real",
			"real",
			"real"
		],
		id: "cs_approach"
	},
	{
		symbol: "cs_start_approach",
		name: "cs_start_approach",
		description: "(approach <object> <distance> <max-distance> <follow-distance>) NON-BLOCKING",
		arguments: [
			"object",
			"real",
			"real",
			"real"
		],
		id: "cs_start_approach"
	},
	{
		symbol: "cs_approach_player",
		name: "cs_approach_player",
		description: "(approach player <distance> <max-distance> <follow-distance>)",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "cs_approach_player"
	},
	{
		symbol: "cs_start_approach_player",
		name: "cs_start_approach_player",
		description: "(approach <distance> <max-distance> <follow-distance>) NON-BLOCKING",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "cs_start_approach_player"
	},
	{
		symbol: "cs_approach_stop",
		name: "cs_approach_stop",
		description: "Actor stops approaching",
		arguments: [],
		id: "cs_approach_stop"
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
		symbol: "cs_vehicle_speed_instantaneous",
		name: "cs_vehicle_speed_instantaneous",
		description: "Set the instantaneous speed of the vehicle we're driving",
		arguments: [
			"real"
		],
		id: "cs_vehicle_speed_instantaneous"
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
		symbol: "cs_enable_targeting",
		name: "cs_enable_targeting",
		description: "Actor autonomous target selection enabled/disabled.",
		arguments: [
			"boolean"
		],
		id: "cs_enable_targeting"
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
		symbol: "cs_enable_moving",
		name: "cs_enable_moving",
		description: "Actor autonomous moving enabled/disabled.",
		arguments: [
			"boolean"
		],
		id: "cs_enable_moving"
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
		symbol: "cs_suppress_dialogue_global",
		name: "cs_suppress_dialogue_global",
		description: "Combat dialogue is suppressed for the remainder of the command script",
		arguments: [
			"boolean"
		],
		id: "cs_suppress_dialogue_global"
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
		symbol: "cs_force_combat_status",
		name: "cs_force_combat_status",
		description: "Force the actor's combat status (0= no override, 1= asleep, 2=idle, 3= alert, 4= active)",
		arguments: [
			"short"
		],
		id: "cs_force_combat_status"
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
		symbol: "player_disable_movement",
		name: "player_disable_movement",
		description: "Toggle player input. the look stick works, but nothing else.",
		arguments: [
			"boolean"
		],
		id: "player_disable_movement"
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
		symbol: "player_action_test_look_up_begin",
		name: "player_action_test_look_up_begin",
		description: "Sets up player look up test",
		arguments: [],
		id: "player_action_test_look_up_begin"
	},
	{
		symbol: "player_action_test_look_down_begin",
		name: "player_action_test_look_down_begin",
		description: "Sets down player look down test",
		arguments: [],
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
		symbol: "switch_bsp",
		name: "switch_bsp",
		description: "Takes off your condom and changes to a different structure bsp",
		arguments: [
			"short"
		],
		id: "switch_bsp"
	},
	{
		symbol: "switch_bsp_by_name",
		name: "switch_bsp_by_name",
		description: "Leaves your condom on and changes to a different structure bsp by name",
		arguments: [
			"structure_bsp"
		],
		id: "switch_bsp_by_name"
	},
	{
		symbol: "structure_bsp_index",
		name: "structure_bsp_index",
		description: "Returns the current structure bsp index",
		arguments: [],
		returns: "short",
		id: "structure_bsp_index"
	},
	{
		symbol: "record_movie",
		name: "record_movie",
		description: "<frame rate> <seconds> <screen size>",
		arguments: [
			"short",
			"long",
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
		symbol: "screenshot_big_jittered",
		name: "screenshot_big_jittered",
		description: "Takes an NxN subpixel sampled 640x480 screenshot and saves as <name>.tif",
		arguments: [
			"short",
			"string"
		],
		id: "screenshot_big_jittered"
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
		description: "Debug map launching: sets the multiplayer variant for the next map.",
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
		symbol: "game_coop_players",
		name: "game_coop_players",
		description: "Debug map launching: sets the number of coop players for the next map.",
		arguments: [
			"long"
		],
		id: "game_coop_players"
	},
	{
		symbol: "game_initial_bsp",
		name: "game_initial_bsp",
		description: "Debug map launching: sets the initial bsp for the next map.",
		arguments: [
			"long"
		],
		id: "game_initial_bsp"
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
		symbol: "ai_debug_sound_point_set",
		name: "ai_debug_sound_point_set",
		description: "Drops the AI debugging sound point at the camera location",
		arguments: [],
		id: "ai_debug_sound_point_set"
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
		symbol: "debug_spawning",
		name: "debug_spawning",
		description: "Debugs spawn points for the inputted player",
		arguments: [
			"string",
			"boolean"
		],
		id: "debug_spawning"
	},
	{
		symbol: "king_set_hill",
		name: "king_set_hill",
		description: "Sets which index the active hill should be",
		arguments: [
			"long"
		],
		id: "king_set_hill"
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
		description: ";",
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
		symbol: "sound_set_trace_callback_level",
		name: "sound_set_trace_callback_level",
		description: "Set Miles tracing callback depth",
		arguments: [
			"long"
		],
		id: "sound_set_trace_callback_level"
	},
	{
		symbol: "sound_dump_miles_debug",
		name: "sound_dump_miles_debug",
		description: "Dump Miles timing info and other goodies",
		arguments: [],
		id: "sound_dump_miles_debug"
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
		symbol: "hud_cinematic_fade",
		name: "hud_cinematic_fade",
		description: "Parameter 1 is how, parameter 2 is when",
		arguments: [
			"real",
			"real"
		],
		id: "hud_cinematic_fade"
	},
	{
		symbol: "show_hud",
		name: "show_hud",
		description: "Shows or hides the hud",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "show_hud"
	},
	{
		symbol: "show_hud_help_text",
		name: "show_hud_help_text",
		description: "Shows or hides the hud help text",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "show_hud_help_text"
	},
	{
		symbol: "show_hud_messages",
		name: "show_hud_messages",
		description: "Shows or hides the hud messages",
		arguments: [
			"boolean"
		],
		returns: "boolean",
		id: "show_hud_messages"
	},
	{
		symbol: "enable_hud_help_flash",
		name: "enable_hud_help_flash",
		description: "Starts/stops the help text flashing",
		arguments: [
			"boolean"
		],
		id: "enable_hud_help_flash"
	},
	{
		symbol: "hud_help_flash_restart",
		name: "hud_help_flash_restart",
		description: "Resets the timer for the help text flashing",
		arguments: [],
		id: "hud_help_flash_restart"
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
		symbol: "activate_nav_point_flag",
		name: "activate_nav_point_flag",
		description: "Activates a nav point type <string> attached to (local) player <unit> anchored to a flag with a vertical offset <real>. If the player is not local to the machine, this will fail",
		arguments: [
			"navpoint",
			"unit",
			"cutscene_flag",
			"real"
		],
		id: "activate_nav_point_flag"
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
		],
		id: "activate_nav_point_object"
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
		],
		id: "activate_team_nav_point_flag"
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
		],
		id: "activate_team_nav_point_object"
	},
	{
		symbol: "deactivate_nav_point_flag",
		name: "deactivate_nav_point_flag",
		description: "Deactivates a nav point type attached to a player <unit> anchored to a flag",
		arguments: [
			"unit",
			"cutscene_flag"
		],
		id: "deactivate_nav_point_flag"
	},
	{
		symbol: "deactivate_nav_point_object",
		name: "deactivate_nav_point_object",
		description: "Deactivates a nav point type attached to a player <unit> anchored to an object",
		arguments: [
			"unit",
			"object"
		],
		id: "deactivate_nav_point_object"
	},
	{
		symbol: "deactivate_team_nav_point_flag",
		name: "deactivate_team_nav_point_flag",
		description: "Deactivates a nav point type attached to a team anchored to a flag",
		arguments: [
			"team",
			"cutscene_flag"
		],
		id: "deactivate_team_nav_point_flag"
	},
	{
		symbol: "deactivate_team_nav_point_object",
		name: "deactivate_team_nav_point_object",
		description: "Deactivates a nav point type attached to a team anchored to an object",
		arguments: [
			"team",
			"object"
		],
		id: "deactivate_team_nav_point_object"
	},
	{
		symbol: "error_overflow_suppression",
		name: "error_overflow_suppression",
		description: "Enables or disables the suppression of error spamming",
		arguments: [
			"boolean"
		],
		id: "error_overflow_suppression"
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
		symbol: "player_effect_set_max_vibration",
		name: "player_effect_set_max_vibration",
		description: "<left> <right>",
		arguments: [
			"real",
			"real"
		],
		id: "player_effect_set_max_vibration"
	},
	{
		symbol: "hud_clear_messages",
		name: "hud_clear_messages",
		description: "Clears all non-state messages on the hud",
		arguments: [],
		id: "hud_clear_messages"
	},
	{
		symbol: "hud_set_help_text",
		name: "hud_set_help_text",
		description: "Displays <message> as the help text",
		arguments: [
			"hud_message"
		],
		id: "hud_set_help_text"
	},
	{
		symbol: "hud_set_objective_text",
		name: "hud_set_objective_text",
		description: "Sets <message> as the current objective",
		arguments: [
			"hud_message"
		],
		id: "hud_set_objective_text"
	},
	{
		symbol: "hud_set_timer_time",
		name: "hud_set_timer_time",
		description: "Sets the time for the timer to <short> minutes and <short> seconds, and starts and displays timer",
		arguments: [
			"short",
			"short"
		],
		id: "hud_set_timer_time"
	},
	{
		symbol: "hud_set_timer_warning_time",
		name: "hud_set_timer_warning_time",
		description: "Sets the warning time for the timer to <short> minutes and <short> seconds",
		arguments: [
			"short",
			"short"
		],
		id: "hud_set_timer_warning_time"
	},
	{
		symbol: "hud_set_timer_position",
		name: "hud_set_timer_position",
		description: "Sets the timer upper left position to (x, y)=>(<short>, <short>)",
		arguments: [
			"short",
			"short",
			"hud_corner"
		],
		id: "hud_set_timer_position"
	},
	{
		symbol: "show_hud_timer",
		name: "show_hud_timer",
		description: "Displays the hud timer",
		arguments: [
			"boolean"
		],
		id: "show_hud_timer"
	},
	{
		symbol: "pause_hud_timer",
		name: "pause_hud_timer",
		description: "Pauses or unpauses the hud timer",
		arguments: [
			"boolean"
		],
		id: "pause_hud_timer"
	},
	{
		symbol: "hud_get_timer_ticks",
		name: "hud_get_timer_ticks",
		description: "Returns the ticks left on the hud timer",
		arguments: [],
		returns: "short",
		id: "hud_get_timer_ticks"
	},
	{
		symbol: "rasterizer_debug_display_bitmap",
		name: "rasterizer_debug_display_bitmap",
		description: "Displays a bitmap",
		arguments: [
			"string"
		],
		id: "rasterizer_debug_display_bitmap"
	},
	{
		symbol: "rasterizer_decals_flush",
		name: "rasterizer_decals_flush",
		description: "Flush all decals",
		arguments: [],
		id: "rasterizer_decals_flush"
	},
	{
		symbol: "rasterizer_lens_flares_clear_for_frame",
		name: "rasterizer_lens_flares_clear_for_frame",
		description: ";",
		arguments: [],
		id: "rasterizer_lens_flares_clear_for_frame"
	},
	{
		symbol: "rasterizer_test_screen",
		name: "rasterizer_test_screen",
		description: ";",
		arguments: [
			"long",
			"real",
			"real"
		],
		id: "rasterizer_test_screen"
	},
	{
		symbol: "rasterizer_test_screen_supablur",
		name: "rasterizer_test_screen_supablur",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_test_screen_supablur"
	},
	{
		symbol: "rasterizer_test_screen_off",
		name: "rasterizer_test_screen_off",
		description: ";",
		arguments: [],
		id: "rasterizer_test_screen_off"
	},
	{
		symbol: "rasterizer_f2",
		name: "rasterizer_f2",
		description: ";",
		arguments: [
			"real",
			"real"
		],
		id: "rasterizer_f2"
	},
	{
		symbol: "rasterizer_f3",
		name: "rasterizer_f3",
		description: ";",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "rasterizer_f3"
	},
	{
		symbol: "rasterizer_f4",
		name: "rasterizer_f4",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_f4"
	},
	{
		symbol: "rasterizer_f5",
		name: "rasterizer_f5",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_f5"
	},
	{
		symbol: "rasterizer_f6",
		name: "rasterizer_f6",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_f6"
	},
	{
		symbol: "rasterizer_decal_depth_bias",
		name: "rasterizer_decal_depth_bias",
		description: "Sets the depth bias offset for decals",
		arguments: [
			"real"
		],
		id: "rasterizer_decal_depth_bias"
	},
	{
		symbol: "rasterizer_decal_depth_bias_slope_scale",
		name: "rasterizer_decal_depth_bias_slope_scale",
		description: "Sets the depth bias slope scale for decals",
		arguments: [
			"real"
		],
		id: "rasterizer_decal_depth_bias_slope_scale"
	},
	{
		symbol: "rasterizer_hud_ten_foot",
		name: "rasterizer_hud_ten_foot",
		description: "Sets the 10 foot HUD experience implementation",
		arguments: [
			"short"
		],
		id: "rasterizer_hud_ten_foot"
	},
	{
		symbol: "rasterizer_blur",
		name: "rasterizer_blur",
		description: "Sets the blur (0=disabled, 1=4x, 2=16x)",
		arguments: [
			"short"
		],
		id: "rasterizer_blur"
	},
	{
		symbol: "rasterizer_solid_model_color",
		name: "rasterizer_solid_model_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_model_color"
	},
	{
		symbol: "rasterizer_solid_structure_color",
		name: "rasterizer_solid_structure_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_structure_color"
	},
	{
		symbol: "rasterizer_solid_structure_instanced_geometry_color",
		name: "rasterizer_solid_structure_instanced_geometry_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_structure_instanced_geometry_color"
	},
	{
		symbol: "rasterizer_solid_sky_color",
		name: "rasterizer_solid_sky_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_sky_color"
	},
	{
		symbol: "rasterizer_solid_decorator_color",
		name: "rasterizer_solid_decorator_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_decorator_color"
	},
	{
		symbol: "rasterizer_solid_decorator_model_color",
		name: "rasterizer_solid_decorator_model_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_decorator_model_color"
	},
	{
		symbol: "rasterizer_solid_decorator_decal_color",
		name: "rasterizer_solid_decorator_decal_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_decorator_decal_color"
	},
	{
		symbol: "rasterizer_solid_decorator_sprite_color",
		name: "rasterizer_solid_decorator_sprite_color",
		description: ";",
		arguments: [
			"real",
			"real",
			"real",
			"real"
		],
		id: "rasterizer_solid_decorator_sprite_color"
	},
	{
		symbol: "decorator_rebuild_all",
		name: "decorator_rebuild_all",
		description: ";",
		arguments: [],
		id: "decorator_rebuild_all"
	},
	{
		symbol: "cinematic_screen_effect_set_depth_of_field",
		name: "cinematic_screen_effect_set_depth_of_field",
		description: "Sets dof: <seperation dist>, <near blur lower bound> <upper bound> <time> <far blur lower bound> <upper bound> <time>",
		arguments: [
			"real",
			"real",
			"real",
			"real",
			"real",
			"real",
			"real"
		],
		id: "cinematic_screen_effect_set_depth_of_field"
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
		description: ";",
		arguments: [
			"real"
		],
		id: "cinematic_set_far_clip_distance"
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
		symbol: "cinematic_dynamic_reflections",
		name: "cinematic_dynamic_reflections",
		description: "Sets up dynamic reflections: <enabled: [true, false]> <filtering enabled: [true, false]>",
		arguments: [
			"boolean",
			"boolean"
		],
		id: "cinematic_dynamic_reflections"
	},
	{
		symbol: "lightmaps_expose",
		name: "lightmaps_expose",
		description: "Re-exposes the lightmap palettes",
		arguments: [
			"real",
			"real",
			"real"
		],
		id: "lightmaps_expose"
	},
	{
		symbol: "player_profile_create",
		name: "player_profile_create",
		description: "Create a player profile",
		arguments: [
			"string",
			"short",
			"short",
			"boolean",
			"boolean",
			"boolean"
		],
		id: "player_profile_create"
	},
	{
		symbol: "player_profile_create_corrupt",
		name: "player_profile_create_corrupt",
		description: "Create a corrupt player profile, for ui testing",
		arguments: [
			"string"
		],
		id: "player_profile_create_corrupt"
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
		symbol: "controller_unlock_solo_levels",
		name: "controller_unlock_solo_levels",
		description: "Unlocks all the solo player levels for <controller index>'s profile",
		arguments: [
			"short"
		],
		id: "controller_unlock_solo_levels"
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
		symbol: "ui_debug_screen_tag",
		name: "ui_debug_screen_tag",
		description: "Test a ui screen",
		arguments: [
			"string"
		],
		id: "ui_debug_screen_tag"
	},
	{
		symbol: "ui_transition_out_console_window",
		name: "ui_transition_out_console_window",
		description: "Transition out any ui on the console window",
		arguments: [],
		id: "ui_transition_out_console_window"
	},
	{
		symbol: "ui_debug_show_screen_tag_path",
		name: "ui_debug_show_screen_tag_path",
		description: "Display tag path of screens as they load",
		arguments: [
			"boolean"
		],
		id: "ui_debug_show_screen_tag_path"
	},
	{
		symbol: "ui_debug_show_current_screen_tag",
		name: "ui_debug_show_current_screen_tag",
		description: "Displays the current tag path on a specified channel",
		arguments: [
			"string"
		],
		id: "ui_debug_show_current_screen_tag"
	},
	{
		symbol: "ui_set_beta",
		name: "ui_set_beta",
		description: "Set ui beta testing on/off",
		arguments: [
			"boolean"
		],
		id: "ui_set_beta"
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
		symbol: "ui_set_automation_mode",
		name: "ui_set_automation_mode",
		description: "Set ui automation mode",
		arguments: [
			"string"
		],
		id: "ui_set_automation_mode"
	},
	{
		symbol: "ui_set_automation_hopper_type",
		name: "ui_set_automation_hopper_type",
		description: "Set ui / mp automation hopper",
		arguments: [
			"short"
		],
		id: "ui_set_automation_hopper_type"
	},
	{
		symbol: "ui_set_automation_variant_type_and_map",
		name: "ui_set_automation_variant_type_and_map",
		description: "Set ui / mp automation variant and mp map",
		arguments: [
			"short",
			"long"
		],
		id: "ui_set_automation_variant_type_and_map"
	},
	{
		symbol: "ui_set_automation_desired_local_user_count",
		name: "ui_set_automation_desired_local_user_count",
		description: "Set ui / mp automation desired local user count",
		arguments: [
			"short"
		],
		id: "ui_set_automation_desired_local_user_count"
	},
	{
		symbol: "ui_set_automation_desired_desired_network_game_player_count",
		name: "ui_set_automation_desired_desired_network_game_player_count",
		description: "Set ui / mp automation desired network game player count",
		arguments: [
			"short"
		],
		id: "ui_set_automation_desired_desired_network_game_player_count"
	},
	{
		symbol: "ui_set_automation_desired_network_game_length_seconds",
		name: "ui_set_automation_desired_network_game_length_seconds",
		description: "Set ui / mp automation desired game time length",
		arguments: [
			"long"
		],
		id: "ui_set_automation_desired_network_game_length_seconds"
	},
	{
		symbol: "ui_set_automation_desired_network_session_name",
		name: "ui_set_automation_desired_network_session_name",
		description: "Set ui / mp automation desired session name",
		arguments: [
			"string"
		],
		id: "ui_set_automation_desired_network_session_name"
	},
	{
		symbol: "ui_set_automation_desired_controller_team",
		name: "ui_set_automation_desired_controller_team",
		description: "Set desired mp team for a controller",
		arguments: [
			"short",
			"short"
		],
		id: "ui_set_automation_desired_controller_team"
	},
	{
		symbol: "ui_set_automation_desired_controller_player_profile",
		name: "ui_set_automation_desired_controller_player_profile",
		description: "Set desired player profile and gamertag for a controller",
		arguments: [
			"short",
			"string",
			"string"
		],
		id: "ui_set_automation_desired_controller_player_profile"
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
		description: "Show objectives 0..n",
		arguments: [
			"long"
		],
		id: "objectives_show_up_to"
	},
	{
		symbol: "objectives_finish_up_to",
		name: "objectives_finish_up_to",
		description: "Mark objectives 0..n as complete",
		arguments: [
			"long"
		],
		id: "objectives_finish_up_to"
	},
	{
		symbol: "input_suppress_vibration",
		name: "input_suppress_vibration",
		description: "Disable the friggin' vibration",
		arguments: [
			"boolean"
		],
		id: "input_suppress_vibration"
	},
	{
		symbol: "update_remote_camera",
		name: "update_remote_camera",
		description: "Force synchronization of remote machine camera",
		arguments: [],
		id: "update_remote_camera"
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
		symbol: "net_test_channel_loopback",
		name: "net_test_channel_loopback",
		description: "Network test: creates loopback channels",
		arguments: [],
		id: "net_test_channel_loopback"
	},
	{
		symbol: "net_test_channel_delete",
		name: "net_test_channel_delete",
		description: "Network test: deletes all channels",
		arguments: [],
		id: "net_test_channel_delete"
	},
	{
		symbol: "net_test_leave_squad",
		name: "net_test_leave_squad",
		description: "Network test: leave current squad",
		arguments: [],
		id: "net_test_leave_squad"
	},
	{
		symbol: "net_test_delegate_host",
		name: "net_test_delegate_host",
		description: "Network test: delegate hosting to the specified player",
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
		symbol: "net_test_matchmaking_hopper_list",
		name: "net_test_matchmaking_hopper_list",
		description: "Network test: lists all available hoppers",
		arguments: [],
		id: "net_test_matchmaking_hopper_list"
	},
	{
		symbol: "net_test_matchmaking_hopper_print",
		name: "net_test_matchmaking_hopper_print",
		description: "Network test: prints out the maps, games and frequencies for a hopper",
		arguments: [
			"long"
		],
		id: "net_test_matchmaking_hopper_print"
	},
	{
		symbol: "net_test_matchmaking_hopper_set_game",
		name: "net_test_matchmaking_hopper_set_game",
		description: "Network test: retrieves a specific game within a hopper and sets it into an arranged game",
		arguments: [
			"long",
			"long"
		],
		id: "net_test_matchmaking_hopper_set_game"
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
		symbol: "net_event_display_category",
		name: "net_event_display_category",
		description: "Sets the display level for a named category of network events",
		arguments: [
			"string",
			"network_event"
		],
		id: "net_event_display_category"
	},
	{
		symbol: "net_event_log_category",
		name: "net_event_log_category",
		description: "Sets the log level for a named category of network events",
		arguments: [
			"string",
			"network_event"
		],
		id: "net_event_log_category"
	},
	{
		symbol: "net_event_list_categories",
		name: "net_event_list_categories",
		description: "Lists all categories that exist under a particular category string",
		arguments: [
			"string"
		],
		id: "net_event_list_categories"
	},
	{
		symbol: "online_task_list",
		name: "online_task_list",
		description: "Lists all active online tasks",
		arguments: [],
		id: "online_task_list"
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
		symbol: "play_credits",
		name: "play_credits",
		description: "Ur...",
		arguments: [],
		id: "play_credits"
	},
	{
		symbol: "bink_done",
		name: "bink_done",
		description: "Returns true if the movie is done playing",
		arguments: [],
		returns: "boolean",
		id: "bink_done"
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
		symbol: "data_mine_display_mission_segment",
		name: "data_mine_display_mission_segment",
		description: "Display the current mission segment",
		arguments: [
			"boolean"
		],
		id: "data_mine_display_mission_segment"
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
		symbol: "data_mine_playback",
		name: "data_mine_playback",
		description: "Loads and displays data mine data from a file",
		arguments: [
			"string"
		],
		id: "data_mine_playback"
	},
	{
		symbol: "data_mine_playback_last",
		name: "data_mine_playback_last",
		description: "Loads and displays last data mine data",
		arguments: [],
		id: "data_mine_playback_last"
	},
	{
		symbol: "data_mine_playback_exit",
		name: "data_mine_playback_exit",
		description: "Exit data visualization",
		arguments: [],
		id: "data_mine_playback_exit"
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
		symbol: "data_mine_track_event",
		name: "data_mine_track_event",
		description: "Enable mining of an event",
		arguments: [
			"string"
		],
		id: "data_mine_track_event"
	},
	{
		symbol: "data_mine_display_event",
		name: "data_mine_display_event",
		description: "Enable displaying of an event",
		arguments: [
			"string"
		],
		id: "data_mine_display_event"
	},
	{
		symbol: "data_mine_show_all_events",
		name: "data_mine_show_all_events",
		description: "Show all data mine events",
		arguments: [],
		id: "data_mine_show_all_events"
	},
	{
		symbol: "data_mine_show_tracked_events",
		name: "data_mine_show_tracked_events",
		description: "Show what events are being tracked by the data mine",
		arguments: [],
		id: "data_mine_show_tracked_events"
	},
	{
		symbol: "data_mine_show_displayed_events",
		name: "data_mine_show_displayed_events",
		description: "Show what events are being displayed by the data mine",
		arguments: [],
		id: "data_mine_show_displayed_events"
	},
	{
		symbol: "data_mine_display_session_data",
		name: "data_mine_display_session_data",
		description: "Show data mine session, game, and network ids",
		arguments: [],
		id: "data_mine_display_session_data"
	},
	{
		symbol: "data_mine_display_disk_writes",
		name: "data_mine_display_disk_writes",
		description: "Enable/disable console message on disk writes",
		arguments: [
			"boolean"
		],
		id: "data_mine_display_disk_writes"
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
		symbol: "error_enable",
		name: "error_enable",
		description: "Enables/disables display for a class of errors",
		arguments: [
			"string",
			"boolean"
		],
		id: "error_enable"
	},
	{
		symbol: "render_layer_enable",
		name: "render_layer_enable",
		description: "Enable/disables a render_layer",
		arguments: [
			"string",
			"boolean"
		],
		id: "render_layer_enable"
	},
	{
		symbol: "render_layer_enable_all",
		name: "render_layer_enable_all",
		description: "Enable/disables all render_layers",
		arguments: [
			"boolean"
		],
		id: "render_layer_enable_all"
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
		symbol: "test_web_map_snapshot",
		name: "test_web_map_snapshot",
		description: "Takes two special screenshots and saves them, along with the camera information, as <name>.tif, <name>_secondary.tif and <name>_camera.txt",
		arguments: [
			"string"
		],
		id: "test_web_map_snapshot"
	},
	{
		symbol: "test_telnet_status_enable",
		name: "test_telnet_status_enable",
		description: "Enable/disable status events being sent to the telnet console",
		arguments: [
			"boolean"
		],
		id: "test_telnet_status_enable"
	},
	{
		symbol: "test_telnet_status_interval",
		name: "test_telnet_status_interval",
		description: "Sets the interval that status events are sent to the telnet console.",
		arguments: [
			"long"
		],
		id: "test_telnet_status_interval"
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
		symbol: "netdebug_prefer_internet",
		name: "netdebug_prefer_internet",
		description: "Hints to the netdebug code that that we're on the internet",
		arguments: [
			"boolean"
		],
		id: "netdebug_prefer_internet"
	},
	{
		symbol: "script_temporary_disable_lightmap_shadows",
		name: "script_temporary_disable_lightmap_shadows",
		description: "Disable lightmap shadows",
		arguments: [
			"boolean"
		],
		id: "script_temporary_disable_lightmap_shadows"
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
		symbol: "flags_save",
		name: "flags_save",
		description: "Dump comment flags to vrml file",
		arguments: [],
		id: "flags_save"
	},
	{
		symbol: "flags_save_filtered",
		name: "flags_save_filtered",
		description: "<substring filter>",
		arguments: [
			"string"
		],
		id: "flags_save_filtered"
	},
	{
		symbol: "flags_save_named",
		name: "flags_save_named",
		description: "<file name>",
		arguments: [
			"string"
		],
		id: "flags_save_named"
	},
	{
		symbol: "flags_save_named_filtered",
		name: "flags_save_named_filtered",
		description: "<filter string> <file name>",
		arguments: [
			"string",
			"string"
		],
		id: "flags_save_named_filtered"
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
		symbol: "flags_export",
		name: "flags_export",
		description: "Dump comment flags to a .txt file",
		arguments: [],
		id: "flags_export"
	},
	{
		symbol: "flags_export_filtered",
		name: "flags_export_filtered",
		description: "<substring filter>",
		arguments: [
			"string"
		],
		id: "flags_export_filtered"
	},
	{
		symbol: "flags_export_named",
		name: "flags_export_named",
		description: "<file name>",
		arguments: [
			"string"
		],
		id: "flags_export_named"
	},
	{
		symbol: "flags_export_named_filtered",
		name: "flags_export_named_filtered",
		description: "<filter string> <file name>",
		arguments: [
			"string",
			"string"
		],
		id: "flags_export_named_filtered"
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
		symbol: "net_leaderboard_clear",
		name: "net_leaderboard_clear",
		description: "<hopper> <user index> clears the stats for the given hopper and user",
		arguments: [
			"long",
			"long"
		],
		id: "net_leaderboard_clear"
	},
	{
		symbol: "net_leaderboard_set",
		name: "net_leaderboard_set",
		description: "<hopper index> <user index> <stat index> <value> sets the stat for the given leaderboard and user",
		arguments: [
			"long",
			"long",
			"long",
			"long"
		],
		id: "net_leaderboard_set"
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
		description: ";",
		arguments: [],
		id: "interpolator_stop_all"
	},
	{
		symbol: "interpolator_restart_all",
		name: "interpolator_restart_all",
		description: ";",
		arguments: [],
		id: "interpolator_restart_all"
	},
	{
		symbol: "interpolator_flip",
		name: "interpolator_flip",
		description: ";",
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
		symbol: "weather_start",
		name: "weather_start",
		description: "<time>",
		arguments: [
			"real"
		],
		id: "weather_start"
	},
	{
		symbol: "weather_stop",
		name: "weather_stop",
		description: "<time>",
		arguments: [
			"real"
		],
		id: "weather_stop"
	},
	{
		symbol: "weather_change_intensity",
		name: "weather_change_intensity",
		description: "<time> <intensity>",
		arguments: [
			"real",
			"real"
		],
		id: "weather_change_intensity"
	},
	{
		symbol: "animation_cache_stats_reset",
		name: "animation_cache_stats_reset",
		description: ";",
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
		description: ";",
		arguments: [
			"boolean"
		],
		id: "vehicle_enable_ghost_effects"
	},
	{
		symbol: "ice_cream_flavor_stock",
		name: "ice_cream_flavor_stock",
		description: ";",
		arguments: [
			"long"
		],
		id: "ice_cream_flavor_stock"
	},
	{
		symbol: "ice_cream_flavor_available",
		name: "ice_cream_flavor_available",
		description: ";",
		arguments: [
			"long"
		],
		returns: "boolean",
		id: "ice_cream_flavor_available"
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
		symbol: "set_rasterizer_gamma",
		name: "set_rasterizer_gamma",
		description: "Power",
		arguments: [
			"real"
		],
		id: "set_rasterizer_gamma"
	},
	{
		symbol: "predict_model_section",
		name: "predict_model_section",
		description: "Predict a geometry block.",
		arguments: [
			"render model",
			"long"
		],
		id: "predict_model_section"
	},
	{
		symbol: "predict_structure_section",
		name: "predict_structure_section",
		description: "Predict a geometry block.",
		arguments: [
			"structure_bsp",
			"long",
			"boolean"
		],
		id: "predict_structure_section"
	},
	{
		symbol: "predict_lightmap_bucket",
		name: "predict_lightmap_bucket",
		description: "Predict a geometry block.",
		arguments: [
			"structure_bsp",
			"long"
		],
		id: "predict_lightmap_bucket"
	},
	{
		symbol: "predict_bitmap",
		name: "predict_bitmap",
		description: "Predict a bitmap.",
		arguments: [
			"bitmap",
			"long"
		],
		id: "predict_bitmap"
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
		symbol: "ui_test_error_ok",
		name: "ui_test_error_ok",
		description: "Test error code display w/ ok dialog",
		arguments: [
			"short"
		],
		id: "ui_test_error_ok"
	},
	{
		symbol: "ui_test_error_ok_cancel",
		name: "ui_test_error_ok_cancel",
		description: "Test error code display w/ ok-cancel dialog",
		arguments: [
			"short"
		],
		id: "ui_test_error_ok_cancel"
	},
	{
		symbol: "ui_test_confirmation",
		name: "ui_test_confirmation",
		description: "Test confirmation dialog display",
		arguments: [
			"short"
		],
		id: "ui_test_confirmation"
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
		symbol: "online_message_send",
		name: "online_message_send",
		description: "Send a message from <controller_from> to <controller_to>",
		arguments: [
			"long",
			"long",
			"string"
		],
		id: "online_message_send"
	},
	{
		symbol: "test_web_event_local_cheater",
		name: "test_web_event_local_cheater",
		description: "Claims that the local box is a cheater",
		arguments: [],
		id: "test_web_event_local_cheater"
	},
	{
		symbol: "test_web_event_remote_cheater",
		name: "test_web_event_remote_cheater",
		description: "<gamertag> claims that a remote player is a cheater",
		arguments: [
			"string"
		],
		id: "test_web_event_remote_cheater"
	},
	{
		symbol: "test_cheating_detect",
		name: "test_cheating_detect",
		description: "Tells our servers that the local box is cheating",
		arguments: [],
		id: "test_cheating_detect"
	},
	{
		symbol: "test_network_storage_simulate",
		name: "test_network_storage_simulate",
		description: "<hopper/ban/motd/network> <none/download/fail>",
		arguments: [
			"string",
			"string"
		],
		id: "test_network_storage_simulate"
	},
	{
		symbol: "scenario_dump_scenario_signature_enable",
		name: "scenario_dump_scenario_signature_enable",
		description: "Enable signature dumps",
		arguments: [],
		id: "scenario_dump_scenario_signature_enable"
	},
	{
		symbol: "scenario_force_signature_failure_enable",
		name: "scenario_force_signature_failure_enable",
		description: "Enable forcing signature failure",
		arguments: [],
		id: "scenario_force_signature_failure_enable"
	},
	{
		symbol: "scenario_force_name_failure_enable",
		name: "scenario_force_name_failure_enable",
		description: "Enable forcing name failure",
		arguments: [],
		id: "scenario_force_name_failure_enable"
	},
	{
		symbol: "scenario_ignore_failures_enable",
		name: "scenario_ignore_failures_enable",
		description: "Enable ignoring failure",
		arguments: [],
		id: "scenario_ignore_failures_enable"
	},
	{
		symbol: "scenario_dump_scenario_signature_disable",
		name: "scenario_dump_scenario_signature_disable",
		description: "Disable signature dumps",
		arguments: [],
		id: "scenario_dump_scenario_signature_disable"
	},
	{
		symbol: "scenario_force_signature_failure_disable",
		name: "scenario_force_signature_failure_disable",
		description: "Disable forcing signature failure",
		arguments: [],
		id: "scenario_force_signature_failure_disable"
	},
	{
		symbol: "scenario_force_name_failure_disable",
		name: "scenario_force_name_failure_disable",
		description: "Disable forcing name failure",
		arguments: [],
		id: "scenario_force_name_failure_disable"
	},
	{
		symbol: "scenario_ignore_failures_disable",
		name: "scenario_ignore_failures_disable",
		description: "Disable ignoring failures",
		arguments: [],
		id: "scenario_ignore_failures_disable"
	},
	{
		symbol: "hopper_verify_force_failures_enable",
		name: "hopper_verify_force_failures_enable",
		description: "Enable forcing hopper failure",
		arguments: [],
		id: "hopper_verify_force_failures_enable"
	},
	{
		symbol: "hopper_verify_ignore_failures_enable",
		name: "hopper_verify_ignore_failures_enable",
		description: "Enable ignoring hopper failure",
		arguments: [],
		id: "hopper_verify_ignore_failures_enable"
	},
	{
		symbol: "hopper_verify_force_failures_disable",
		name: "hopper_verify_force_failures_disable",
		description: "Disable forcing hopper failure",
		arguments: [],
		id: "hopper_verify_force_failures_disable"
	},
	{
		symbol: "hopper_verify_ignore_failures_disable",
		name: "hopper_verify_ignore_failures_disable",
		description: "Disable ignoring hopper failure",
		arguments: [],
		id: "hopper_verify_ignore_failures_disable"
	},
	{
		symbol: "loading_screen_fade_to_white",
		name: "loading_screen_fade_to_white",
		description: "Sets the next loading screen to just fade to white",
		arguments: [],
		id: "loading_screen_fade_to_white"
	},
	{
		symbol: "rasterizer_debug_frame_usage",
		name: "rasterizer_debug_frame_usage",
		description: "Spew texture usage data per frame",
		arguments: [
			"boolean"
		],
		id: "rasterizer_debug_frame_usage"
	},
	{
		symbol: "rasterizer_debug_crap_pixel_shader",
		name: "rasterizer_debug_crap_pixel_shader",
		description: "Spew texture usage data per frame",
		arguments: [
			"boolean"
		],
		id: "rasterizer_debug_crap_pixel_shader"
	},
	{
		symbol: "enable_render_light_suppressor",
		name: "enable_render_light_suppressor",
		description: "Enables the code that constrains the max # active lights",
		arguments: [],
		id: "enable_render_light_suppressor"
	},
	{
		symbol: "disable_render_light_suppressor",
		name: "disable_render_light_suppressor",
		description: "Disables the code that constrains the max # active lights",
		arguments: [],
		id: "disable_render_light_suppressor"
	},
	{
		symbol: "cinematic_start_movie",
		name: "cinematic_start_movie",
		description: "Starts cinematic movie",
		arguments: [
			"string"
		],
		id: "cinematic_start_movie"
	},
	{
		symbol: "set_decal_override",
		name: "set_decal_override",
		description: "Override decal creation with specified tag",
		arguments: [
			"string"
		],
		id: "set_decal_override"
	},
	{
		symbol: "set_pjl_effect",
		name: "set_pjl_effect",
		description: "Override projectile effect creation with specified tag",
		arguments: [
			"effect"
		],
		id: "set_pjl_effect"
	},
	{
		symbol: "drop_variant",
		name: "drop_variant",
		description: "Drops the named tag e.g. objectsehiclesansheeanshee.vehicle",
		arguments: [
			"string",
			"string"
		],
		id: "drop_variant"
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
		symbol: "determinism_debug_manager_enable_log_file_comparision_on_oos",
		name: "determinism_debug_manager_enable_log_file_comparision_on_oos",
		description: "Enables/disables determinism log file comparision on oos",
		arguments: [
			"boolean"
		],
		id: "determinism_debug_manager_enable_log_file_comparision_on_oos"
	},
	{
		symbol: "h2a2_effect_new",
		name: "h2a2_effect_new",
		description: "Starts the specified effect on the specified object at the specified marker.",
		arguments: [
			"effect",
			"long",
			"string_id"
		],
		id: "h2a2_effect_new"
	},
	{
		symbol: "debug_sound_channels_by_substring",
		name: "debug_sound_channels_by_substring",
		description: "Filter display sound channels by substring",
		arguments: [
			"string"
		],
		id: "debug_sound_channels_by_substring"
	},
	{
		symbol: "rally_point_save_name",
		name: "rally_point_save_name",
		description: "Saves game state as rally point to core\\<path>",
		arguments: [
			"string"
		],
		id: "rally_point_save_name"
	},
	{
		symbol: "flush_ddm",
		name: "flush_ddm",
		description: "Flush ddm file",
		arguments: [],
		id: "flush_ddm"
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
		symbol: "game_tick_rate",
		name: "game_tick_rate",
		description: "Returns current game ticks per second rate",
		arguments: [],
		returns: "long",
		id: "game_tick_rate1"
	},
	{
		symbol: "game_tick_rate_scalar",
		name: "game_tick_rate_scalar",
		description: "Returns current game ticks per second rate relative to k_authored_tick_rate (30Hz)",
		arguments: [],
		returns: "long",
		id: "game_tick_rate_scalar"
	},
	{
		symbol: "game_tick_length",
		name: "game_tick_length",
		description: "Returns how many seconds are in a current game tick",
		arguments: [],
		returns: "real",
		id: "game_tick_length"
	},
	{
		symbol: "debug_no_drawing",
		name: "debug_no_drawing",
		arguments: [],
		returns: "boolean",
		id: "debug_no_drawing"
	},
	{
		symbol: "debug_force_all_player_views_to_default_player",
		name: "debug_force_all_player_views_to_default_player",
		arguments: [],
		returns: "boolean",
		id: "debug_force_all_player_views_to_default_player"
	},
	{
		symbol: "debug_render_freeze",
		name: "debug_render_freeze",
		arguments: [],
		returns: "boolean",
		id: "debug_render_freeze"
	},
	{
		symbol: "debug_render_horizontal_splitscreen",
		name: "debug_render_horizontal_splitscreen",
		arguments: [],
		returns: "boolean",
		id: "debug_render_horizontal_splitscreen"
	},
	{
		symbol: "debug_load_panic_to_main_menu",
		name: "debug_load_panic_to_main_menu",
		arguments: [],
		returns: "boolean",
		id: "debug_load_panic_to_main_menu"
	},
	{
		symbol: "display_framerate",
		name: "display_framerate",
		arguments: [],
		returns: "boolean",
		id: "display_framerate"
	},
	{
		symbol: "display_frame_deltas",
		name: "display_frame_deltas",
		arguments: [],
		returns: "boolean",
		id: "display_frame_deltas"
	},
	{
		symbol: "console_status_string_render",
		name: "console_status_string_render",
		arguments: [],
		returns: "boolean",
		id: "console_status_string_render"
	},
	{
		symbol: "console_pauses_game",
		name: "console_pauses_game",
		arguments: [],
		returns: "boolean",
		id: "console_pauses_game"
	},
	{
		symbol: "framerate_infinite",
		name: "framerate_infinite",
		arguments: [],
		returns: "boolean",
		id: "framerate_infinite"
	},
	{
		symbol: "framerate_debug",
		name: "framerate_debug",
		arguments: [],
		returns: "boolean",
		id: "framerate_debug"
	},
	{
		symbol: "framerate_use_system_time",
		name: "framerate_use_system_time",
		arguments: [],
		returns: "boolean",
		id: "framerate_use_system_time"
	},
	{
		symbol: "framerate_stabilization",
		name: "framerate_stabilization",
		arguments: [],
		returns: "boolean",
		id: "framerate_stabilization"
	},
	{
		symbol: "terminal_render",
		name: "terminal_render",
		arguments: [],
		returns: "boolean",
		id: "terminal_render"
	},
	{
		symbol: "console_dump_to_file",
		name: "console_dump_to_file",
		arguments: [],
		returns: "boolean",
		id: "console_dump_to_file"
	},
	{
		symbol: "console_dump_to_debug_display",
		name: "console_dump_to_debug_display",
		arguments: [],
		returns: "boolean",
		id: "console_dump_to_debug_display"
	},
	{
		symbol: "camera_fov_scale",
		name: "camera_fov_scale",
		arguments: [],
		returns: "real",
		id: "camera_fov_scale"
	},
	{
		symbol: "rasterizer_near_clip_distance",
		name: "rasterizer_near_clip_distance",
		arguments: [],
		returns: "real",
		id: "rasterizer_near_clip_distance"
	},
	{
		symbol: "rasterizer_far_clip_distance",
		name: "rasterizer_far_clip_distance",
		arguments: [],
		returns: "real",
		id: "rasterizer_far_clip_distance"
	},
	{
		symbol: "rasterizer_far_clip_nudge",
		name: "rasterizer_far_clip_nudge",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_far_clip_nudge"
	},
	{
		symbol: "rasterizer_wbuffer_clip_enable",
		name: "rasterizer_wbuffer_clip_enable",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_wbuffer_clip_enable"
	},
	{
		symbol: "rasterizer_frame_bounds_left",
		name: "rasterizer_frame_bounds_left",
		arguments: [],
		returns: "short",
		id: "rasterizer_frame_bounds_left"
	},
	{
		symbol: "rasterizer_frame_bounds_right",
		name: "rasterizer_frame_bounds_right",
		arguments: [],
		returns: "short",
		id: "rasterizer_frame_bounds_right"
	},
	{
		symbol: "rasterizer_frame_bounds_top",
		name: "rasterizer_frame_bounds_top",
		arguments: [],
		returns: "short",
		id: "rasterizer_frame_bounds_top"
	},
	{
		symbol: "rasterizer_frame_bounds_bottom",
		name: "rasterizer_frame_bounds_bottom",
		arguments: [],
		returns: "short",
		id: "rasterizer_frame_bounds_bottom"
	},
	{
		symbol: "rasterizer_vblank_interval",
		name: "rasterizer_vblank_interval",
		arguments: [],
		returns: "short",
		id: "rasterizer_vblank_interval"
	},
	{
		symbol: "rasterizer_flicker_filter",
		name: "rasterizer_flicker_filter",
		arguments: [],
		returns: "long",
		id: "rasterizer_flicker_filter"
	},
	{
		symbol: "rasterizer_soft_display_filter",
		name: "rasterizer_soft_display_filter",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_soft_display_filter"
	},
	{
		symbol: "rasterizer_stats",
		name: "rasterizer_stats",
		arguments: [],
		returns: "short",
		id: "rasterizer_stats"
	},
	{
		symbol: "rasterizer_mode",
		name: "rasterizer_mode",
		arguments: [],
		returns: "short",
		id: "rasterizer_mode"
	},
	{
		symbol: "rasterizer_wireframe",
		name: "rasterizer_wireframe",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_wireframe"
	},
	{
		symbol: "rasterizer_gamma_power",
		name: "rasterizer_gamma_power",
		arguments: [],
		returns: "real",
		id: "rasterizer_gamma_power"
	},
	{
		symbol: "rasterizer_shaders",
		name: "rasterizer_shaders",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shaders"
	},
	{
		symbol: "rasterizer_shader_submit_unified",
		name: "rasterizer_shader_submit_unified",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shader_submit_unified"
	},
	{
		symbol: "rasterizer_shader_submit_unified_safe",
		name: "rasterizer_shader_submit_unified_safe",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shader_submit_unified_safe"
	},
	{
		symbol: "rasterizer_shader_submit_unified_super_safe",
		name: "rasterizer_shader_submit_unified_super_safe",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shader_submit_unified_super_safe"
	},
	{
		symbol: "rasterizer_shader_submit_force_extern_refresh",
		name: "rasterizer_shader_submit_force_extern_refresh",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shader_submit_force_extern_refresh"
	},
	{
		symbol: "rasterizer_sort",
		name: "rasterizer_sort",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_sort"
	},
	{
		symbol: "rasterizer_sort_force_layer",
		name: "rasterizer_sort_force_layer",
		arguments: [],
		returns: "short",
		id: "rasterizer_sort_force_layer"
	},
	{
		symbol: "rasterizer_sort_force_order",
		name: "rasterizer_sort_force_order",
		arguments: [],
		returns: "short",
		id: "rasterizer_sort_force_order"
	},
	{
		symbol: "rasterizer_smart",
		name: "rasterizer_smart",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_smart"
	},
	{
		symbol: "rasterizer_karma_events",
		name: "rasterizer_karma_events",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_karma_events"
	},
	{
		symbol: "rasterizer_karma_events_detailed",
		name: "rasterizer_karma_events_detailed",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_karma_events_detailed"
	},
	{
		symbol: "rasterizer_debug_model_lod",
		name: "rasterizer_debug_model_lod",
		arguments: [],
		returns: "short",
		id: "rasterizer_debug_model_lod"
	},
	{
		symbol: "rasterizer_debug_transparents",
		name: "rasterizer_debug_transparents",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_debug_transparents"
	},
	{
		symbol: "rasterizer_debug_meter_shader",
		name: "rasterizer_debug_meter_shader",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_debug_meter_shader"
	},
	{
		symbol: "rasterizer_models",
		name: "rasterizer_models",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_models"
	},
	{
		symbol: "rasterizer_model_transparents",
		name: "rasterizer_model_transparents",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_model_transparents"
	},
	{
		symbol: "rasterizer_draw_first_person_weapon_first",
		name: "rasterizer_draw_first_person_weapon_first",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_draw_first_person_weapon_first"
	},
	{
		symbol: "rasterizer_stencil_mask",
		name: "rasterizer_stencil_mask",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_stencil_mask"
	},
	{
		symbol: "rasterizer_environment",
		name: "rasterizer_environment",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_environment"
	},
	{
		symbol: "rasterizer_decals",
		name: "rasterizer_decals",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_decals"
	},
	{
		symbol: "rasterizer_water",
		name: "rasterizer_water",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_water"
	},
	{
		symbol: "rasterizer_lens_flares",
		name: "rasterizer_lens_flares",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_lens_flares"
	},
	{
		symbol: "rasterizer_lens_flares_dof_region",
		name: "rasterizer_lens_flares_dof_region",
		arguments: [],
		returns: "short",
		id: "rasterizer_lens_flares_dof_region"
	},
	{
		symbol: "rasterizer_dynamic_unlit_geometry",
		name: "rasterizer_dynamic_unlit_geometry",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_dynamic_unlit_geometry"
	},
	{
		symbol: "rasterizer_dynamic_lit_geometry",
		name: "rasterizer_dynamic_lit_geometry",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_dynamic_lit_geometry"
	},
	{
		symbol: "rasterizer_dynamic_screen_geometry",
		name: "rasterizer_dynamic_screen_geometry",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_dynamic_screen_geometry"
	},
	{
		symbol: "rasterizer_hud_motion_sensor",
		name: "rasterizer_hud_motion_sensor",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_hud_motion_sensor"
	},
	{
		symbol: "rasterizer_detail_objects",
		name: "rasterizer_detail_objects",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_detail_objects"
	},
	{
		symbol: "rasterizer_debug_geometry",
		name: "rasterizer_debug_geometry",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_debug_geometry"
	},
	{
		symbol: "rasterizer_debug_geometry_multipass",
		name: "rasterizer_debug_geometry_multipass",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_debug_geometry_multipass"
	},
	{
		symbol: "rasterizer_fog_atmosphere",
		name: "rasterizer_fog_atmosphere",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_fog_atmosphere"
	},
	{
		symbol: "rasterizer_fog_plane",
		name: "rasterizer_fog_plane",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_fog_plane"
	},
	{
		symbol: "rasterizer_bump_mapping",
		name: "rasterizer_bump_mapping",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_bump_mapping"
	},
	{
		symbol: "rasterizer_environment_alpha_testing",
		name: "rasterizer_environment_alpha_testing",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_environment_alpha_testing"
	},
	{
		symbol: "rasterizer_environment_specular_mask",
		name: "rasterizer_environment_specular_mask",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_environment_specular_mask"
	},
	{
		symbol: "rasterizer_shadows_convolution",
		name: "rasterizer_shadows_convolution",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shadows_convolution"
	},
	{
		symbol: "rasterizer_shadows_debug",
		name: "rasterizer_shadows_debug",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shadows_debug"
	},
	{
		symbol: "rasterizer_water_mipmapping",
		name: "rasterizer_water_mipmapping",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_water_mipmapping"
	},
	{
		symbol: "rasterizer_active_camouflage",
		name: "rasterizer_active_camouflage",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_active_camouflage"
	},
	{
		symbol: "rasterizer_active_camouflage_multipass",
		name: "rasterizer_active_camouflage_multipass",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_active_camouflage_multipass"
	},
	{
		symbol: "rasterizer_lens_flares_occlusion",
		name: "rasterizer_lens_flares_occlusion",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_lens_flares_occlusion"
	},
	{
		symbol: "rasterizer_lens_flares_occlusion_debug",
		name: "rasterizer_lens_flares_occlusion_debug",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_lens_flares_occlusion_debug"
	},
	{
		symbol: "rasterizer_lens_flares_occluded_by_active_camo",
		name: "rasterizer_lens_flares_occluded_by_active_camo",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_lens_flares_occluded_by_active_camo"
	},
	{
		symbol: "rasterizer_ray_of_buddha",
		name: "rasterizer_ray_of_buddha",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_ray_of_buddha"
	},
	{
		symbol: "rasterizer_screen_flashes",
		name: "rasterizer_screen_flashes",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_screen_flashes"
	},
	{
		symbol: "rasterizer_screen_effects",
		name: "rasterizer_screen_effects",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_screen_effects"
	},
	{
		symbol: "rasterizer_DXTC_noise",
		name: "rasterizer_DXTC_noise",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_DXTC_noise"
	},
	{
		symbol: "rasterizer_profile_log",
		name: "rasterizer_profile_log",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_profile_log"
	},
	{
		symbol: "rasterizer_detail_objects_offset_multiplier",
		name: "rasterizer_detail_objects_offset_multiplier",
		arguments: [],
		returns: "real",
		id: "rasterizer_detail_objects_offset_multiplier"
	},
	{
		symbol: "rasterizer_decal_flush_on_create",
		name: "rasterizer_decal_flush_on_create",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_decal_flush_on_create"
	},
	{
		symbol: "rasterizer_decal_z_bias",
		name: "rasterizer_decal_z_bias",
		arguments: [],
		returns: "long",
		id: "rasterizer_decal_z_bias"
	},
	{
		symbol: "rasterizer_decal_z_offset_slopescale_enabled",
		name: "rasterizer_decal_z_offset_slopescale_enabled",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_decal_z_offset_slopescale_enabled"
	},
	{
		symbol: "rasterizer_decal_z_offset",
		name: "rasterizer_decal_z_offset",
		arguments: [],
		returns: "real",
		id: "rasterizer_decal_z_offset"
	},
	{
		symbol: "rasterizer_decal_z_slopescale",
		name: "rasterizer_decal_z_slopescale",
		arguments: [],
		returns: "real",
		id: "rasterizer_decal_z_slopescale"
	},
	{
		symbol: "rasterizer_decal_z_geometry_offset",
		name: "rasterizer_decal_z_geometry_offset",
		arguments: [],
		returns: "real",
		id: "rasterizer_decal_z_geometry_offset"
	},
	{
		symbol: "rasterizer_decal_debug_draw_grid",
		name: "rasterizer_decal_debug_draw_grid",
		arguments: [],
		returns: "long",
		id: "rasterizer_decal_debug_draw_grid"
	},
	{
		symbol: "rasterizer_safe_frame_bounds",
		name: "rasterizer_safe_frame_bounds",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_safe_frame_bounds"
	},
	{
		symbol: "rasterizer_zsprites",
		name: "rasterizer_zsprites",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_zsprites"
	},
	{
		symbol: "rasterizer_filthy_decal_fog_hack",
		name: "rasterizer_filthy_decal_fog_hack",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_filthy_decal_fog_hack"
	},
	{
		symbol: "rasterizer_splitscreen_VB_optimization",
		name: "rasterizer_splitscreen_VB_optimization",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_splitscreen_VB_optimization"
	},
	{
		symbol: "rasterizer_counters_enabled",
		name: "rasterizer_counters_enabled",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_counters_enabled"
	},
	{
		symbol: "rasterizer_markers_enabled",
		name: "rasterizer_markers_enabled",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_markers_enabled"
	},
	{
		symbol: "rasterizer_profile_print_locks",
		name: "rasterizer_profile_print_locks",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_profile_print_locks"
	},
	{
		symbol: "rasterizer_profile_objectlock_time",
		name: "rasterizer_profile_objectlock_time",
		arguments: [],
		returns: "real",
		id: "rasterizer_profile_objectlock_time"
	},
	{
		symbol: "rasterizer_tiny",
		name: "rasterizer_tiny",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_tiny"
	},
	{
		symbol: "rasterizer_busywork",
		name: "rasterizer_busywork",
		arguments: [],
		returns: "long",
		id: "rasterizer_busywork"
	},
	{
		symbol: "rasterizer_shadow_buffer_use_offsets",
		name: "rasterizer_shadow_buffer_use_offsets",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shadow_buffer_use_offsets"
	},
	{
		symbol: "rasterizer_shadow_buffer_z_offset",
		name: "rasterizer_shadow_buffer_z_offset",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_z_offset"
	},
	{
		symbol: "rasterizer_shadow_buffer_z_slope",
		name: "rasterizer_shadow_buffer_z_slope",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_z_slope"
	},
	{
		symbol: "rasterizer_shadow_buffer_env_z_offset",
		name: "rasterizer_shadow_buffer_env_z_offset",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_env_z_offset"
	},
	{
		symbol: "rasterizer_shadow_buffer_env_z_slope",
		name: "rasterizer_shadow_buffer_env_z_slope",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_env_z_slope"
	},
	{
		symbol: "rasterizer_shadow_buffer_blur",
		name: "rasterizer_shadow_buffer_blur",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_blur"
	},
	{
		symbol: "rasterizer_shadow_buffer_cinematic_debug",
		name: "rasterizer_shadow_buffer_cinematic_debug",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shadow_buffer_cinematic_debug"
	},
	{
		symbol: "rasterizer_shadow_buffer_debug",
		name: "rasterizer_shadow_buffer_debug",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_shadow_buffer_debug"
	},
	{
		symbol: "rasterizer_shadow_buffer_lod_resolution_area_scale",
		name: "rasterizer_shadow_buffer_lod_resolution_area_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_lod_resolution_area_scale"
	},
	{
		symbol: "rasterizer_shadow_buffer_lod_resolution_light_bias_scale",
		name: "rasterizer_shadow_buffer_lod_resolution_light_bias_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_lod_resolution_light_bias_scale"
	},
	{
		symbol: "rasterizer_shadow_buffer_lod_resolution_minimum",
		name: "rasterizer_shadow_buffer_lod_resolution_minimum",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_lod_resolution_minimum"
	},
	{
		symbol: "rasterizer_shadow_buffer_lod_samples_area_scale",
		name: "rasterizer_shadow_buffer_lod_samples_area_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_lod_samples_area_scale"
	},
	{
		symbol: "rasterizer_shadow_buffer_lod_samples_light_bias_scale",
		name: "rasterizer_shadow_buffer_lod_samples_light_bias_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_shadow_buffer_lod_samples_light_bias_scale"
	},
	{
		symbol: "rasterizer_dynamic_gamma_mode",
		name: "rasterizer_dynamic_gamma_mode",
		arguments: [],
		returns: "short",
		id: "rasterizer_dynamic_gamma_mode"
	},
	{
		symbol: "rasterizer_dynamic_gamma_bias",
		name: "rasterizer_dynamic_gamma_bias",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_bias"
	},
	{
		symbol: "rasterizer_dynamic_gamma_dark_clamp",
		name: "rasterizer_dynamic_gamma_dark_clamp",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_dark_clamp"
	},
	{
		symbol: "rasterizer_dynamic_gamma_light_clamp",
		name: "rasterizer_dynamic_gamma_light_clamp",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_light_clamp"
	},
	{
		symbol: "rasterizer_dynamic_gamma_dark_adjust_dt",
		name: "rasterizer_dynamic_gamma_dark_adjust_dt",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_dark_adjust_dt"
	},
	{
		symbol: "rasterizer_dynamic_gamma_light_adjust_dt",
		name: "rasterizer_dynamic_gamma_light_adjust_dt",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_light_adjust_dt"
	},
	{
		symbol: "rasterizer_dynamic_gamma_contrast_adjust_dt",
		name: "rasterizer_dynamic_gamma_contrast_adjust_dt",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_contrast_adjust_dt"
	},
	{
		symbol: "rasterizer_dynamic_gamma_dark_threshold",
		name: "rasterizer_dynamic_gamma_dark_threshold",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_dark_threshold"
	},
	{
		symbol: "rasterizer_dynamic_gamma_light_threshold",
		name: "rasterizer_dynamic_gamma_light_threshold",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_light_threshold"
	},
	{
		symbol: "rasterizer_dynamic_gamma_bloom_scale",
		name: "rasterizer_dynamic_gamma_bloom_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_dynamic_gamma_bloom_scale"
	},
	{
		symbol: "rasterizer_dynamic_gamma_debug",
		name: "rasterizer_dynamic_gamma_debug",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_dynamic_gamma_debug"
	},
	{
		symbol: "rasterizer_vision_distance",
		name: "rasterizer_vision_distance",
		arguments: [],
		returns: "real",
		id: "rasterizer_vision_distance"
	},
	{
		symbol: "rasterizer_vision_jitter_scale",
		name: "rasterizer_vision_jitter_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_vision_jitter_scale"
	},
	{
		symbol: "rasterizer_vision_noise_scale",
		name: "rasterizer_vision_noise_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_vision_noise_scale"
	},
	{
		symbol: "rasterizer_vision_scan_scale",
		name: "rasterizer_vision_scan_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_vision_scan_scale"
	},
	{
		symbol: "rasterizer_vision_scan_speed",
		name: "rasterizer_vision_scan_speed",
		arguments: [],
		returns: "real",
		id: "rasterizer_vision_scan_speed"
	},
	{
		symbol: "rasterizer_bloom_default_threshold",
		name: "rasterizer_bloom_default_threshold",
		arguments: [],
		returns: "real",
		id: "rasterizer_bloom_default_threshold"
	},
	{
		symbol: "rasterizer_selfibloomination_scale",
		name: "rasterizer_selfibloomination_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_selfibloomination_scale"
	},
	{
		symbol: "rasterizer_selfibloomination_to_bloom_amount",
		name: "rasterizer_selfibloomination_to_bloom_amount",
		arguments: [],
		returns: "real",
		id: "rasterizer_selfibloomination_to_bloom_amount"
	},
	{
		symbol: "rasterizer_selfibloomination_is_fogged",
		name: "rasterizer_selfibloomination_is_fogged",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_selfibloomination_is_fogged"
	},
	{
		symbol: "rasterizer_depth_of_field_near_filter_box_factor",
		name: "rasterizer_depth_of_field_near_filter_box_factor",
		arguments: [],
		returns: "real",
		id: "rasterizer_depth_of_field_near_filter_box_factor"
	},
	{
		symbol: "rasterizer_depth_of_field_near_filter_max_factor",
		name: "rasterizer_depth_of_field_near_filter_max_factor",
		arguments: [],
		returns: "real",
		id: "rasterizer_depth_of_field_near_filter_max_factor"
	},
	{
		symbol: "rasterizer_depth_of_field_far_filter_box_factor",
		name: "rasterizer_depth_of_field_far_filter_box_factor",
		arguments: [],
		returns: "real",
		id: "rasterizer_depth_of_field_far_filter_box_factor"
	},
	{
		symbol: "rasterizer_depth_of_field_far_filter_max_factor",
		name: "rasterizer_depth_of_field_far_filter_max_factor",
		arguments: [],
		returns: "real",
		id: "rasterizer_depth_of_field_far_filter_max_factor"
	},
	{
		symbol: "colorbars",
		name: "colorbars",
		arguments: [],
		returns: "boolean",
		id: "colorbars"
	},
	{
		symbol: "rasterizer_LMO_ambient",
		name: "rasterizer_LMO_ambient",
		arguments: [],
		returns: "real",
		id: "rasterizer_LMO_ambient"
	},
	{
		symbol: "rasterizer_LMO_direct",
		name: "rasterizer_LMO_direct",
		arguments: [],
		returns: "real",
		id: "rasterizer_LMO_direct"
	},
	{
		symbol: "rasterizer_LMO_indirect",
		name: "rasterizer_LMO_indirect",
		arguments: [],
		returns: "real",
		id: "rasterizer_LMO_indirect"
	},
	{
		symbol: "rasterizer_LMO_specular",
		name: "rasterizer_LMO_specular",
		arguments: [],
		returns: "real",
		id: "rasterizer_LMO_specular"
	},
	{
		symbol: "rasterizer_lightmap_shadow_falloff_scale",
		name: "rasterizer_lightmap_shadow_falloff_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_lightmap_shadow_falloff_scale"
	},
	{
		symbol: "rasterizer_lightmap_shadow_cutoff_scale",
		name: "rasterizer_lightmap_shadow_cutoff_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_lightmap_shadow_cutoff_scale"
	},
	{
		symbol: "rasterizer_new_submission_interface",
		name: "rasterizer_new_submission_interface",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_new_submission_interface"
	},
	{
		symbol: "rasterizer_line_width",
		name: "rasterizer_line_width",
		arguments: [],
		returns: "real",
		id: "rasterizer_line_width"
	},
	{
		symbol: "rasterizer_linear_gradients",
		name: "rasterizer_linear_gradients",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_linear_gradients"
	},
	{
		symbol: "rasterizer_fog_atmospheric_auto_blend",
		name: "rasterizer_fog_atmospheric_auto_blend",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_fog_atmospheric_auto_blend"
	},
	{
		symbol: "rasterizer_solid_color_mode",
		name: "rasterizer_solid_color_mode",
		arguments: [],
		returns: "long",
		id: "rasterizer_solid_color_mode"
	},
	{
		symbol: "rasterizer_decorator_accuracy_min",
		name: "rasterizer_decorator_accuracy_min",
		arguments: [],
		returns: "real",
		id: "rasterizer_decorator_accuracy_min"
	},
	{
		symbol: "rasterizer_decorator_accuracy_max",
		name: "rasterizer_decorator_accuracy_max",
		arguments: [],
		returns: "real",
		id: "rasterizer_decorator_accuracy_max"
	},
	{
		symbol: "rasterizer_first_person_w_scale",
		name: "rasterizer_first_person_w_scale",
		arguments: [],
		returns: "real",
		id: "rasterizer_first_person_w_scale"
	},
	{
		symbol: "rasterizer_tessellation_scale",
		name: "rasterizer_tessellation_scale",
		arguments: [],
		returns: "long",
		id: "rasterizer_tessellation_scale"
	},
	{
		symbol: "rasterizer_patchy_fog_alpha_modulate",
		name: "rasterizer_patchy_fog_alpha_modulate",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_patchy_fog_alpha_modulate"
	},
	{
		symbol: "rasterizer_patchy_fog_force_100_percent",
		name: "rasterizer_patchy_fog_force_100_percent",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_patchy_fog_force_100_percent"
	},
	{
		symbol: "rasterizer_fog_planar_separate_enabled",
		name: "rasterizer_fog_planar_separate_enabled",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_fog_planar_separate_enabled"
	},
	{
		symbol: "rasterizer_force_specular",
		name: "rasterizer_force_specular",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_force_specular"
	},
	{
		symbol: "rasterizer_fog_planar_care",
		name: "rasterizer_fog_planar_care",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_fog_planar_care"
	},
	{
		symbol: "rz_mode",
		name: "rz_mode",
		arguments: [],
		returns: "long",
		id: "rz_mode"
	},
	{
		symbol: "rz_gradient_index",
		name: "rz_gradient_index",
		arguments: [],
		returns: "long",
		id: "rz_gradient_index"
	},
	{
		symbol: "rz_amount",
		name: "rz_amount",
		arguments: [],
		returns: "real",
		id: "rz_amount"
	},
	{
		symbol: "rz_0",
		name: "rz_0",
		arguments: [],
		returns: "real",
		id: "rz_0"
	},
	{
		symbol: "rz_slope",
		name: "rz_slope",
		arguments: [],
		returns: "real",
		id: "rz_slope"
	},
	{
		symbol: "rasterizer_light_volume_debug",
		name: "rasterizer_light_volume_debug",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_light_volume_debug"
	},
	{
		symbol: "rasterizer_light_volume_perspective_midpoints",
		name: "rasterizer_light_volume_perspective_midpoints",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_light_volume_perspective_midpoints"
	},
	{
		symbol: "rasterizer_light_offset",
		name: "rasterizer_light_offset",
		arguments: [],
		returns: "real",
		id: "rasterizer_light_offset"
	},
	{
		symbol: "rasterizer_debug_fog_geometry",
		name: "rasterizer_debug_fog_geometry",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_debug_fog_geometry"
	},
	{
		symbol: "ssc_debug",
		name: "ssc_debug",
		arguments: [],
		returns: "boolean",
		id: "ssc_debug"
	},
	{
		symbol: "ssc_debug_lights",
		name: "ssc_debug_lights",
		arguments: [],
		returns: "boolean",
		id: "ssc_debug_lights"
	},
	{
		symbol: "ssc_debug_lights_gel",
		name: "ssc_debug_lights_gel",
		arguments: [],
		returns: "boolean",
		id: "ssc_debug_lights_gel"
	},
	{
		symbol: "ssc_debug_text_mode",
		name: "ssc_debug_text_mode",
		arguments: [],
		returns: "short",
		id: "ssc_debug_text_mode"
	},
	{
		symbol: "ssc_debug_hulls",
		name: "ssc_debug_hulls",
		arguments: [],
		returns: "boolean",
		id: "ssc_debug_hulls"
	},
	{
		symbol: "ssc_debug_edges",
		name: "ssc_debug_edges",
		arguments: [],
		returns: "boolean",
		id: "ssc_debug_edges"
	},
	{
		symbol: "ssc_viewport_scale",
		name: "ssc_viewport_scale",
		arguments: [],
		returns: "real",
		id: "ssc_viewport_scale"
	},
	{
		symbol: "ssc_lightmaps",
		name: "ssc_lightmaps",
		arguments: [],
		returns: "boolean",
		id: "ssc_lightmaps"
	},
	{
		symbol: "ssc_lightmap_control",
		name: "ssc_lightmap_control",
		arguments: [],
		returns: "long",
		id: "ssc_lightmap_control"
	},
	{
		symbol: "ssc_lightmap_shadow_darkening",
		name: "ssc_lightmap_shadow_darkening",
		arguments: [],
		returns: "real",
		id: "ssc_lightmap_shadow_darkening"
	},
	{
		symbol: "ssc_lightmap_shadow_extrusion",
		name: "ssc_lightmap_shadow_extrusion",
		arguments: [],
		returns: "real",
		id: "ssc_lightmap_shadow_extrusion"
	},
	{
		symbol: "ssc_lightmap_shadow_carmack_optimization",
		name: "ssc_lightmap_shadow_carmack_optimization",
		arguments: [],
		returns: "boolean",
		id: "ssc_lightmap_shadow_carmack_optimization"
	},
	{
		symbol: "ssc_lightmap_force_non_bumped",
		name: "ssc_lightmap_force_non_bumped",
		arguments: [],
		returns: "boolean",
		id: "ssc_lightmap_force_non_bumped"
	},
	{
		symbol: "ssc_scissor_enable",
		name: "ssc_scissor_enable",
		arguments: [],
		returns: "boolean",
		id: "ssc_scissor_enable"
	},
	{
		symbol: "ssc_force_legacy",
		name: "ssc_force_legacy",
		arguments: [],
		returns: "boolean",
		id: "ssc_force_legacy"
	},
	{
		symbol: "ssc_multisample_enable",
		name: "ssc_multisample_enable",
		arguments: [],
		returns: "boolean",
		id: "ssc_multisample_enable"
	},
	{
		symbol: "ssc_shadow",
		name: "ssc_shadow",
		arguments: [],
		returns: "boolean",
		id: "ssc_shadow"
	},
	{
		symbol: "ssc_shadow_view",
		name: "ssc_shadow_view",
		arguments: [],
		returns: "boolean",
		id: "ssc_shadow_view"
	},
	{
		symbol: "ssc_shadow_mode",
		name: "ssc_shadow_mode",
		arguments: [],
		returns: "long",
		id: "ssc_shadow_mode"
	},
	{
		symbol: "ssc_shadow_debug_cluster",
		name: "ssc_shadow_debug_cluster",
		arguments: [],
		returns: "long",
		id: "ssc_shadow_debug_cluster"
	},
	{
		symbol: "ssc_shadow_multi_region",
		name: "ssc_shadow_multi_region",
		arguments: [],
		returns: "boolean",
		id: "ssc_shadow_multi_region"
	},
	{
		symbol: "ssc_shadow_cyborg",
		name: "ssc_shadow_cyborg",
		arguments: [],
		returns: "boolean",
		id: "ssc_shadow_cyborg"
	},
	{
		symbol: "ssc_carmack_optimization",
		name: "ssc_carmack_optimization",
		arguments: [],
		returns: "boolean",
		id: "ssc_carmack_optimization"
	},
	{
		symbol: "ssc_carmack_reverse",
		name: "ssc_carmack_reverse",
		arguments: [],
		returns: "boolean",
		id: "ssc_carmack_reverse"
	},
	{
		symbol: "ssc_back_projection",
		name: "ssc_back_projection",
		arguments: [],
		returns: "boolean",
		id: "ssc_back_projection"
	},
	{
		symbol: "ssc_single_pass_vol",
		name: "ssc_single_pass_vol",
		arguments: [],
		returns: "boolean",
		id: "ssc_single_pass_vol"
	},
	{
		symbol: "ssc_dsq",
		name: "ssc_dsq",
		arguments: [],
		returns: "boolean",
		id: "ssc_dsq"
	},
	{
		symbol: "ssc_dsq_vis",
		name: "ssc_dsq_vis",
		arguments: [],
		returns: "boolean",
		id: "ssc_dsq_vis"
	},
	{
		symbol: "ssc_isq",
		name: "ssc_isq",
		arguments: [],
		returns: "boolean",
		id: "ssc_isq"
	},
	{
		symbol: "ssc_isq_sse",
		name: "ssc_isq_sse",
		arguments: [],
		returns: "boolean",
		id: "ssc_isq_sse"
	},
	{
		symbol: "ssc_isq_point_debug",
		name: "ssc_isq_point_debug",
		arguments: [],
		returns: "boolean",
		id: "ssc_isq_point_debug"
	},
	{
		symbol: "ssc_subcluster_debug",
		name: "ssc_subcluster_debug",
		arguments: [],
		returns: "boolean",
		id: "ssc_subcluster_debug"
	},
	{
		symbol: "ssc_subcluster_freeze",
		name: "ssc_subcluster_freeze",
		arguments: [],
		returns: "boolean",
		id: "ssc_subcluster_freeze"
	},
	{
		symbol: "ssc_subcluster_optimization",
		name: "ssc_subcluster_optimization",
		arguments: [],
		returns: "boolean",
		id: "ssc_subcluster_optimization"
	},
	{
		symbol: "ssc_subcluster_all_visible",
		name: "ssc_subcluster_all_visible",
		arguments: [],
		returns: "boolean",
		id: "ssc_subcluster_all_visible"
	},
	{
		symbol: "ssc_overbright",
		name: "ssc_overbright",
		arguments: [],
		returns: "real",
		id: "ssc_overbright"
	},
	{
		symbol: "ssc_ambient_diffuse",
		name: "ssc_ambient_diffuse",
		arguments: [],
		returns: "real",
		id: "ssc_ambient_diffuse"
	},
	{
		symbol: "ssc_ambient_diffuse_bump",
		name: "ssc_ambient_diffuse_bump",
		arguments: [],
		returns: "real",
		id: "ssc_ambient_diffuse_bump"
	},
	{
		symbol: "ssc_ambient_diffuse_radiosity",
		name: "ssc_ambient_diffuse_radiosity",
		arguments: [],
		returns: "real",
		id: "ssc_ambient_diffuse_radiosity"
	},
	{
		symbol: "ssc_ambient_envmap",
		name: "ssc_ambient_envmap",
		arguments: [],
		returns: "real",
		id: "ssc_ambient_envmap"
	},
	{
		symbol: "ssc_light_gel",
		name: "ssc_light_gel",
		arguments: [],
		returns: "boolean",
		id: "ssc_light_gel"
	},
	{
		symbol: "ssc_light_n_dot_e_mask",
		name: "ssc_light_n_dot_e_mask",
		arguments: [],
		returns: "boolean",
		id: "ssc_light_n_dot_e_mask"
	},
	{
		symbol: "ssc_light_diffuse",
		name: "ssc_light_diffuse",
		arguments: [],
		returns: "real",
		id: "ssc_light_diffuse"
	},
	{
		symbol: "ssc_light_diffuse_shadow",
		name: "ssc_light_diffuse_shadow",
		arguments: [],
		returns: "boolean",
		id: "ssc_light_diffuse_shadow"
	},
	{
		symbol: "ssc_light_diffuse_mask_flags",
		name: "ssc_light_diffuse_mask_flags",
		arguments: [],
		returns: "long",
		id: "ssc_light_diffuse_mask_flags"
	},
	{
		symbol: "ssc_light_diffuse_n_dot_l",
		name: "ssc_light_diffuse_n_dot_l",
		arguments: [],
		returns: "boolean",
		id: "ssc_light_diffuse_n_dot_l"
	},
	{
		symbol: "ssc_light_specular",
		name: "ssc_light_specular",
		arguments: [],
		returns: "real",
		id: "ssc_light_specular"
	},
	{
		symbol: "ssc_light_specular_shadow",
		name: "ssc_light_specular_shadow",
		arguments: [],
		returns: "boolean",
		id: "ssc_light_specular_shadow"
	},
	{
		symbol: "ssc_light_specular_mask_flags",
		name: "ssc_light_specular_mask_flags",
		arguments: [],
		returns: "long",
		id: "ssc_light_specular_mask_flags"
	},
	{
		symbol: "ssc_light_specular_enable",
		name: "ssc_light_specular_enable",
		arguments: [],
		returns: "boolean",
		id: "ssc_light_specular_enable"
	},
	{
		symbol: "ssc_texture_diffuse",
		name: "ssc_texture_diffuse",
		arguments: [],
		returns: "real",
		id: "ssc_texture_diffuse"
	},
	{
		symbol: "ssc_texture_specular",
		name: "ssc_texture_specular",
		arguments: [],
		returns: "real",
		id: "ssc_texture_specular"
	},
	{
		symbol: "ssc_texture_mode",
		name: "ssc_texture_mode",
		arguments: [],
		returns: "short",
		id: "ssc_texture_mode"
	},
	{
		symbol: "ssc_stencil_mode",
		name: "ssc_stencil_mode",
		arguments: [],
		returns: "short",
		id: "ssc_stencil_mode"
	},
	{
		symbol: "ssc_bump_mode",
		name: "ssc_bump_mode",
		arguments: [],
		returns: "short",
		id: "ssc_bump_mode"
	},
	{
		symbol: "ssc_bump_aniso",
		name: "ssc_bump_aniso",
		arguments: [],
		returns: "short",
		id: "ssc_bump_aniso"
	},
	{
		symbol: "ssc_bump_mode_debug",
		name: "ssc_bump_mode_debug",
		arguments: [],
		returns: "boolean",
		id: "ssc_bump_mode_debug"
	},
	{
		symbol: "ssc_env_zge",
		name: "ssc_env_zge",
		arguments: [],
		returns: "boolean",
		id: "ssc_env_zge"
	},
	{
		symbol: "ssc_env_brev",
		name: "ssc_env_brev",
		arguments: [],
		returns: "boolean",
		id: "ssc_env_brev"
	},
	{
		symbol: "ssc_env_voltex",
		name: "ssc_env_voltex",
		arguments: [],
		returns: "boolean",
		id: "ssc_env_voltex"
	},
	{
		symbol: "ssc_env_malice",
		name: "ssc_env_malice",
		arguments: [],
		returns: "boolean",
		id: "ssc_env_malice"
	},
	{
		symbol: "ssc_pop_fix",
		name: "ssc_pop_fix",
		arguments: [],
		returns: "boolean",
		id: "ssc_pop_fix"
	},
	{
		symbol: "ssc_pop_fix_factor",
		name: "ssc_pop_fix_factor",
		arguments: [],
		returns: "real",
		id: "ssc_pop_fix_factor"
	},
	{
		symbol: "ssc_radiosity_hack",
		name: "ssc_radiosity_hack",
		arguments: [],
		returns: "short",
		id: "ssc_radiosity_hack"
	},
	{
		symbol: "ssc_radiosity_hack_shadow",
		name: "ssc_radiosity_hack_shadow",
		arguments: [],
		returns: "boolean",
		id: "ssc_radiosity_hack_shadow"
	},
	{
		symbol: "ssc_shader_profile_mode",
		name: "ssc_shader_profile_mode",
		arguments: [],
		returns: "long",
		id: "ssc_shader_profile_mode"
	},
	{
		symbol: "ssc_shader_profile_layer",
		name: "ssc_shader_profile_layer",
		arguments: [],
		returns: "long",
		id: "ssc_shader_profile_layer"
	},
	{
		symbol: "ssc_objects_env_map_enabled",
		name: "ssc_objects_env_map_enabled",
		arguments: [],
		returns: "boolean",
		id: "ssc_objects_env_map_enabled"
	},
	{
		symbol: "ssc_environment_env_map_enabled",
		name: "ssc_environment_env_map_enabled",
		arguments: [],
		returns: "boolean",
		id: "ssc_environment_env_map_enabled"
	},
	{
		symbol: "pad4",
		name: "pad4",
		arguments: [],
		returns: "short",
		id: "pad4"
	},
	{
		symbol: "pad3",
		name: "pad3",
		arguments: [],
		returns: "short",
		id: "pad3"
	},
	{
		symbol: "pad3_scale",
		name: "pad3_scale",
		arguments: [],
		returns: "real",
		id: "pad3_scale"
	},
	{
		symbol: "pad_thai",
		name: "pad_thai",
		arguments: [],
		returns: "real",
		id: "pad_thai"
	},
	{
		symbol: "taco_salad",
		name: "taco_salad",
		arguments: [],
		returns: "short",
		id: "taco_salad"
	},
	{
		symbol: "anisotropic_binormal",
		name: "anisotropic_binormal",
		arguments: [],
		returns: "short",
		id: "anisotropic_binormal"
	},
	{
		symbol: "f0",
		name: "f0",
		arguments: [],
		returns: "real",
		id: "f0"
	},
	{
		symbol: "f1",
		name: "f1",
		arguments: [],
		returns: "real",
		id: "f1"
	},
	{
		symbol: "f2",
		name: "f2",
		arguments: [],
		returns: "real",
		id: "f2"
	},
	{
		symbol: "f3",
		name: "f3",
		arguments: [],
		returns: "real",
		id: "f3"
	},
	{
		symbol: "f4",
		name: "f4",
		arguments: [],
		returns: "real",
		id: "f4"
	},
	{
		symbol: "f5",
		name: "f5",
		arguments: [],
		returns: "real",
		id: "f5"
	},
	{
		symbol: "g0",
		name: "g0",
		arguments: [],
		returns: "real",
		id: "g0"
	},
	{
		symbol: "g1",
		name: "g1",
		arguments: [],
		returns: "real",
		id: "g1"
	},
	{
		symbol: "g2",
		name: "g2",
		arguments: [],
		returns: "real",
		id: "g2"
	},
	{
		symbol: "g3",
		name: "g3",
		arguments: [],
		returns: "real",
		id: "g3"
	},
	{
		symbol: "g4",
		name: "g4",
		arguments: [],
		returns: "real",
		id: "g4"
	},
	{
		symbol: "g5",
		name: "g5",
		arguments: [],
		returns: "real",
		id: "g5"
	},
	{
		symbol: "g6",
		name: "g6",
		arguments: [],
		returns: "real",
		id: "g6"
	},
	{
		symbol: "g7",
		name: "g7",
		arguments: [],
		returns: "real",
		id: "g7"
	},
	{
		symbol: "g8",
		name: "g8",
		arguments: [],
		returns: "real",
		id: "g8"
	},
	{
		symbol: "g9",
		name: "g9",
		arguments: [],
		returns: "real",
		id: "g9"
	},
	{
		symbol: "g10",
		name: "g10",
		arguments: [],
		returns: "real",
		id: "g10"
	},
	{
		symbol: "g11",
		name: "g11",
		arguments: [],
		returns: "real",
		id: "g11"
	},
	{
		symbol: "rasterizer_frame_dump",
		name: "rasterizer_frame_dump",
		arguments: [],
		returns: "boolean",
		id: "rasterizer_frame_dump"
	},
	{
		symbol: "ssc_e3_clip_scale",
		name: "ssc_e3_clip_scale",
		arguments: [],
		returns: "real",
		id: "ssc_e3_clip_scale"
	},
	{
		symbol: "async_display_statistics",
		name: "async_display_statistics",
		arguments: [],
		returns: "boolean",
		id: "async_display_statistics"
	},
	{
		symbol: "async_record_statistics",
		name: "async_record_statistics",
		arguments: [],
		returns: "boolean",
		id: "async_record_statistics"
	},
	{
		symbol: "suppress_upload_debug",
		name: "suppress_upload_debug",
		arguments: [],
		returns: "boolean",
		id: "suppress_upload_debug"
	},
	{
		symbol: "lightmap_pointsample",
		name: "lightmap_pointsample",
		arguments: [],
		returns: "boolean",
		id: "lightmap_pointsample"
	},
	{
		symbol: "debug_no_frustum_clip",
		name: "debug_no_frustum_clip",
		arguments: [],
		returns: "boolean",
		id: "debug_no_frustum_clip"
	},
	{
		symbol: "debug_camera_projection",
		name: "debug_camera_projection",
		arguments: [],
		returns: "boolean",
		id: "debug_camera_projection"
	},
	{
		symbol: "game_paused",
		name: "game_paused",
		arguments: [],
		returns: "boolean",
		id: "game_paused"
	},
	{
		symbol: "game_speed",
		name: "game_speed",
		arguments: [],
		returns: "real",
		id: "game_speed"
	},
	{
		symbol: "game_time_lock",
		name: "game_time_lock",
		arguments: [],
		returns: "boolean",
		id: "game_time_lock"
	},
	{
		symbol: "game_time_statistics",
		name: "game_time_statistics",
		arguments: [],
		returns: "boolean",
		id: "game_time_statistics"
	},
	{
		symbol: "debug_game_save",
		name: "debug_game_save",
		arguments: [],
		returns: "boolean",
		id: "debug_game_save"
	},
	{
		symbol: "recover_saved_games_hack",
		name: "recover_saved_games_hack",
		arguments: [],
		returns: "boolean",
		id: "recover_saved_games_hack"
	},
	{
		symbol: "debug_detail_objects",
		name: "debug_detail_objects",
		arguments: [],
		returns: "boolean",
		id: "debug_detail_objects"
	},
	{
		symbol: "debug_structure_sampling",
		name: "debug_structure_sampling",
		arguments: [],
		returns: "boolean",
		id: "debug_structure_sampling"
	},
	{
		symbol: "display_precache_progress",
		name: "display_precache_progress",
		arguments: [],
		returns: "boolean",
		id: "display_precache_progress"
	},
	{
		symbol: "log_precache_progress",
		name: "log_precache_progress",
		arguments: [],
		returns: "boolean",
		id: "log_precache_progress"
	},
	{
		symbol: "debug_object_garbage_collection",
		name: "debug_object_garbage_collection",
		arguments: [],
		returns: "boolean",
		id: "debug_object_garbage_collection"
	},
	{
		symbol: "debug_object_dump_log",
		name: "debug_object_dump_log",
		arguments: [],
		returns: "boolean",
		id: "debug_object_dump_log"
	},
	{
		symbol: "allow_all_sounds_on_player",
		name: "allow_all_sounds_on_player",
		arguments: [],
		returns: "boolean",
		id: "allow_all_sounds_on_player"
	},
	{
		symbol: "disable_player_rotation",
		name: "disable_player_rotation",
		arguments: [],
		returns: "boolean",
		id: "disable_player_rotation"
	},
	{
		symbol: "player_rotation_scale",
		name: "player_rotation_scale",
		arguments: [],
		returns: "real",
		id: "player_rotation_scale"
	},
	{
		symbol: "temporary_hud",
		name: "temporary_hud",
		arguments: [],
		returns: "boolean",
		id: "temporary_hud"
	},
	{
		symbol: "disable_hud",
		name: "disable_hud",
		arguments: [],
		returns: "boolean",
		id: "disable_hud"
	},
	{
		symbol: "new_hud_debug_dashlights",
		name: "new_hud_debug_dashlights",
		arguments: [],
		returns: "boolean",
		id: "new_hud_debug_dashlights"
	},
	{
		symbol: "debug_unit_all_animations",
		name: "debug_unit_all_animations",
		arguments: [],
		returns: "boolean",
		id: "debug_unit_all_animations"
	},
	{
		symbol: "debug_unit_animations",
		name: "debug_unit_animations",
		arguments: [],
		returns: "boolean",
		id: "debug_unit_animations"
	},
	{
		symbol: "debug_unit_illumination",
		name: "debug_unit_illumination",
		arguments: [],
		returns: "boolean",
		id: "debug_unit_illumination"
	},
	{
		symbol: "debug_unit_active_camo_frequency_modulator",
		name: "debug_unit_active_camo_frequency_modulator",
		arguments: [],
		returns: "real",
		id: "debug_unit_active_camo_frequency_modulator"
	},
	{
		symbol: "debug_unit_active_camo_frequency_modulator_bias",
		name: "debug_unit_active_camo_frequency_modulator_bias",
		arguments: [],
		returns: "real",
		id: "debug_unit_active_camo_frequency_modulator_bias"
	},
	{
		symbol: "debug_player_melee_attack",
		name: "debug_player_melee_attack",
		arguments: [],
		returns: "boolean",
		id: "debug_player_melee_attack"
	},
	{
		symbol: "debug_boarding_force_enemy",
		name: "debug_boarding_force_enemy",
		arguments: [],
		returns: "boolean",
		id: "debug_boarding_force_enemy"
	},
	{
		symbol: "debug_model_groups_merge_nothing",
		name: "debug_model_groups_merge_nothing",
		arguments: [],
		returns: "boolean",
		id: "debug_model_groups_merge_nothing"
	},
	{
		symbol: "debug_model_groups_merge_everything",
		name: "debug_model_groups_merge_everything",
		arguments: [],
		returns: "boolean",
		id: "debug_model_groups_merge_everything"
	},
	{
		symbol: "enable_analog_movement",
		name: "enable_analog_movement",
		arguments: [],
		returns: "boolean",
		id: "enable_analog_movement"
	},
	{
		symbol: "enable_eye_tracking",
		name: "enable_eye_tracking",
		arguments: [],
		returns: "boolean",
		id: "enable_eye_tracking"
	},
	{
		symbol: "enable_animation_influenced_flight",
		name: "enable_animation_influenced_flight",
		arguments: [],
		returns: "boolean",
		id: "enable_animation_influenced_flight"
	},
	{
		symbol: "enable_flight_noise",
		name: "enable_flight_noise",
		arguments: [],
		returns: "boolean",
		id: "enable_flight_noise"
	},
	{
		symbol: "enable_player_transitions",
		name: "enable_player_transitions",
		arguments: [],
		returns: "boolean",
		id: "enable_player_transitions"
	},
	{
		symbol: "cheat_deathless_player",
		name: "cheat_deathless_player",
		arguments: [],
		returns: "boolean",
		id: "cheat_deathless_player"
	},
	{
		symbol: "cheat_valhalla",
		name: "cheat_valhalla",
		arguments: [],
		returns: "boolean",
		id: "cheat_valhalla"
	},
	{
		symbol: "cheat_jetpack",
		name: "cheat_jetpack",
		arguments: [],
		returns: "boolean",
		id: "cheat_jetpack"
	},
	{
		symbol: "cheat_infinite_ammo",
		name: "cheat_infinite_ammo",
		arguments: [],
		returns: "boolean",
		id: "cheat_infinite_ammo"
	},
	{
		symbol: "cheat_bottomless_clip",
		name: "cheat_bottomless_clip",
		arguments: [],
		returns: "boolean",
		id: "cheat_bottomless_clip"
	},
	{
		symbol: "cheat_bump_possession",
		name: "cheat_bump_possession",
		arguments: [],
		returns: "boolean",
		id: "cheat_bump_possession"
	},
	{
		symbol: "cheat_super_jump",
		name: "cheat_super_jump",
		arguments: [],
		returns: "boolean",
		id: "cheat_super_jump"
	},
	{
		symbol: "cheat_reflexive_damage_effects",
		name: "cheat_reflexive_damage_effects",
		arguments: [],
		returns: "boolean",
		id: "cheat_reflexive_damage_effects"
	},
	{
		symbol: "cheat_medusa",
		name: "cheat_medusa",
		arguments: [],
		returns: "boolean",
		id: "cheat_medusa"
	},
	{
		symbol: "cheat_omnipotent",
		name: "cheat_omnipotent",
		arguments: [],
		returns: "boolean",
		id: "cheat_omnipotent"
	},
	{
		symbol: "cheat_controller",
		name: "cheat_controller",
		arguments: [],
		returns: "boolean",
		id: "cheat_controller"
	},
	{
		symbol: "cheat_chevy",
		name: "cheat_chevy",
		arguments: [],
		returns: "boolean",
		id: "cheat_chevy"
	},
	{
		symbol: "debug_simulate_gamepad",
		name: "debug_simulate_gamepad",
		arguments: [],
		returns: "long",
		id: "debug_simulate_gamepad"
	},
	{
		symbol: "effects_corpse_nonviolent",
		name: "effects_corpse_nonviolent",
		arguments: [],
		returns: "boolean",
		id: "effects_corpse_nonviolent"
	},
	{
		symbol: "debug_effects_nonviolent",
		name: "debug_effects_nonviolent",
		arguments: [],
		returns: "boolean",
		id: "debug_effects_nonviolent"
	},
	{
		symbol: "debug_effects_locations",
		name: "debug_effects_locations",
		arguments: [],
		returns: "boolean",
		id: "debug_effects_locations"
	},
	{
		symbol: "debug_effects_allocation",
		name: "debug_effects_allocation",
		arguments: [],
		returns: "boolean",
		id: "debug_effects_allocation"
	},
	{
		symbol: "debug_effects_play_distances",
		name: "debug_effects_play_distances",
		arguments: [],
		returns: "boolean",
		id: "debug_effects_play_distances"
	},
	{
		symbol: "sound_global_room_gain",
		name: "sound_global_room_gain",
		arguments: [],
		returns: "real",
		id: "sound_global_room_gain"
	},
	{
		symbol: "enable_pc_sound",
		name: "enable_pc_sound",
		arguments: [],
		returns: "boolean",
		id: "enable_pc_sound"
	},
	{
		symbol: "debug_sound_cache",
		name: "debug_sound_cache",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_cache"
	},
	{
		symbol: "debug_sound",
		name: "debug_sound",
		arguments: [],
		returns: "boolean",
		id: "debug_sound"
	},
	{
		symbol: "debug_looping_sound",
		name: "debug_looping_sound",
		arguments: [],
		returns: "boolean",
		id: "debug_looping_sound"
	},
	{
		symbol: "debug_sound_channels",
		name: "debug_sound_channels",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels"
	},
	{
		symbol: "debug_sound_reverb",
		name: "debug_sound_reverb",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_reverb"
	},
	{
		symbol: "sound_cache_graph",
		name: "sound_cache_graph",
		arguments: [],
		returns: "boolean",
		id: "sound_cache_graph"
	},
	{
		symbol: "debug_speaker_output_peak",
		name: "debug_speaker_output_peak",
		arguments: [],
		returns: "boolean",
		id: "debug_speaker_output_peak"
	},
	{
		symbol: "debug_speaker_output_rms",
		name: "debug_speaker_output_rms",
		arguments: [],
		returns: "boolean",
		id: "debug_speaker_output_rms"
	},
	{
		symbol: "debug_sound_listeners",
		name: "debug_sound_listeners",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_listeners"
	},
	{
		symbol: "debug_sound_reference_counts",
		name: "debug_sound_reference_counts",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_reference_counts"
	},
	{
		symbol: "background_sound_meter_display",
		name: "background_sound_meter_display",
		arguments: [],
		returns: "boolean",
		id: "background_sound_meter_display"
	},
	{
		symbol: "debug_sound_environment_parameters",
		name: "debug_sound_environment_parameters",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_environment_parameters"
	},
	{
		symbol: "debug_sound_channel_overflow",
		name: "debug_sound_channel_overflow",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channel_overflow"
	},
	{
		symbol: "debug_sound_impulse_time",
		name: "debug_sound_impulse_time",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_impulse_time"
	},
	{
		symbol: "debug_sound_impulse_spam",
		name: "debug_sound_impulse_spam",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_impulse_spam"
	},
	{
		symbol: "use_dynamic_object_obstruction",
		name: "use_dynamic_object_obstruction",
		arguments: [],
		returns: "boolean",
		id: "use_dynamic_object_obstruction"
	},
	{
		symbol: "debug_sound_stabbed",
		name: "debug_sound_stabbed",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_stabbed"
	},
	{
		symbol: "debug_sound_environment",
		name: "debug_sound_environment",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_environment"
	},
	{
		symbol: "object_light_ambient_base",
		name: "object_light_ambient_base",
		arguments: [],
		returns: "real",
		id: "object_light_ambient_base"
	},
	{
		symbol: "object_light_ambient_scale",
		name: "object_light_ambient_scale",
		arguments: [],
		returns: "real",
		id: "object_light_ambient_scale"
	},
	{
		symbol: "object_light_secondary_scale",
		name: "object_light_secondary_scale",
		arguments: [],
		returns: "real",
		id: "object_light_secondary_scale"
	},
	{
		symbol: "object_light_secondary_direction_lerp",
		name: "object_light_secondary_direction_lerp",
		arguments: [],
		returns: "real",
		id: "object_light_secondary_direction_lerp"
	},
	{
		symbol: "object_light_interpolate",
		name: "object_light_interpolate",
		arguments: [],
		returns: "boolean",
		id: "object_light_interpolate"
	},
	{
		symbol: "object_light_accuracy_lower_bound",
		name: "object_light_accuracy_lower_bound",
		arguments: [],
		returns: "real",
		id: "object_light_accuracy_lower_bound"
	},
	{
		symbol: "object_light_accuracy_upper_bound",
		name: "object_light_accuracy_upper_bound",
		arguments: [],
		returns: "real",
		id: "object_light_accuracy_upper_bound"
	},
	{
		symbol: "object_light_accuracy_exponent",
		name: "object_light_accuracy_exponent",
		arguments: [],
		returns: "real",
		id: "object_light_accuracy_exponent"
	},
	{
		symbol: "object_light_new",
		name: "object_light_new",
		arguments: [],
		returns: "boolean",
		id: "object_light_new"
	},
	{
		symbol: "object_light_ambient_brightness",
		name: "object_light_ambient_brightness",
		arguments: [],
		returns: "real",
		id: "object_light_ambient_brightness"
	},
	{
		symbol: "object_light_primary_brightness",
		name: "object_light_primary_brightness",
		arguments: [],
		returns: "real",
		id: "object_light_primary_brightness"
	},
	{
		symbol: "object_light_secondary_brightness",
		name: "object_light_secondary_brightness",
		arguments: [],
		returns: "real",
		id: "object_light_secondary_brightness"
	},
	{
		symbol: "object_light_primary_exclusion_cone_lower_bound",
		name: "object_light_primary_exclusion_cone_lower_bound",
		arguments: [],
		returns: "real",
		id: "object_light_primary_exclusion_cone_lower_bound"
	},
	{
		symbol: "object_light_primary_exclusion_cone_upper_bound",
		name: "object_light_primary_exclusion_cone_upper_bound",
		arguments: [],
		returns: "real",
		id: "object_light_primary_exclusion_cone_upper_bound"
	},
	{
		symbol: "object_light_secondary_exclusion_cone_lower_bound",
		name: "object_light_secondary_exclusion_cone_lower_bound",
		arguments: [],
		returns: "real",
		id: "object_light_secondary_exclusion_cone_lower_bound"
	},
	{
		symbol: "object_light_secondary_exclusion_cone_upper_bound",
		name: "object_light_secondary_exclusion_cone_upper_bound",
		arguments: [],
		returns: "real",
		id: "object_light_secondary_exclusion_cone_upper_bound"
	},
	{
		symbol: "object_light_secondary_rotation",
		name: "object_light_secondary_rotation",
		arguments: [],
		returns: "real",
		id: "object_light_secondary_rotation"
	},
	{
		symbol: "light_local_basis",
		name: "light_local_basis",
		arguments: [],
		returns: "boolean",
		id: "light_local_basis"
	},
	{
		symbol: "havok_collision_tolerance",
		name: "havok_collision_tolerance",
		arguments: [],
		returns: "real",
		id: "havok_collision_tolerance"
	},
	{
		symbol: "havok_debug_mode",
		name: "havok_debug_mode",
		arguments: [],
		returns: "long",
		id: "havok_debug_mode"
	},
	{
		symbol: "havok_environment_type",
		name: "havok_environment_type",
		arguments: [],
		returns: "long",
		id: "havok_environment_type"
	},
	{
		symbol: "havok_shape_radius",
		name: "havok_shape_radius",
		arguments: [],
		returns: "real",
		id: "havok_shape_radius"
	},
	{
		symbol: "havok_jumping_beans",
		name: "havok_jumping_beans",
		arguments: [],
		returns: "boolean",
		id: "havok_jumping_beans"
	},
	{
		symbol: "havok_weld_environment",
		name: "havok_weld_environment",
		arguments: [],
		returns: "boolean",
		id: "havok_weld_environment"
	},
	{
		symbol: "havok_enable_back_stepping",
		name: "havok_enable_back_stepping",
		arguments: [],
		returns: "boolean",
		id: "havok_enable_back_stepping"
	},
	{
		symbol: "havok_enable_sweep_shapes",
		name: "havok_enable_sweep_shapes",
		arguments: [],
		returns: "boolean",
		id: "havok_enable_sweep_shapes"
	},
	{
		symbol: "havok_display_stats",
		name: "havok_display_stats",
		arguments: [],
		returns: "boolean",
		id: "havok_display_stats"
	},
	{
		symbol: "havok_back_step_penetration_depth",
		name: "havok_back_step_penetration_depth",
		arguments: [],
		returns: "real",
		id: "havok_back_step_penetration_depth"
	},
	{
		symbol: "impacts_debug",
		name: "impacts_debug",
		arguments: [],
		returns: "boolean",
		id: "impacts_debug"
	},
	{
		symbol: "collision_damage_debug",
		name: "collision_damage_debug",
		arguments: [],
		returns: "boolean",
		id: "collision_damage_debug"
	},
	{
		symbol: "havok_play_impact_effects",
		name: "havok_play_impact_effects",
		arguments: [],
		returns: "boolean",
		id: "havok_play_impact_effects"
	},
	{
		symbol: "havok_play_biped_impact_effects",
		name: "havok_play_biped_impact_effects",
		arguments: [],
		returns: "boolean",
		id: "havok_play_biped_impact_effects"
	},
	{
		symbol: "physics_debug",
		name: "physics_debug",
		arguments: [],
		returns: "boolean",
		id: "physics_debug"
	},
	{
		symbol: "havok_cleanup_inactive_agents",
		name: "havok_cleanup_inactive_agents",
		arguments: [],
		returns: "boolean",
		id: "havok_cleanup_inactive_agents"
	},
	{
		symbol: "havok_memory_always_system",
		name: "havok_memory_always_system",
		arguments: [],
		returns: "boolean",
		id: "havok_memory_always_system"
	},
	{
		symbol: "render_environment",
		name: "render_environment",
		arguments: [],
		returns: "boolean",
		id: "render_environment"
	},
	{
		symbol: "render_objects",
		name: "render_objects",
		arguments: [],
		returns: "boolean",
		id: "render_objects"
	},
	{
		symbol: "render_instanced_geometry",
		name: "render_instanced_geometry",
		arguments: [],
		returns: "boolean",
		id: "render_instanced_geometry"
	},
	{
		symbol: "render_sky",
		name: "render_sky",
		arguments: [],
		returns: "boolean",
		id: "render_sky"
	},
	{
		symbol: "render_fog",
		name: "render_fog",
		arguments: [],
		returns: "boolean",
		id: "render_fog"
	},
	{
		symbol: "render_patchy_fog",
		name: "render_patchy_fog",
		arguments: [],
		returns: "boolean",
		id: "render_patchy_fog"
	},
	{
		symbol: "render_lens_flares",
		name: "render_lens_flares",
		arguments: [],
		returns: "boolean",
		id: "render_lens_flares"
	},
	{
		symbol: "render_decals",
		name: "render_decals",
		arguments: [],
		returns: "boolean",
		id: "render_decals"
	},
	{
		symbol: "render_colonies",
		name: "render_colonies",
		arguments: [],
		returns: "boolean",
		id: "render_colonies"
	},
	{
		symbol: "render_contrails",
		name: "render_contrails",
		arguments: [],
		returns: "boolean",
		id: "render_contrails"
	},
	{
		symbol: "render_particles",
		name: "render_particles",
		arguments: [],
		returns: "boolean",
		id: "render_particles"
	},
	{
		symbol: "render_psystems",
		name: "render_psystems",
		arguments: [],
		returns: "boolean",
		id: "render_psystems"
	},
	{
		symbol: "render_wsystems",
		name: "render_wsystems",
		arguments: [],
		returns: "boolean",
		id: "render_wsystems"
	},
	{
		symbol: "render_decorators",
		name: "render_decorators",
		arguments: [],
		returns: "boolean",
		id: "render_decorators"
	},
	{
		symbol: "render_old_dof",
		name: "render_old_dof",
		arguments: [],
		returns: "boolean",
		id: "render_old_dof"
	},
	{
		symbol: "render_particles_use_visibility",
		name: "render_particles_use_visibility",
		arguments: [],
		returns: "boolean",
		id: "render_particles_use_visibility"
	},
	{
		symbol: "render_particles_render_bounding_sphere",
		name: "render_particles_render_bounding_sphere",
		arguments: [],
		returns: "boolean",
		id: "render_particles_render_bounding_sphere"
	},
	{
		symbol: "render_submit_opaque",
		name: "render_submit_opaque",
		arguments: [],
		returns: "boolean",
		id: "render_submit_opaque"
	},
	{
		symbol: "render_submit_transparent",
		name: "render_submit_transparent",
		arguments: [],
		returns: "boolean",
		id: "render_submit_transparent"
	},
	{
		symbol: "render_debug_decorator_visibility",
		name: "render_debug_decorator_visibility",
		arguments: [],
		returns: "boolean",
		id: "render_debug_decorator_visibility"
	},
	{
		symbol: "render_debug_decorator_octree",
		name: "render_debug_decorator_octree",
		arguments: [],
		returns: "boolean",
		id: "render_debug_decorator_octree"
	},
	{
		symbol: "render_debug_decorator_group_visibility",
		name: "render_debug_decorator_group_visibility",
		arguments: [],
		returns: "boolean",
		id: "render_debug_decorator_group_visibility"
	},
	{
		symbol: "render_debug_decorators",
		name: "render_debug_decorators",
		arguments: [],
		returns: "boolean",
		id: "render_debug_decorators"
	},
	{
		symbol: "render_shadow_force_self_shadow",
		name: "render_shadow_force_self_shadow",
		arguments: [],
		returns: "boolean",
		id: "render_shadow_force_self_shadow"
	},
	{
		symbol: "render_debug_lightmap_shadows",
		name: "render_debug_lightmap_shadows",
		arguments: [],
		returns: "boolean",
		id: "render_debug_lightmap_shadows"
	},
	{
		symbol: "render_disable_screen_effects_not_first_person",
		name: "render_disable_screen_effects_not_first_person",
		arguments: [],
		returns: "boolean",
		id: "render_disable_screen_effects_not_first_person"
	},
	{
		symbol: "render_debug_cloth",
		name: "render_debug_cloth",
		arguments: [],
		returns: "boolean",
		id: "render_debug_cloth"
	},
	{
		symbol: "render_debug_object_lighting",
		name: "render_debug_object_lighting",
		arguments: [],
		returns: "boolean",
		id: "render_debug_object_lighting"
	},
	{
		symbol: "render_debug_object_lighting_refresh",
		name: "render_debug_object_lighting_refresh",
		arguments: [],
		returns: "boolean",
		id: "render_debug_object_lighting_refresh"
	},
	{
		symbol: "render_debug_fake_lightprobes",
		name: "render_debug_fake_lightprobes",
		arguments: [],
		returns: "boolean",
		id: "render_debug_fake_lightprobes"
	},
	{
		symbol: "render_debug_infinite_framerate",
		name: "render_debug_infinite_framerate",
		arguments: [],
		returns: "boolean",
		id: "render_debug_infinite_framerate"
	},
	{
		symbol: "render_debug_no_sapien_textures",
		name: "render_debug_no_sapien_textures",
		arguments: [],
		returns: "boolean",
		id: "render_debug_no_sapien_textures"
	},
	{
		symbol: "render_debug_set_pix_profile_mode",
		name: "render_debug_set_pix_profile_mode",
		arguments: [],
		returns: "boolean",
		id: "render_debug_set_pix_profile_mode"
	},
	{
		symbol: "render_debug_toggle_default_lightmaps_texaccum",
		name: "render_debug_toggle_default_lightmaps_texaccum",
		arguments: [],
		returns: "long",
		id: "render_debug_toggle_default_lightmaps_texaccum"
	},
	{
		symbol: "render_debug_single_shader",
		name: "render_debug_single_shader",
		arguments: [],
		returns: "boolean",
		id: "render_debug_single_shader"
	},
	{
		symbol: "render_debug_simple_shader",
		name: "render_debug_simple_shader",
		arguments: [],
		returns: "boolean",
		id: "render_debug_simple_shader"
	},
	{
		symbol: "shader_submit_record_globals_active",
		name: "shader_submit_record_globals_active",
		arguments: [],
		returns: "boolean",
		id: "shader_submit_record_globals_active"
	},
	{
		symbol: "shader_submit_record_globals_active_verbose",
		name: "shader_submit_record_globals_active_verbose",
		arguments: [],
		returns: "boolean",
		id: "shader_submit_record_globals_active_verbose"
	},
	{
		symbol: "g_shader_and_mipmap_lod_scale",
		name: "g_shader_and_mipmap_lod_scale",
		arguments: [],
		returns: "real",
		id: "g_shader_and_mipmap_lod_scale"
	},
	{
		symbol: "render_debug_emitters",
		name: "render_debug_emitters",
		arguments: [],
		returns: "boolean",
		id: "render_debug_emitters"
	},
	{
		symbol: "render_debug_locations",
		name: "render_debug_locations",
		arguments: [],
		returns: "boolean",
		id: "render_debug_locations"
	},
	{
		symbol: "render_debug_particles",
		name: "render_debug_particles",
		arguments: [],
		returns: "boolean",
		id: "render_debug_particles"
	},
	{
		symbol: "render_dyanmic_objects_sh",
		name: "render_dyanmic_objects_sh",
		arguments: [],
		returns: "boolean",
		id: "render_dyanmic_objects_sh"
	},
	{
		symbol: "debug_light_probes",
		name: "debug_light_probes",
		arguments: [],
		returns: "boolean",
		id: "debug_light_probes"
	},
	{
		symbol: "render_water_enable",
		name: "render_water_enable",
		arguments: [],
		returns: "boolean",
		id: "render_water_enable"
	},
	{
		symbol: "render_weather_enable",
		name: "render_weather_enable",
		arguments: [],
		returns: "boolean",
		id: "render_weather_enable"
	},
	{
		symbol: "texture_camera_view",
		name: "texture_camera_view",
		arguments: [],
		returns: "boolean",
		id: "texture_camera_view"
	},
	{
		symbol: "texture_camera_scale",
		name: "texture_camera_scale",
		arguments: [],
		returns: "real",
		id: "texture_camera_scale"
	},
	{
		symbol: "debug_inactive_objects",
		name: "debug_inactive_objects",
		arguments: [],
		returns: "boolean",
		id: "debug_inactive_objects"
	},
	{
		symbol: "debug_pvs",
		name: "debug_pvs",
		arguments: [],
		returns: "boolean",
		id: "debug_pvs"
	},
	{
		symbol: "debug_pvs_render_all",
		name: "debug_pvs_render_all",
		arguments: [],
		returns: "boolean",
		id: "debug_pvs_render_all"
	},
	{
		symbol: "debug_pvs_activation",
		name: "debug_pvs_activation",
		arguments: [],
		returns: "boolean",
		id: "debug_pvs_activation"
	},
	{
		symbol: "render_debug_use_sorted_cache",
		name: "render_debug_use_sorted_cache",
		arguments: [],
		returns: "boolean",
		id: "render_debug_use_sorted_cache"
	},
	{
		symbol: "render_light_traversal",
		name: "render_light_traversal",
		arguments: [],
		returns: "boolean",
		id: "render_light_traversal"
	},
	{
		symbol: "render_default_lighting",
		name: "render_default_lighting",
		arguments: [],
		returns: "boolean",
		id: "render_default_lighting"
	},
	{
		symbol: "render_default_lighting_at_console",
		name: "render_default_lighting_at_console",
		arguments: [],
		returns: "boolean",
		id: "render_default_lighting_at_console"
	},
	{
		symbol: "render_default_lighting_automatic",
		name: "render_default_lighting_automatic",
		arguments: [],
		returns: "boolean",
		id: "render_default_lighting_automatic"
	},
	{
		symbol: "render_light_restrict_by_light_index",
		name: "render_light_restrict_by_light_index",
		arguments: [],
		returns: "long",
		id: "render_light_restrict_by_light_index"
	},
	{
		symbol: "render_lights_specular_fade_disable",
		name: "render_lights_specular_fade_disable",
		arguments: [],
		returns: "boolean",
		id: "render_lights_specular_fade_disable"
	},
	{
		symbol: "render_light_suppressor_enabled",
		name: "render_light_suppressor_enabled",
		arguments: [],
		returns: "boolean",
		id: "render_light_suppressor_enabled"
	},
	{
		symbol: "debug_light_suppressor",
		name: "debug_light_suppressor",
		arguments: [],
		returns: "long",
		id: "debug_light_suppressor"
	},
	{
		symbol: "visibility_debug_region_projections",
		name: "visibility_debug_region_projections",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_region_projections"
	},
	{
		symbol: "visibility_debug_working_portals",
		name: "visibility_debug_working_portals",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_working_portals"
	},
	{
		symbol: "visibility_debug_region_volumes",
		name: "visibility_debug_region_volumes",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_region_volumes"
	},
	{
		symbol: "visibility_debug_volume_intersections",
		name: "visibility_debug_volume_intersections",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_volume_intersections"
	},
	{
		symbol: "visibility_debug_region_volumes_by_cluster_index",
		name: "visibility_debug_region_volumes_by_cluster_index",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_region_volumes_by_cluster_index"
	},
	{
		symbol: "visibility_debug_region_volumes_cluster_index",
		name: "visibility_debug_region_volumes_cluster_index",
		arguments: [],
		returns: "long",
		id: "visibility_debug_region_volumes_cluster_index"
	},
	{
		symbol: "visibility_debug_portals",
		name: "visibility_debug_portals",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_portals"
	},
	{
		symbol: "visibility_debug_portals_cluster_index",
		name: "visibility_debug_portals_cluster_index",
		arguments: [],
		returns: "long",
		id: "visibility_debug_portals_cluster_index"
	},
	{
		symbol: "visibility_debug_subcluster_lighting",
		name: "visibility_debug_subcluster_lighting",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_subcluster_lighting"
	},
	{
		symbol: "visibility_debug_subcluster_cycle",
		name: "visibility_debug_subcluster_cycle",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_subcluster_cycle"
	},
	{
		symbol: "visibility_debug_subcluster_lighting_text_list",
		name: "visibility_debug_subcluster_lighting_text_list",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_subcluster_lighting_text_list"
	},
	{
		symbol: "visibility_debug_light_cluster_intersections",
		name: "visibility_debug_light_cluster_intersections",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_light_cluster_intersections"
	},
	{
		symbol: "visibility_debug_light_cluster_intersections_mode",
		name: "visibility_debug_light_cluster_intersections_mode",
		arguments: [],
		returns: "long",
		id: "visibility_debug_light_cluster_intersections_mode"
	},
	{
		symbol: "visibility_debug_dof",
		name: "visibility_debug_dof",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_dof"
	},
	{
		symbol: "visibility_debug_allow_part_mopp",
		name: "visibility_debug_allow_part_mopp",
		arguments: [],
		returns: "boolean",
		id: "visibility_debug_allow_part_mopp"
	},
	{
		symbol: "visibility_dont_use_precomputed_lights",
		name: "visibility_dont_use_precomputed_lights",
		arguments: [],
		returns: "boolean",
		id: "visibility_dont_use_precomputed_lights"
	},
	{
		symbol: "visibility_perform_final_checks",
		name: "visibility_perform_final_checks",
		arguments: [],
		returns: "boolean",
		id: "visibility_perform_final_checks"
	},
	{
		symbol: "visibility_merge_working_portals",
		name: "visibility_merge_working_portals",
		arguments: [],
		returns: "boolean",
		id: "visibility_merge_working_portals"
	},
	{
		symbol: "debug_objects",
		name: "debug_objects",
		arguments: [],
		returns: "boolean",
		id: "debug_objects"
	},
	{
		symbol: "debug_objects_position_velocity",
		name: "debug_objects_position_velocity",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_position_velocity"
	},
	{
		symbol: "debug_objects_origin",
		name: "debug_objects_origin",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_origin"
	},
	{
		symbol: "debug_objects_root_node",
		name: "debug_objects_root_node",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_root_node"
	},
	{
		symbol: "debug_objects_bounding_spheres",
		name: "debug_objects_bounding_spheres",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_bounding_spheres"
	},
	{
		symbol: "debug_objects_dynamic_render_bounding_spheres",
		name: "debug_objects_dynamic_render_bounding_spheres",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_dynamic_render_bounding_spheres"
	},
	{
		symbol: "debug_objects_render models",
		name: "debug_objects_render models",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_render models"
	},
	{
		symbol: "debug_objects_collision_models",
		name: "debug_objects_collision_models",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_collision_models"
	},
	{
		symbol: "debug_objects_early_movers",
		name: "debug_objects_early_movers",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_early_movers"
	},
	{
		symbol: "debug_objects_contact_points",
		name: "debug_objects_contact_points",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_contact_points"
	},
	{
		symbol: "debug_objects_constraints",
		name: "debug_objects_constraints",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_constraints"
	},
	{
		symbol: "debug_objects_vehicle_physics",
		name: "debug_objects_vehicle_physics",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_vehicle_physics"
	},
	{
		symbol: "debug_objects_mass",
		name: "debug_objects_mass",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_mass"
	},
	{
		symbol: "debug_objects_physics_models",
		name: "debug_objects_physics_models",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_physics_models"
	},
	{
		symbol: "debug_objects_names",
		name: "debug_objects_names",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_names"
	},
	{
		symbol: "debug_objects_full_names",
		name: "debug_objects_full_names",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_full_names"
	},
	{
		symbol: "debug_objects_indices",
		name: "debug_objects_indices",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_indices"
	},
	{
		symbol: "debug_objects_functions",
		name: "debug_objects_functions",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_functions"
	},
	{
		symbol: "debug_objects_model_targets",
		name: "debug_objects_model_targets",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_model_targets"
	},
	{
		symbol: "debug_objects_pathfinding",
		name: "debug_objects_pathfinding",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_pathfinding"
	},
	{
		symbol: "debug_objects_profile_times",
		name: "debug_objects_profile_times",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_profile_times"
	},
	{
		symbol: "debug_objects_node_bounds",
		name: "debug_objects_node_bounds",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_node_bounds"
	},
	{
		symbol: "debug_objects_unit_vectors",
		name: "debug_objects_unit_vectors",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_vectors"
	},
	{
		symbol: "debug_objects_unit_seats",
		name: "debug_objects_unit_seats",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_seats"
	},
	{
		symbol: "debug_objects_unit_mouth_apeture",
		name: "debug_objects_unit_mouth_apeture",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_mouth_apeture"
	},
	{
		symbol: "debug_objects_unit_firing",
		name: "debug_objects_unit_firing",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_firing"
	},
	{
		symbol: "debug_objects_unit_state",
		name: "debug_objects_unit_state",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_state"
	},
	{
		symbol: "debug_objects_unit_lipsync",
		name: "debug_objects_unit_lipsync",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_lipsync"
	},
	{
		symbol: "debug_objects_unit_lipsync_verbose",
		name: "debug_objects_unit_lipsync_verbose",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_lipsync_verbose"
	},
	{
		symbol: "debug_objects_unit_emotion",
		name: "debug_objects_unit_emotion",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_emotion"
	},
	{
		symbol: "debug_objects_unit_acceleration",
		name: "debug_objects_unit_acceleration",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_acceleration"
	},
	{
		symbol: "debug_objects_unit_camera",
		name: "debug_objects_unit_camera",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_camera"
	},
	{
		symbol: "debug_objects_biped_autoaim_pills",
		name: "debug_objects_biped_autoaim_pills",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_biped_autoaim_pills"
	},
	{
		symbol: "debug_objects_physics_control_node",
		name: "debug_objects_physics_control_node",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_physics_control_node"
	},
	{
		symbol: "debug_objects_ground_plane",
		name: "debug_objects_ground_plane",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_ground_plane"
	},
	{
		symbol: "debug_objects_movement_mode",
		name: "debug_objects_movement_mode",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_movement_mode"
	},
	{
		symbol: "debug_objects_unit_pathfinding_surface",
		name: "debug_objects_unit_pathfinding_surface",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_unit_pathfinding_surface"
	},
	{
		symbol: "debug_objects_devices",
		name: "debug_objects_devices",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_devices"
	},
	{
		symbol: "debug_objects_machines",
		name: "debug_objects_machines",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_machines"
	},
	{
		symbol: "debug_objects_garbage",
		name: "debug_objects_garbage",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_garbage"
	},
	{
		symbol: "debug_objects_type_mask",
		name: "debug_objects_type_mask",
		arguments: [],
		returns: "long",
		id: "debug_objects_type_mask"
	},
	{
		symbol: "debug_objects_sound_spheres",
		name: "debug_objects_sound_spheres",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_sound_spheres"
	},
	{
		symbol: "debug_objects_active_nodes",
		name: "debug_objects_active_nodes",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_active_nodes"
	},
	{
		symbol: "debug_objects_animation_times",
		name: "debug_objects_animation_times",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_animation_times"
	},
	{
		symbol: "debug_objects_freeze_ragdolls",
		name: "debug_objects_freeze_ragdolls",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_freeze_ragdolls"
	},
	{
		symbol: "debug_objects_disable_relaxation",
		name: "debug_objects_disable_relaxation",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_disable_relaxation"
	},
	{
		symbol: "debug_objects_sentinel_physics_ignore_lag",
		name: "debug_objects_sentinel_physics_ignore_lag",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_sentinel_physics_ignore_lag"
	},
	{
		symbol: "debug_objects_ignore_node_masks",
		name: "debug_objects_ignore_node_masks",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_ignore_node_masks"
	},
	{
		symbol: "debug_objects_force_awake",
		name: "debug_objects_force_awake",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_force_awake"
	},
	{
		symbol: "debug_objects_force_render_time_node_processing",
		name: "debug_objects_force_render_time_node_processing",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_force_render_time_node_processing"
	},
	{
		symbol: "debug_objects_disable_node_animation",
		name: "debug_objects_disable_node_animation",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_disable_node_animation"
	},
	{
		symbol: "debug_objects_object",
		name: "debug_objects_object",
		arguments: [],
		returns: "object",
		id: "debug_objects_object"
	},
	{
		symbol: "debug_objects_player_only",
		name: "debug_objects_player_only",
		arguments: [],
		returns: "boolean",
		id: "debug_objects_player_only"
	},
	{
		symbol: "render model_nodes",
		name: "render model_nodes",
		arguments: [],
		returns: "boolean",
		id: "render model_nodes"
	},
	{
		symbol: "render model_point_counts",
		name: "render model_point_counts",
		arguments: [],
		returns: "boolean",
		id: "render model_point_counts"
	},
	{
		symbol: "render model_vertex_counts",
		name: "render model_vertex_counts",
		arguments: [],
		returns: "boolean",
		id: "render model_vertex_counts"
	},
	{
		symbol: "render model_names",
		name: "render model_names",
		arguments: [],
		returns: "boolean",
		id: "render model_names"
	},
	{
		symbol: "render model_triangle_counts",
		name: "render model_triangle_counts",
		arguments: [],
		returns: "boolean",
		id: "render model_triangle_counts"
	},
	{
		symbol: "render model_collision_vertex_counts",
		name: "render model_collision_vertex_counts",
		arguments: [],
		returns: "boolean",
		id: "render model_collision_vertex_counts"
	},
	{
		symbol: "render model_collision_surface_counts",
		name: "render model_collision_surface_counts",
		arguments: [],
		returns: "boolean",
		id: "render model_collision_surface_counts"
	},
	{
		symbol: "render model_texture_usage",
		name: "render model_texture_usage",
		arguments: [],
		returns: "boolean",
		id: "render model_texture_usage"
	},
	{
		symbol: "render model_geometry_usage",
		name: "render model_geometry_usage",
		arguments: [],
		returns: "boolean",
		id: "render model_geometry_usage"
	},
	{
		symbol: "render model_cost",
		name: "render model_cost",
		arguments: [],
		returns: "boolean",
		id: "render model_cost"
	},
	{
		symbol: "render model_markers",
		name: "render model_markers",
		arguments: [],
		returns: "boolean",
		id: "render model_markers"
	},
	{
		symbol: "render model_no_geometry",
		name: "render model_no_geometry",
		arguments: [],
		returns: "boolean",
		id: "render model_no_geometry"
	},
	{
		symbol: "render model_skinning_disable",
		name: "render model_skinning_disable",
		arguments: [],
		returns: "boolean",
		id: "render model_skinning_disable"
	},
	{
		symbol: "debug_damage",
		name: "debug_damage",
		arguments: [],
		returns: "boolean",
		id: "debug_damage"
	},
	{
		symbol: "debug_player_damage",
		name: "debug_player_damage",
		arguments: [],
		returns: "boolean",
		id: "debug_player_damage"
	},
	{
		symbol: "debug_damage_verbose",
		name: "debug_damage_verbose",
		arguments: [],
		returns: "boolean",
		id: "debug_damage_verbose"
	},
	{
		symbol: "debug_damage_radius",
		name: "debug_damage_radius",
		arguments: [],
		returns: "boolean",
		id: "debug_damage_radius"
	},
	{
		symbol: "debug_scripting",
		name: "debug_scripting",
		arguments: [],
		returns: "boolean",
		id: "debug_scripting"
	},
	{
		symbol: "debug_trigger_volumes",
		name: "debug_trigger_volumes",
		arguments: [],
		returns: "boolean",
		id: "debug_trigger_volumes"
	},
	{
		symbol: "debug_point_physics",
		name: "debug_point_physics",
		arguments: [],
		returns: "boolean",
		id: "debug_point_physics"
	},
	{
		symbol: "debug_motion_sensor_draw_all_units",
		name: "debug_motion_sensor_draw_all_units",
		arguments: [],
		returns: "boolean",
		id: "debug_motion_sensor_draw_all_units"
	},
	{
		symbol: "collision_debug",
		name: "collision_debug",
		arguments: [],
		returns: "boolean",
		id: "collision_debug"
	},
	{
		symbol: "collision_debug_spray",
		name: "collision_debug_spray",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_spray"
	},
	{
		symbol: "collision_debug_features",
		name: "collision_debug_features",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_features"
	},
	{
		symbol: "collision_debug_phantom_bsp",
		name: "collision_debug_phantom_bsp",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_phantom_bsp"
	},
	{
		symbol: "collision_debug_flags",
		name: "collision_debug_flags",
		arguments: [],
		returns: "long",
		id: "collision_debug_flags"
	},
	{
		symbol: "collision_debug_flag_structure",
		name: "collision_debug_flag_structure",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_structure"
	},
	{
		symbol: "collision_debug_flag_media",
		name: "collision_debug_flag_media",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_media"
	},
	{
		symbol: "collision_debug_flag_instanced_geometry",
		name: "collision_debug_flag_instanced_geometry",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_instanced_geometry"
	},
	{
		symbol: "collision_debug_flag_objects",
		name: "collision_debug_flag_objects",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects"
	},
	{
		symbol: "collision_debug_flag_objects_bipeds",
		name: "collision_debug_flag_objects_bipeds",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_bipeds"
	},
	{
		symbol: "collision_debug_flag_objects_vehicles",
		name: "collision_debug_flag_objects_vehicles",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_vehicles"
	},
	{
		symbol: "collision_debug_flag_objects_weapons",
		name: "collision_debug_flag_objects_weapons",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_weapons"
	},
	{
		symbol: "collision_debug_flag_objects_equipment",
		name: "collision_debug_flag_objects_equipment",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_equipment"
	},
	{
		symbol: "collision_debug_flag_objects_garbage",
		name: "collision_debug_flag_objects_garbage",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_garbage"
	},
	{
		symbol: "collision_debug_flag_objects_projectiles",
		name: "collision_debug_flag_objects_projectiles",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_projectiles"
	},
	{
		symbol: "collision_debug_flag_objects_scenery",
		name: "collision_debug_flag_objects_scenery",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_scenery"
	},
	{
		symbol: "collision_debug_flag_objects_machines",
		name: "collision_debug_flag_objects_machines",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_machines"
	},
	{
		symbol: "collision_debug_flag_objects_controls",
		name: "collision_debug_flag_objects_controls",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_controls"
	},
	{
		symbol: "collision_debug_flag_objects_light_fixtures",
		name: "collision_debug_flag_objects_light_fixtures",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_light_fixtures"
	},
	{
		symbol: "collision_debug_flag_objects_sound_scenery",
		name: "collision_debug_flag_objects_sound_scenery",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_sound_scenery"
	},
	{
		symbol: "collision_debug_flag_objects_crates",
		name: "collision_debug_flag_objects_crates",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_crates"
	},
	{
		symbol: "collision_debug_flag_objects_creatures",
		name: "collision_debug_flag_objects_creatures",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_objects_creatures"
	},
	{
		symbol: "collision_debug_flag_ignore_child_objects",
		name: "collision_debug_flag_ignore_child_objects",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_child_objects"
	},
	{
		symbol: "collision_debug_flag_ignore_nonpathfindable_objects",
		name: "collision_debug_flag_ignore_nonpathfindable_objects",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_nonpathfindable_objects"
	},
	{
		symbol: "collision_debug_flag_ignore_cinematic_objects",
		name: "collision_debug_flag_ignore_cinematic_objects",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_cinematic_objects"
	},
	{
		symbol: "collision_debug_flag_ignore_dead_bipeds",
		name: "collision_debug_flag_ignore_dead_bipeds",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_dead_bipeds"
	},
	{
		symbol: "collision_debug_flag_ignore_passthrough_bipeds",
		name: "collision_debug_flag_ignore_passthrough_bipeds",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_passthrough_bipeds"
	},
	{
		symbol: "collision_debug_flag_front_facing_surfaces",
		name: "collision_debug_flag_front_facing_surfaces",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_front_facing_surfaces"
	},
	{
		symbol: "collision_debug_flag_back_facing_surfaces",
		name: "collision_debug_flag_back_facing_surfaces",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_back_facing_surfaces"
	},
	{
		symbol: "collision_debug_flag_ignore_two_sided_surfaces",
		name: "collision_debug_flag_ignore_two_sided_surfaces",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_two_sided_surfaces"
	},
	{
		symbol: "collision_debug_flag_ignore_invisible_surfaces",
		name: "collision_debug_flag_ignore_invisible_surfaces",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_invisible_surfaces"
	},
	{
		symbol: "collision_debug_flag_ignore_breakable_surfaces",
		name: "collision_debug_flag_ignore_breakable_surfaces",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_ignore_breakable_surfaces"
	},
	{
		symbol: "collision_debug_flag_allow_early_out",
		name: "collision_debug_flag_allow_early_out",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_allow_early_out"
	},
	{
		symbol: "collision_debug_flag_try_to_keep_location_valid",
		name: "collision_debug_flag_try_to_keep_location_valid",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_flag_try_to_keep_location_valid"
	},
	{
		symbol: "collision_debug_repeat",
		name: "collision_debug_repeat",
		arguments: [],
		returns: "boolean",
		id: "collision_debug_repeat"
	},
	{
		symbol: "collision_debug_point_x",
		name: "collision_debug_point_x",
		arguments: [],
		returns: "real",
		id: "collision_debug_point_x"
	},
	{
		symbol: "collision_debug_point_y",
		name: "collision_debug_point_y",
		arguments: [],
		returns: "real",
		id: "collision_debug_point_y"
	},
	{
		symbol: "collision_debug_point_z",
		name: "collision_debug_point_z",
		arguments: [],
		returns: "real",
		id: "collision_debug_point_z"
	},
	{
		symbol: "collision_debug_vector_i",
		name: "collision_debug_vector_i",
		arguments: [],
		returns: "real",
		id: "collision_debug_vector_i"
	},
	{
		symbol: "collision_debug_vector_j",
		name: "collision_debug_vector_j",
		arguments: [],
		returns: "real",
		id: "collision_debug_vector_j"
	},
	{
		symbol: "collision_debug_vector_k",
		name: "collision_debug_vector_k",
		arguments: [],
		returns: "real",
		id: "collision_debug_vector_k"
	},
	{
		symbol: "collision_debug_length",
		name: "collision_debug_length",
		arguments: [],
		returns: "real",
		id: "collision_debug_length"
	},
	{
		symbol: "collision_debug_width",
		name: "collision_debug_width",
		arguments: [],
		returns: "real",
		id: "collision_debug_width"
	},
	{
		symbol: "collision_debug_height",
		name: "collision_debug_height",
		arguments: [],
		returns: "real",
		id: "collision_debug_height"
	},
	{
		symbol: "collision_debug_ignore_object_index",
		name: "collision_debug_ignore_object_index",
		arguments: [],
		returns: "long",
		id: "collision_debug_ignore_object_index"
	},
	{
		symbol: "debug_obstacle_path",
		name: "debug_obstacle_path",
		arguments: [],
		returns: "boolean",
		id: "debug_obstacle_path"
	},
	{
		symbol: "debug_obstacle_path_on_failure",
		name: "debug_obstacle_path_on_failure",
		arguments: [],
		returns: "boolean",
		id: "debug_obstacle_path_on_failure"
	},
	{
		symbol: "debug_obstacle_path_start_point_x",
		name: "debug_obstacle_path_start_point_x",
		arguments: [],
		returns: "real",
		id: "debug_obstacle_path_start_point_x"
	},
	{
		symbol: "debug_obstacle_path_start_point_y",
		name: "debug_obstacle_path_start_point_y",
		arguments: [],
		returns: "real",
		id: "debug_obstacle_path_start_point_y"
	},
	{
		symbol: "debug_obstacle_path_start_sector_index",
		name: "debug_obstacle_path_start_sector_index",
		arguments: [],
		returns: "long",
		id: "debug_obstacle_path_start_sector_index"
	},
	{
		symbol: "debug_obstacle_path_goal_point_x",
		name: "debug_obstacle_path_goal_point_x",
		arguments: [],
		returns: "real",
		id: "debug_obstacle_path_goal_point_x"
	},
	{
		symbol: "debug_obstacle_path_goal_point_y",
		name: "debug_obstacle_path_goal_point_y",
		arguments: [],
		returns: "real",
		id: "debug_obstacle_path_goal_point_y"
	},
	{
		symbol: "debug_obstacle_path_goal_sector_index",
		name: "debug_obstacle_path_goal_sector_index",
		arguments: [],
		returns: "long",
		id: "debug_obstacle_path_goal_sector_index"
	},
	{
		symbol: "suppress_pathfinding_generation",
		name: "suppress_pathfinding_generation",
		arguments: [],
		returns: "boolean",
		id: "suppress_pathfinding_generation"
	},
	{
		symbol: "debug_camera",
		name: "debug_camera",
		arguments: [],
		returns: "boolean",
		id: "debug_camera"
	},
	{
		symbol: "debug_tangent_space",
		name: "debug_tangent_space",
		arguments: [],
		returns: "boolean",
		id: "debug_tangent_space"
	},
	{
		symbol: "debug_player",
		name: "debug_player",
		arguments: [],
		returns: "boolean",
		id: "debug_player"
	},
	{
		symbol: "debug_structure",
		name: "debug_structure",
		arguments: [],
		returns: "boolean",
		id: "debug_structure"
	},
	{
		symbol: "debug_structure_automatic",
		name: "debug_structure_automatic",
		arguments: [],
		returns: "boolean",
		id: "debug_structure_automatic"
	},
	{
		symbol: "debug_instanced_geometry",
		name: "debug_instanced_geometry",
		arguments: [],
		returns: "boolean",
		id: "debug_instanced_geometry"
	},
	{
		symbol: "debug_instanced_geometry_bounding_spheres",
		name: "debug_instanced_geometry_bounding_spheres",
		arguments: [],
		returns: "boolean",
		id: "debug_instanced_geometry_bounding_spheres"
	},
	{
		symbol: "debug_instanced_geometry_names",
		name: "debug_instanced_geometry_names",
		arguments: [],
		returns: "boolean",
		id: "debug_instanced_geometry_names"
	},
	{
		symbol: "debug_instanced_geometry_vertex_counts",
		name: "debug_instanced_geometry_vertex_counts",
		arguments: [],
		returns: "boolean",
		id: "debug_instanced_geometry_vertex_counts"
	},
	{
		symbol: "debug_instanced_geometry_collision_geometry",
		name: "debug_instanced_geometry_collision_geometry",
		arguments: [],
		returns: "boolean",
		id: "debug_instanced_geometry_collision_geometry"
	},
	{
		symbol: "debug_structure_surface_references",
		name: "debug_structure_surface_references",
		arguments: [],
		returns: "boolean",
		id: "debug_structure_surface_references"
	},
	{
		symbol: "debug_bsp",
		name: "debug_bsp",
		arguments: [],
		returns: "boolean",
		id: "debug_bsp"
	},
	{
		symbol: "debug_input",
		name: "debug_input",
		arguments: [],
		returns: "boolean",
		id: "debug_input"
	},
	{
		symbol: "debug_permanent_decals",
		name: "debug_permanent_decals",
		arguments: [],
		returns: "boolean",
		id: "debug_permanent_decals"
	},
	{
		symbol: "debug_vector_palette",
		name: "debug_vector_palette",
		arguments: [],
		returns: "boolean",
		id: "debug_vector_palette"
	},
	{
		symbol: "debug_leaf0_index",
		name: "debug_leaf0_index",
		arguments: [],
		returns: "long",
		id: "debug_leaf0_index"
	},
	{
		symbol: "debug_leaf1_index",
		name: "debug_leaf1_index",
		arguments: [],
		returns: "long",
		id: "debug_leaf1_index"
	},
	{
		symbol: "debug_leaf_connection_index",
		name: "debug_leaf_connection_index",
		arguments: [],
		returns: "long",
		id: "debug_leaf_connection_index"
	},
	{
		symbol: "debug_cluster_index",
		name: "debug_cluster_index",
		arguments: [],
		returns: "long",
		id: "debug_cluster_index"
	},
	{
		symbol: "debug_first_person_weapons",
		name: "debug_first_person_weapons",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_weapons"
	},
	{
		symbol: "debug_first_person_models",
		name: "debug_first_person_models",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_models"
	},
	{
		symbol: "debug_fog_planes",
		name: "debug_fog_planes",
		arguments: [],
		returns: "boolean",
		id: "debug_fog_planes"
	},
	{
		symbol: "breakable_surfaces",
		name: "breakable_surfaces",
		arguments: [],
		returns: "boolean",
		id: "breakable_surfaces"
	},
	{
		symbol: "decals",
		name: "decals",
		arguments: [],
		returns: "boolean",
		id: "decals"
	},
	{
		symbol: "debug_decals",
		name: "debug_decals",
		arguments: [],
		returns: "boolean",
		id: "debug_decals"
	},
	{
		symbol: "colonies",
		name: "colonies",
		arguments: [],
		returns: "boolean",
		id: "colonies"
	},
	{
		symbol: "colonies_time_scale",
		name: "colonies_time_scale",
		arguments: [],
		returns: "real",
		id: "colonies_time_scale"
	},
	{
		symbol: "debug_colonies",
		name: "debug_colonies",
		arguments: [],
		returns: "boolean",
		id: "debug_colonies"
	},
	{
		symbol: "debug_colonies_cells",
		name: "debug_colonies_cells",
		arguments: [],
		returns: "boolean",
		id: "debug_colonies_cells"
	},
	{
		symbol: "debug_colonies_spores",
		name: "debug_colonies_spores",
		arguments: [],
		returns: "boolean",
		id: "debug_colonies_spores"
	},
	{
		symbol: "debug_colonies_spore_pods",
		name: "debug_colonies_spore_pods",
		arguments: [],
		returns: "boolean",
		id: "debug_colonies_spore_pods"
	},
	{
		symbol: "debug_colonies_spore_desires",
		name: "debug_colonies_spore_desires",
		arguments: [],
		returns: "long",
		id: "debug_colonies_spore_desires"
	},
	{
		symbol: "debug_colonies_spread",
		name: "debug_colonies_spread",
		arguments: [],
		returns: "boolean",
		id: "debug_colonies_spread"
	},
	{
		symbol: "debug_colonies_change",
		name: "debug_colonies_change",
		arguments: [],
		returns: "boolean",
		id: "debug_colonies_change"
	},
	{
		symbol: "debug_object_lights",
		name: "debug_object_lights",
		arguments: [],
		returns: "boolean",
		id: "debug_object_lights"
	},
	{
		symbol: "debug_lights",
		name: "debug_lights",
		arguments: [],
		returns: "boolean",
		id: "debug_lights"
	},
	{
		symbol: "debug_light_passes",
		name: "debug_light_passes",
		arguments: [],
		returns: "boolean",
		id: "debug_light_passes"
	},
	{
		symbol: "debug_lightmap_sampling",
		name: "debug_lightmap_sampling",
		arguments: [],
		returns: "boolean",
		id: "debug_lightmap_sampling"
	},
	{
		symbol: "debug_biped_landing",
		name: "debug_biped_landing",
		arguments: [],
		returns: "boolean",
		id: "debug_biped_landing"
	},
	{
		symbol: "debug_biped_throttle",
		name: "debug_biped_throttle",
		arguments: [],
		returns: "boolean",
		id: "debug_biped_throttle"
	},
	{
		symbol: "debug_collision_skip_instanced_geometry",
		name: "debug_collision_skip_instanced_geometry",
		arguments: [],
		returns: "boolean",
		id: "debug_collision_skip_instanced_geometry"
	},
	{
		symbol: "debug_collision_skip_objects",
		name: "debug_collision_skip_objects",
		arguments: [],
		returns: "boolean",
		id: "debug_collision_skip_objects"
	},
	{
		symbol: "debug_collision_skip_vectors",
		name: "debug_collision_skip_vectors",
		arguments: [],
		returns: "boolean",
		id: "debug_collision_skip_vectors"
	},
	{
		symbol: "debug_collision_object_payload_collision",
		name: "debug_collision_object_payload_collision",
		arguments: [],
		returns: "boolean",
		id: "debug_collision_object_payload_collision"
	},
	{
		symbol: "debug_material_effects",
		name: "debug_material_effects",
		arguments: [],
		returns: "boolean",
		id: "debug_material_effects"
	},
	{
		symbol: "debug_material_default_effects",
		name: "debug_material_default_effects",
		arguments: [],
		returns: "boolean",
		id: "debug_material_default_effects"
	},
	{
		symbol: "player_training_debug",
		name: "player_training_debug",
		arguments: [],
		returns: "boolean",
		id: "player_training_debug"
	},
	{
		symbol: "player_training_disable",
		name: "player_training_disable",
		arguments: [],
		returns: "boolean",
		id: "player_training_disable"
	},
	{
		symbol: "game_engine_debug_statborg",
		name: "game_engine_debug_statborg",
		arguments: [],
		returns: "boolean",
		id: "game_engine_debug_statborg"
	},
	{
		symbol: "ai_render",
		name: "ai_render",
		arguments: [],
		returns: "boolean",
		id: "ai_render"
	},
	{
		symbol: "ai_render_all_actors",
		name: "ai_render_all_actors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_all_actors"
	},
	{
		symbol: "ai_render_inactive_actors",
		name: "ai_render_inactive_actors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_inactive_actors"
	},
	{
		symbol: "ai_render_lineoffire_crouching",
		name: "ai_render_lineoffire_crouching",
		arguments: [],
		returns: "boolean",
		id: "ai_render_lineoffire_crouching"
	},
	{
		symbol: "ai_render_lineoffire",
		name: "ai_render_lineoffire",
		arguments: [],
		returns: "boolean",
		id: "ai_render_lineoffire"
	},
	{
		symbol: "ai_render_lineofsight",
		name: "ai_render_lineofsight",
		arguments: [],
		returns: "boolean",
		id: "ai_render_lineofsight"
	},
	{
		symbol: "ai_render_ballistic_lineoffire",
		name: "ai_render_ballistic_lineoffire",
		arguments: [],
		returns: "boolean",
		id: "ai_render_ballistic_lineoffire"
	},
	{
		symbol: "ai_render_encounter_activeregion",
		name: "ai_render_encounter_activeregion",
		arguments: [],
		returns: "boolean",
		id: "ai_render_encounter_activeregion"
	},
	{
		symbol: "ai_render_vision_cones",
		name: "ai_render_vision_cones",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vision_cones"
	},
	{
		symbol: "ai_render_current_state",
		name: "ai_render_current_state",
		arguments: [],
		returns: "boolean",
		id: "ai_render_current_state"
	},
	{
		symbol: "ai_render_detailed_state",
		name: "ai_render_detailed_state",
		arguments: [],
		returns: "boolean",
		id: "ai_render_detailed_state"
	},
	{
		symbol: "ai_render_props",
		name: "ai_render_props",
		arguments: [],
		returns: "boolean",
		id: "ai_render_props"
	},
	{
		symbol: "ai_render_props_web",
		name: "ai_render_props_web",
		arguments: [],
		returns: "boolean",
		id: "ai_render_props_web"
	},
	{
		symbol: "ai_render_props_no_friends",
		name: "ai_render_props_no_friends",
		arguments: [],
		returns: "boolean",
		id: "ai_render_props_no_friends"
	},
	{
		symbol: "ai_render_props_unreachable",
		name: "ai_render_props_unreachable",
		arguments: [],
		returns: "boolean",
		id: "ai_render_props_unreachable"
	},
	{
		symbol: "ai_render_props_unopposable",
		name: "ai_render_props_unopposable",
		arguments: [],
		returns: "boolean",
		id: "ai_render_props_unopposable"
	},
	{
		symbol: "ai_render_props_target_weight",
		name: "ai_render_props_target_weight",
		arguments: [],
		returns: "boolean",
		id: "ai_render_props_target_weight"
	},
	{
		symbol: "ai_render_idle_look",
		name: "ai_render_idle_look",
		arguments: [],
		returns: "boolean",
		id: "ai_render_idle_look"
	},
	{
		symbol: "ai_render_support_surfaces",
		name: "ai_render_support_surfaces",
		arguments: [],
		returns: "boolean",
		id: "ai_render_support_surfaces"
	},
	{
		symbol: "ai_render_recent_damage",
		name: "ai_render_recent_damage",
		arguments: [],
		returns: "boolean",
		id: "ai_render_recent_damage"
	},
	{
		symbol: "ai_render_current_damage",
		name: "ai_render_current_damage",
		arguments: [],
		returns: "boolean",
		id: "ai_render_current_damage"
	},
	{
		symbol: "ai_render_threats",
		name: "ai_render_threats",
		arguments: [],
		returns: "boolean",
		id: "ai_render_threats"
	},
	{
		symbol: "ai_render_emotions",
		name: "ai_render_emotions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_emotions"
	},
	{
		symbol: "ai_render_audibility",
		name: "ai_render_audibility",
		arguments: [],
		returns: "boolean",
		id: "ai_render_audibility"
	},
	{
		symbol: "ai_render_aiming_vectors",
		name: "ai_render_aiming_vectors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_aiming_vectors"
	},
	{
		symbol: "ai_render_secondary_looking",
		name: "ai_render_secondary_looking",
		arguments: [],
		returns: "boolean",
		id: "ai_render_secondary_looking"
	},
	{
		symbol: "ai_render_targets",
		name: "ai_render_targets",
		arguments: [],
		returns: "boolean",
		id: "ai_render_targets"
	},
	{
		symbol: "ai_render_targets_last_visible",
		name: "ai_render_targets_last_visible",
		arguments: [],
		returns: "boolean",
		id: "ai_render_targets_last_visible"
	},
	{
		symbol: "ai_render_states",
		name: "ai_render_states",
		arguments: [],
		returns: "boolean",
		id: "ai_render_states"
	},
	{
		symbol: "ai_render_vitality",
		name: "ai_render_vitality",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vitality"
	},
	{
		symbol: "ai_render_active_cover_seeking",
		name: "ai_render_active_cover_seeking",
		arguments: [],
		returns: "boolean",
		id: "ai_render_active_cover_seeking"
	},
	{
		symbol: "ai_render_evaluations",
		name: "ai_render_evaluations",
		arguments: [],
		returns: "boolean",
		id: "ai_render_evaluations"
	},
	{
		symbol: "ai_render_pursuit",
		name: "ai_render_pursuit",
		arguments: [],
		returns: "boolean",
		id: "ai_render_pursuit"
	},
	{
		symbol: "ai_render_shooting",
		name: "ai_render_shooting",
		arguments: [],
		returns: "boolean",
		id: "ai_render_shooting"
	},
	{
		symbol: "ai_render_trigger",
		name: "ai_render_trigger",
		arguments: [],
		returns: "boolean",
		id: "ai_render_trigger"
	},
	{
		symbol: "ai_render_projectile_aiming",
		name: "ai_render_projectile_aiming",
		arguments: [],
		returns: "boolean",
		id: "ai_render_projectile_aiming"
	},
	{
		symbol: "ai_render_aiming_validity",
		name: "ai_render_aiming_validity",
		arguments: [],
		returns: "boolean",
		id: "ai_render_aiming_validity"
	},
	{
		symbol: "ai_render_speech",
		name: "ai_render_speech",
		arguments: [],
		returns: "boolean",
		id: "ai_render_speech"
	},
	{
		symbol: "ai_render_dialogue",
		name: "ai_render_dialogue",
		arguments: [],
		returns: "boolean",
		id: "ai_render_dialogue"
	},
	{
		symbol: "ai_render_dialogue_triggers",
		name: "ai_render_dialogue_triggers",
		arguments: [],
		returns: "boolean",
		id: "ai_render_dialogue_triggers"
	},
	{
		symbol: "ai_render_dialogue_queue",
		name: "ai_render_dialogue_queue",
		arguments: [],
		returns: "boolean",
		id: "ai_render_dialogue_queue"
	},
	{
		symbol: "ai_render_dialogue_queue_team",
		name: "ai_render_dialogue_queue_team",
		arguments: [],
		returns: "short",
		id: "ai_render_dialogue_queue_team"
	},
	{
		symbol: "ai_render_dialogue_player_weights",
		name: "ai_render_dialogue_player_weights",
		arguments: [],
		returns: "boolean",
		id: "ai_render_dialogue_player_weights"
	},
	{
		symbol: "ai_dialogue_test_mode",
		name: "ai_dialogue_test_mode",
		arguments: [],
		returns: "boolean",
		id: "ai_dialogue_test_mode"
	},
	{
		symbol: "ai_render_teams",
		name: "ai_render_teams",
		arguments: [],
		returns: "boolean",
		id: "ai_render_teams"
	},
	{
		symbol: "ai_render_player_ratings",
		name: "ai_render_player_ratings",
		arguments: [],
		returns: "boolean",
		id: "ai_render_player_ratings"
	},
	{
		symbol: "ai_render_spatial_effects",
		name: "ai_render_spatial_effects",
		arguments: [],
		returns: "boolean",
		id: "ai_render_spatial_effects"
	},
	{
		symbol: "ai_render_firing_positions",
		name: "ai_render_firing_positions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_firing_positions"
	},
	{
		symbol: "ai_render_gun_positions",
		name: "ai_render_gun_positions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_gun_positions"
	},
	{
		symbol: "ai_render_burst_geometry",
		name: "ai_render_burst_geometry",
		arguments: [],
		returns: "boolean",
		id: "ai_render_burst_geometry"
	},
	{
		symbol: "ai_render_vehicle_avoidance",
		name: "ai_render_vehicle_avoidance",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vehicle_avoidance"
	},
	{
		symbol: "ai_render_vehicles_enterable",
		name: "ai_render_vehicles_enterable",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vehicles_enterable"
	},
	{
		symbol: "ai_render_melee_check",
		name: "ai_render_melee_check",
		arguments: [],
		returns: "boolean",
		id: "ai_render_melee_check"
	},
	{
		symbol: "ai_render_dialogue_variants",
		name: "ai_render_dialogue_variants",
		arguments: [],
		returns: "boolean",
		id: "ai_render_dialogue_variants"
	},
	{
		symbol: "ai_render_grenades",
		name: "ai_render_grenades",
		arguments: [],
		returns: "boolean",
		id: "ai_render_grenades"
	},
	{
		symbol: "ai_render_danger_zones",
		name: "ai_render_danger_zones",
		arguments: [],
		returns: "boolean",
		id: "ai_render_danger_zones"
	},
	{
		symbol: "ai_render_charge_decisions",
		name: "ai_render_charge_decisions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_charge_decisions"
	},
	{
		symbol: "ai_render_control",
		name: "ai_render_control",
		arguments: [],
		returns: "boolean",
		id: "ai_render_control"
	},
	{
		symbol: "ai_render_activation",
		name: "ai_render_activation",
		arguments: [],
		returns: "boolean",
		id: "ai_render_activation"
	},
	{
		symbol: "ai_render_paths",
		name: "ai_render_paths",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths"
	},
	{
		symbol: "ai_render_paths_selected_only",
		name: "ai_render_paths_selected_only",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_selected_only"
	},
	{
		symbol: "ai_render_paths_destination",
		name: "ai_render_paths_destination",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_destination"
	},
	{
		symbol: "ai_render_paths_raw",
		name: "ai_render_paths_raw",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_raw"
	},
	{
		symbol: "ai_render_paths_current",
		name: "ai_render_paths_current",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_current"
	},
	{
		symbol: "ai_render_paths_failed",
		name: "ai_render_paths_failed",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_failed"
	},
	{
		symbol: "ai_render_paths_smoothed",
		name: "ai_render_paths_smoothed",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_smoothed"
	},
	{
		symbol: "ai_render_paths_avoided",
		name: "ai_render_paths_avoided",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_avoided"
	},
	{
		symbol: "ai_render_paths_error_thresholds",
		name: "ai_render_paths_error_thresholds",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_error_thresholds"
	},
	{
		symbol: "ai_render_paths_avoidance_segment",
		name: "ai_render_paths_avoidance_segment",
		arguments: [],
		returns: "short",
		id: "ai_render_paths_avoidance_segment"
	},
	{
		symbol: "ai_render_paths_avoidance_obstacles",
		name: "ai_render_paths_avoidance_obstacles",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_avoidance_obstacles"
	},
	{
		symbol: "ai_render_paths_avoidance_search",
		name: "ai_render_paths_avoidance_search",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_avoidance_search"
	},
	{
		symbol: "ai_render_paths_nodes",
		name: "ai_render_paths_nodes",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_nodes"
	},
	{
		symbol: "ai_render_paths_nodes_all",
		name: "ai_render_paths_nodes_all",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_nodes_all"
	},
	{
		symbol: "ai_render_paths_nodes_polygons",
		name: "ai_render_paths_nodes_polygons",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_nodes_polygons"
	},
	{
		symbol: "ai_render_paths_nodes_costs",
		name: "ai_render_paths_nodes_costs",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_nodes_costs"
	},
	{
		symbol: "ai_render_paths_nodes_closest",
		name: "ai_render_paths_nodes_closest",
		arguments: [],
		returns: "boolean",
		id: "ai_render_paths_nodes_closest"
	},
	{
		symbol: "ai_render_player_aiming_blocked",
		name: "ai_render_player_aiming_blocked",
		arguments: [],
		returns: "boolean",
		id: "ai_render_player_aiming_blocked"
	},
	{
		symbol: "ai_render_vector_avoidance",
		name: "ai_render_vector_avoidance",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance"
	},
	{
		symbol: "ai_render_vector_avoidance_rays",
		name: "ai_render_vector_avoidance_rays",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_rays"
	},
	{
		symbol: "ai_render_vector_avoidance_sense_t",
		name: "ai_render_vector_avoidance_sense_t",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_sense_t"
	},
	{
		symbol: "ai_render_vector_avoidance_avoid_t",
		name: "ai_render_vector_avoidance_avoid_t",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_avoid_t"
	},
	{
		symbol: "ai_render_vector_avoidance_clear_time",
		name: "ai_render_vector_avoidance_clear_time",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_clear_time"
	},
	{
		symbol: "ai_render_vector_avoidance_weights",
		name: "ai_render_vector_avoidance_weights",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_weights"
	},
	{
		symbol: "ai_render_vector_avoidance_objects",
		name: "ai_render_vector_avoidance_objects",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_objects"
	},
	{
		symbol: "ai_render_vector_avoidance_intermediate",
		name: "ai_render_vector_avoidance_intermediate",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vector_avoidance_intermediate"
	},
	{
		symbol: "ai_render_postcombat",
		name: "ai_render_postcombat",
		arguments: [],
		returns: "boolean",
		id: "ai_render_postcombat"
	},
	{
		symbol: "ai_render_dynamic_firing_positions",
		name: "ai_render_dynamic_firing_positions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_dynamic_firing_positions"
	},
	{
		symbol: "ai_render_clumps",
		name: "ai_render_clumps",
		arguments: [],
		returns: "boolean",
		id: "ai_render_clumps"
	},
	{
		symbol: "ai_render_clump_props",
		name: "ai_render_clump_props",
		arguments: [],
		returns: "boolean",
		id: "ai_render_clump_props"
	},
	{
		symbol: "ai_render_clump_props_all",
		name: "ai_render_clump_props_all",
		arguments: [],
		returns: "boolean",
		id: "ai_render_clump_props_all"
	},
	{
		symbol: "ai_render_sectors",
		name: "ai_render_sectors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_sectors"
	},
	{
		symbol: "ai_render_sector_bsps",
		name: "ai_render_sector_bsps",
		arguments: [],
		returns: "boolean",
		id: "ai_render_sector_bsps"
	},
	{
		symbol: "ai_render_sector_link_errors",
		name: "ai_render_sector_link_errors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_sector_link_errors"
	},
	{
		symbol: "ai_render_intersection_links",
		name: "ai_render_intersection_links",
		arguments: [],
		returns: "boolean",
		id: "ai_render_intersection_links"
	},
	{
		symbol: "ai_render_non_walkable_sectors",
		name: "ai_render_non_walkable_sectors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_non_walkable_sectors"
	},
	{
		symbol: "ai_render_threshold_links",
		name: "ai_render_threshold_links",
		arguments: [],
		returns: "boolean",
		id: "ai_render_threshold_links"
	},
	{
		symbol: "ai_render_sector_geometry_errors",
		name: "ai_render_sector_geometry_errors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_sector_geometry_errors"
	},
	{
		symbol: "ai_pathfinding_generation_verbose",
		name: "ai_pathfinding_generation_verbose",
		arguments: [],
		returns: "boolean",
		id: "ai_pathfinding_generation_verbose"
	},
	{
		symbol: "ai_render_sectors_range_max",
		name: "ai_render_sectors_range_max",
		arguments: [],
		returns: "long",
		id: "ai_render_sectors_range_max"
	},
	{
		symbol: "ai_render_sectors_range_min",
		name: "ai_render_sectors_range_min",
		arguments: [],
		returns: "long",
		id: "ai_render_sectors_range_min"
	},
	{
		symbol: "ai_render_link_specific",
		name: "ai_render_link_specific",
		arguments: [],
		returns: "long",
		id: "ai_render_link_specific"
	},
	{
		symbol: "ai_render_links",
		name: "ai_render_links",
		arguments: [],
		returns: "boolean",
		id: "ai_render_links"
	},
	{
		symbol: "ai_render_user_hints",
		name: "ai_render_user_hints",
		arguments: [],
		returns: "boolean",
		id: "ai_render_user_hints"
	},
	{
		symbol: "ai_render_hints",
		name: "ai_render_hints",
		arguments: [],
		returns: "boolean",
		id: "ai_render_hints"
	},
	{
		symbol: "ai_render_object_hints",
		name: "ai_render_object_hints",
		arguments: [],
		returns: "boolean",
		id: "ai_render_object_hints"
	},
	{
		symbol: "ai_render_object_hints_all",
		name: "ai_render_object_hints_all",
		arguments: [],
		returns: "boolean",
		id: "ai_render_object_hints_all"
	},
	{
		symbol: "ai_render_object_properties",
		name: "ai_render_object_properties",
		arguments: [],
		returns: "boolean",
		id: "ai_render_object_properties"
	},
	{
		symbol: "ai_render_hints_movement",
		name: "ai_render_hints_movement",
		arguments: [],
		returns: "boolean",
		id: "ai_render_hints_movement"
	},
	{
		symbol: "ai_orders_print_entries",
		name: "ai_orders_print_entries",
		arguments: [],
		returns: "boolean",
		id: "ai_orders_print_entries"
	},
	{
		symbol: "ai_orders_print_entries_verbose",
		name: "ai_orders_print_entries_verbose",
		arguments: [],
		returns: "boolean",
		id: "ai_orders_print_entries_verbose"
	},
	{
		symbol: "ai_render_orders",
		name: "ai_render_orders",
		arguments: [],
		returns: "boolean",
		id: "ai_render_orders"
	},
	{
		symbol: "ai_render_suppress_combat",
		name: "ai_render_suppress_combat",
		arguments: [],
		returns: "boolean",
		id: "ai_render_suppress_combat"
	},
	{
		symbol: "ai_render_behavior_stack",
		name: "ai_render_behavior_stack",
		arguments: [],
		returns: "boolean",
		id: "ai_render_behavior_stack"
	},
	{
		symbol: "ai_render_behavior_stack_all",
		name: "ai_render_behavior_stack_all",
		arguments: [],
		returns: "boolean",
		id: "ai_render_behavior_stack_all"
	},
	{
		symbol: "ai_render_combat_status",
		name: "ai_render_combat_status",
		arguments: [],
		returns: "boolean",
		id: "ai_render_combat_status"
	},
	{
		symbol: "ai_render_decisions",
		name: "ai_render_decisions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_decisions"
	},
	{
		symbol: "ai_render_command_scripts",
		name: "ai_render_command_scripts",
		arguments: [],
		returns: "boolean",
		id: "ai_render_command_scripts"
	},
	{
		symbol: "ai_render_scenes",
		name: "ai_render_scenes",
		arguments: [],
		returns: "boolean",
		id: "ai_render_scenes"
	},
	{
		symbol: "ai_render_scene_failures",
		name: "ai_render_scene_failures",
		arguments: [],
		returns: "boolean",
		id: "ai_render_scene_failures"
	},
	{
		symbol: "ai_hide_actor_errors",
		name: "ai_hide_actor_errors",
		arguments: [],
		returns: "boolean",
		id: "ai_hide_actor_errors"
	},
	{
		symbol: "ai_debug_tracking_data",
		name: "ai_debug_tracking_data",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_tracking_data"
	},
	{
		symbol: "ai_debug_perception_data",
		name: "ai_debug_perception_data",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_perception_data"
	},
	{
		symbol: "ai_debug_combat_status",
		name: "ai_debug_combat_status",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_combat_status"
	},
	{
		symbol: "ai_render_tracked_props",
		name: "ai_render_tracked_props",
		arguments: [],
		returns: "boolean",
		id: "ai_render_tracked_props"
	},
	{
		symbol: "ai_render_joint_behaviors",
		name: "ai_render_joint_behaviors",
		arguments: [],
		returns: "boolean",
		id: "ai_render_joint_behaviors"
	},
	{
		symbol: "ai_render_swarm",
		name: "ai_render_swarm",
		arguments: [],
		returns: "boolean",
		id: "ai_render_swarm"
	},
	{
		symbol: "ai_render_flocks",
		name: "ai_render_flocks",
		arguments: [],
		returns: "boolean",
		id: "ai_render_flocks"
	},
	{
		symbol: "ai_render_vehicle_interest",
		name: "ai_render_vehicle_interest",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vehicle_interest"
	},
	{
		symbol: "ai_debug_prop_refresh",
		name: "ai_debug_prop_refresh",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_prop_refresh"
	},
	{
		symbol: "ai_debug_all_disposable",
		name: "ai_debug_all_disposable",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_all_disposable"
	},
	{
		symbol: "ai_current_squad",
		name: "ai_current_squad",
		arguments: [],
		returns: "ai",
		id: "ai_current_squad"
	},
	{
		symbol: "ai_current_actor",
		name: "ai_current_actor",
		arguments: [],
		returns: "ai",
		id: "ai_current_actor"
	},
	{
		symbol: "ai_render_vehicle_turns",
		name: "ai_render_vehicle_turns",
		arguments: [],
		returns: "boolean",
		id: "ai_render_vehicle_turns"
	},
	{
		symbol: "ai_render_discarded_firing_positions",
		name: "ai_render_discarded_firing_positions",
		arguments: [],
		returns: "boolean",
		id: "ai_render_discarded_firing_positions"
	},
	{
		symbol: "ai_render_firing_positions_all",
		name: "ai_render_firing_positions_all",
		arguments: [],
		returns: "boolean",
		id: "ai_render_firing_positions_all"
	},
	{
		symbol: "ai_render_firing_position_info",
		name: "ai_render_firing_position_info",
		arguments: [],
		returns: "boolean",
		id: "ai_render_firing_position_info"
	},
	{
		symbol: "ai_inspect_avoidance_failure",
		name: "ai_inspect_avoidance_failure",
		arguments: [],
		returns: "boolean",
		id: "ai_inspect_avoidance_failure"
	},
	{
		symbol: "ai_render_action_selection_failure",
		name: "ai_render_action_selection_failure",
		arguments: [],
		returns: "boolean",
		id: "ai_render_action_selection_failure"
	},
	{
		symbol: "ai_combat_status_asleep",
		name: "ai_combat_status_asleep",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_asleep"
	},
	{
		symbol: "ai_combat_status_idle",
		name: "ai_combat_status_idle",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_idle"
	},
	{
		symbol: "ai_combat_status_alert",
		name: "ai_combat_status_alert",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_alert"
	},
	{
		symbol: "ai_combat_status_active",
		name: "ai_combat_status_active",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_active"
	},
	{
		symbol: "ai_combat_status_uninspected",
		name: "ai_combat_status_uninspected",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_uninspected"
	},
	{
		symbol: "ai_combat_status_definite",
		name: "ai_combat_status_definite",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_definite"
	},
	{
		symbol: "ai_combat_status_certain",
		name: "ai_combat_status_certain",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_certain"
	},
	{
		symbol: "ai_combat_status_visible",
		name: "ai_combat_status_visible",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_visible"
	},
	{
		symbol: "ai_combat_status_clear_los",
		name: "ai_combat_status_clear_los",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_clear_los"
	},
	{
		symbol: "ai_combat_status_dangerous",
		name: "ai_combat_status_dangerous",
		arguments: [],
		returns: "short",
		id: "ai_combat_status_dangerous"
	},
	{
		symbol: "ai_movement_patrol",
		name: "ai_movement_patrol",
		arguments: [],
		returns: "short",
		id: "ai_movement_patrol"
	},
	{
		symbol: "ai_movement_asleep",
		name: "ai_movement_asleep",
		arguments: [],
		returns: "short",
		id: "ai_movement_asleep"
	},
	{
		symbol: "ai_movement_combat",
		name: "ai_movement_combat",
		arguments: [],
		returns: "short",
		id: "ai_movement_combat"
	},
	{
		symbol: "ai_movement_flee",
		name: "ai_movement_flee",
		arguments: [],
		returns: "short",
		id: "ai_movement_flee"
	},
	{
		symbol: "ai_movement_flaming",
		name: "ai_movement_flaming",
		arguments: [],
		returns: "short",
		id: "ai_movement_flaming"
	},
	{
		symbol: "ai_movement_stunned",
		name: "ai_movement_stunned",
		arguments: [],
		returns: "short",
		id: "ai_movement_stunned"
	},
	{
		symbol: "ai_movement_berserk",
		name: "ai_movement_berserk",
		arguments: [],
		returns: "short",
		id: "ai_movement_berserk"
	},
	{
		symbol: "ai_print_pursuit_checks",
		name: "ai_print_pursuit_checks",
		arguments: [],
		returns: "boolean",
		id: "ai_print_pursuit_checks"
	},
	{
		symbol: "ai_print_rules",
		name: "ai_print_rules",
		arguments: [],
		returns: "boolean",
		id: "ai_print_rules"
	},
	{
		symbol: "ai_print_rule_values",
		name: "ai_print_rule_values",
		arguments: [],
		returns: "boolean",
		id: "ai_print_rule_values"
	},
	{
		symbol: "ai_print_major_upgrade",
		name: "ai_print_major_upgrade",
		arguments: [],
		returns: "boolean",
		id: "ai_print_major_upgrade"
	},
	{
		symbol: "ai_print_respawn",
		name: "ai_print_respawn",
		arguments: [],
		returns: "boolean",
		id: "ai_print_respawn"
	},
	{
		symbol: "ai_print_evaluation_statistics",
		name: "ai_print_evaluation_statistics",
		arguments: [],
		returns: "boolean",
		id: "ai_print_evaluation_statistics"
	},
	{
		symbol: "ai_print_communication",
		name: "ai_print_communication",
		arguments: [],
		returns: "boolean",
		id: "ai_print_communication"
	},
	{
		symbol: "ai_print_communication_player",
		name: "ai_print_communication_player",
		arguments: [],
		returns: "boolean",
		id: "ai_print_communication_player"
	},
	{
		symbol: "ai_print_vocalizations",
		name: "ai_print_vocalizations",
		arguments: [],
		returns: "boolean",
		id: "ai_print_vocalizations"
	},
	{
		symbol: "ai_print_placement",
		name: "ai_print_placement",
		arguments: [],
		returns: "boolean",
		id: "ai_print_placement"
	},
	{
		symbol: "ai_print_speech",
		name: "ai_print_speech",
		arguments: [],
		returns: "boolean",
		id: "ai_print_speech"
	},
	{
		symbol: "ai_print_speech_timers",
		name: "ai_print_speech_timers",
		arguments: [],
		returns: "boolean",
		id: "ai_print_speech_timers"
	},
	{
		symbol: "ai_print_allegiance",
		name: "ai_print_allegiance",
		arguments: [],
		returns: "boolean",
		id: "ai_print_allegiance"
	},
	{
		symbol: "ai_print_lost_speech",
		name: "ai_print_lost_speech",
		arguments: [],
		returns: "boolean",
		id: "ai_print_lost_speech"
	},
	{
		symbol: "ai_print_migration",
		name: "ai_print_migration",
		arguments: [],
		returns: "boolean",
		id: "ai_print_migration"
	},
	{
		symbol: "ai_print_automatic_migration",
		name: "ai_print_automatic_migration",
		arguments: [],
		returns: "boolean",
		id: "ai_print_automatic_migration"
	},
	{
		symbol: "ai_print_scripting",
		name: "ai_print_scripting",
		arguments: [],
		returns: "boolean",
		id: "ai_print_scripting"
	},
	{
		symbol: "ai_print_disposal",
		name: "ai_print_disposal",
		arguments: [],
		returns: "boolean",
		id: "ai_print_disposal"
	},
	{
		symbol: "ai_print_surprise",
		name: "ai_print_surprise",
		arguments: [],
		returns: "boolean",
		id: "ai_print_surprise"
	},
	{
		symbol: "ai_print_command_lists",
		name: "ai_print_command_lists",
		arguments: [],
		returns: "boolean",
		id: "ai_print_command_lists"
	},
	{
		symbol: "ai_print_damage_modifiers",
		name: "ai_print_damage_modifiers",
		arguments: [],
		returns: "boolean",
		id: "ai_print_damage_modifiers"
	},
	{
		symbol: "ai_print_secondary_looking",
		name: "ai_print_secondary_looking",
		arguments: [],
		returns: "boolean",
		id: "ai_print_secondary_looking"
	},
	{
		symbol: "ai_print_oversteer",
		name: "ai_print_oversteer",
		arguments: [],
		returns: "boolean",
		id: "ai_print_oversteer"
	},
	{
		symbol: "ai_print_conversations",
		name: "ai_print_conversations",
		arguments: [],
		returns: "boolean",
		id: "ai_print_conversations"
	},
	{
		symbol: "ai_print_killing_sprees",
		name: "ai_print_killing_sprees",
		arguments: [],
		returns: "boolean",
		id: "ai_print_killing_sprees"
	},
	{
		symbol: "ai_print_acknowledgement",
		name: "ai_print_acknowledgement",
		arguments: [],
		returns: "boolean",
		id: "ai_print_acknowledgement"
	},
	{
		symbol: "ai_print_unfinished_paths",
		name: "ai_print_unfinished_paths",
		arguments: [],
		returns: "boolean",
		id: "ai_print_unfinished_paths"
	},
	{
		symbol: "ai_print_bsp_transition",
		name: "ai_print_bsp_transition",
		arguments: [],
		returns: "boolean",
		id: "ai_print_bsp_transition"
	},
	{
		symbol: "ai_print_uncovering",
		name: "ai_print_uncovering",
		arguments: [],
		returns: "boolean",
		id: "ai_print_uncovering"
	},
	{
		symbol: "ai_naimad_spew",
		name: "ai_naimad_spew",
		arguments: [],
		returns: "boolean",
		id: "ai_naimad_spew"
	},
	{
		symbol: "ai_debug_fast_los",
		name: "ai_debug_fast_los",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_fast_los"
	},
	{
		symbol: "ai_debug_oversteer_disable",
		name: "ai_debug_oversteer_disable",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_oversteer_disable"
	},
	{
		symbol: "ai_debug_evaluate_all_positions",
		name: "ai_debug_evaluate_all_positions",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_evaluate_all_positions"
	},
	{
		symbol: "ai_debug_path",
		name: "ai_debug_path",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path"
	},
	{
		symbol: "ai_debug_path_start_freeze",
		name: "ai_debug_path_start_freeze",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_start_freeze"
	},
	{
		symbol: "ai_debug_path_end_freeze",
		name: "ai_debug_path_end_freeze",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_end_freeze"
	},
	{
		symbol: "ai_debug_path_flood",
		name: "ai_debug_path_flood",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_flood"
	},
	{
		symbol: "ai_debug_path_maximum_radius",
		name: "ai_debug_path_maximum_radius",
		arguments: [],
		returns: "real",
		id: "ai_debug_path_maximum_radius"
	},
	{
		symbol: "ai_debug_path_attractor",
		name: "ai_debug_path_attractor",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_attractor"
	},
	{
		symbol: "ai_debug_path_attractor_radius",
		name: "ai_debug_path_attractor_radius",
		arguments: [],
		returns: "real",
		id: "ai_debug_path_attractor_radius"
	},
	{
		symbol: "ai_debug_path_attractor_weight",
		name: "ai_debug_path_attractor_weight",
		arguments: [],
		returns: "real",
		id: "ai_debug_path_attractor_weight"
	},
	{
		symbol: "ai_debug_path_accept_radius",
		name: "ai_debug_path_accept_radius",
		arguments: [],
		returns: "real",
		id: "ai_debug_path_accept_radius"
	},
	{
		symbol: "ai_debug_path_destructible",
		name: "ai_debug_path_destructible",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_destructible"
	},
	{
		symbol: "ai_debug_ballistic_lineoffire_freeze",
		name: "ai_debug_ballistic_lineoffire_freeze",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_ballistic_lineoffire_freeze"
	},
	{
		symbol: "ai_debug_blind",
		name: "ai_debug_blind",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_blind"
	},
	{
		symbol: "ai_debug_deaf",
		name: "ai_debug_deaf",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_deaf"
	},
	{
		symbol: "ai_debug_invisible_player",
		name: "ai_debug_invisible_player",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_invisible_player"
	},
	{
		symbol: "ai_debug_ignore_player",
		name: "ai_debug_ignore_player",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_ignore_player"
	},
	{
		symbol: "ai_debug_flee_always",
		name: "ai_debug_flee_always",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_flee_always"
	},
	{
		symbol: "ai_debug_force_all_active",
		name: "ai_debug_force_all_active",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_force_all_active"
	},
	{
		symbol: "ai_debug_disable_wounded_sounds",
		name: "ai_debug_disable_wounded_sounds",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_disable_wounded_sounds"
	},
	{
		symbol: "ai_debug_force_vocalizations",
		name: "ai_debug_force_vocalizations",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_force_vocalizations"
	},
	{
		symbol: "ai_debug_force_crouch",
		name: "ai_debug_force_crouch",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_force_crouch"
	},
	{
		symbol: "ai_debug_path_disable_smoothing",
		name: "ai_debug_path_disable_smoothing",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_disable_smoothing"
	},
	{
		symbol: "ai_debug_path_disable_obstacle_avoidance",
		name: "ai_debug_path_disable_obstacle_avoidance",
		arguments: [],
		returns: "boolean",
		id: "ai_debug_path_disable_obstacle_avoidance"
	},
	{
		symbol: "ai_fix_defending_guard_firing_positions",
		name: "ai_fix_defending_guard_firing_positions",
		arguments: [],
		returns: "boolean",
		id: "ai_fix_defending_guard_firing_positions"
	},
	{
		symbol: "ai_fix_actor_variants",
		name: "ai_fix_actor_variants",
		arguments: [],
		returns: "boolean",
		id: "ai_fix_actor_variants"
	},
	{
		symbol: "net_halt_on_critical_events",
		name: "net_halt_on_critical_events",
		arguments: [],
		returns: "boolean",
		id: "net_halt_on_critical_events"
	},
	{
		symbol: "net_bitstream_debug",
		name: "net_bitstream_debug",
		arguments: [],
		returns: "long",
		id: "net_bitstream_debug"
	},
	{
		symbol: "net_bitstream_display_errors",
		name: "net_bitstream_display_errors",
		arguments: [],
		returns: "boolean",
		id: "net_bitstream_display_errors"
	},
	{
		symbol: "net_bitstream_capture_structure",
		name: "net_bitstream_capture_structure",
		arguments: [],
		returns: "boolean",
		id: "net_bitstream_capture_structure"
	},
	{
		symbol: "net_never_timeout",
		name: "net_never_timeout",
		arguments: [],
		returns: "boolean",
		id: "net_never_timeout"
	},
	{
		symbol: "net_use_local_time",
		name: "net_use_local_time",
		arguments: [],
		returns: "boolean",
		id: "net_use_local_time"
	},
	{
		symbol: "net_traffic_warnings",
		name: "net_traffic_warnings",
		arguments: [],
		returns: "boolean",
		id: "net_traffic_warnings"
	},
	{
		symbol: "net_traffic_print",
		name: "net_traffic_print",
		arguments: [],
		returns: "boolean",
		id: "net_traffic_print"
	},
	{
		symbol: "net_messages_print",
		name: "net_messages_print",
		arguments: [],
		returns: "boolean",
		id: "net_messages_print"
	},
	{
		symbol: "net_replication_requests_print",
		name: "net_replication_requests_print",
		arguments: [],
		returns: "boolean",
		id: "net_replication_requests_print"
	},
	{
		symbol: "net_packet_print_mask",
		name: "net_packet_print_mask",
		arguments: [],
		returns: "boolean",
		id: "net_packet_print_mask"
	},
	{
		symbol: "net_experimental",
		name: "net_experimental",
		arguments: [],
		returns: "boolean",
		id: "net_experimental"
	},
	{
		symbol: "net_rate_unlimited",
		name: "net_rate_unlimited",
		arguments: [],
		returns: "boolean",
		id: "net_rate_unlimited"
	},
	{
		symbol: "net_rate_server",
		name: "net_rate_server",
		arguments: [],
		returns: "long",
		id: "net_rate_server"
	},
	{
		symbol: "net_rate_client",
		name: "net_rate_client",
		arguments: [],
		returns: "long",
		id: "net_rate_client"
	},
	{
		symbol: "net_window_unlimited",
		name: "net_window_unlimited",
		arguments: [],
		returns: "boolean",
		id: "net_window_unlimited"
	},
	{
		symbol: "net_window_size",
		name: "net_window_size",
		arguments: [],
		returns: "long",
		id: "net_window_size"
	},
	{
		symbol: "net_bandwidth_unlimited",
		name: "net_bandwidth_unlimited",
		arguments: [],
		returns: "boolean",
		id: "net_bandwidth_unlimited"
	},
	{
		symbol: "net_bandwidth_per_channel",
		name: "net_bandwidth_per_channel",
		arguments: [],
		returns: "long",
		id: "net_bandwidth_per_channel"
	},
	{
		symbol: "net_skip_countdown",
		name: "net_skip_countdown",
		arguments: [],
		returns: "boolean",
		id: "net_skip_countdown"
	},
	{
		symbol: "net_host_delegation_disable",
		name: "net_host_delegation_disable",
		arguments: [],
		returns: "boolean",
		id: "net_host_delegation_disable"
	},
	{
		symbol: "net_streams_disable",
		name: "net_streams_disable",
		arguments: [],
		returns: "boolean",
		id: "net_streams_disable"
	},
	{
		symbol: "net_disable_flooding",
		name: "net_disable_flooding",
		arguments: [],
		returns: "boolean",
		id: "net_disable_flooding"
	},
	{
		symbol: "net_ignore_version",
		name: "net_ignore_version",
		arguments: [],
		returns: "boolean",
		id: "net_ignore_version"
	},
	{
		symbol: "net_ignore_join_checking",
		name: "net_ignore_join_checking",
		arguments: [],
		returns: "boolean",
		id: "net_ignore_join_checking"
	},
	{
		symbol: "net_ignore_migration_checking",
		name: "net_ignore_migration_checking",
		arguments: [],
		returns: "boolean",
		id: "net_ignore_migration_checking"
	},
	{
		symbol: "net_maximum_machine_count",
		name: "net_maximum_machine_count",
		arguments: [],
		returns: "long",
		id: "net_maximum_machine_count"
	},
	{
		symbol: "net_maximum_player_count",
		name: "net_maximum_player_count",
		arguments: [],
		returns: "long",
		id: "net_maximum_player_count"
	},
	{
		symbol: "net_debug_random_seeds",
		name: "net_debug_random_seeds",
		arguments: [],
		returns: "boolean",
		id: "net_debug_random_seeds"
	},
	{
		symbol: "net_debug_object_logs",
		name: "net_debug_object_logs",
		arguments: [],
		returns: "boolean",
		id: "net_debug_object_logs"
	},
	{
		symbol: "net_allow_out_of_sync",
		name: "net_allow_out_of_sync",
		arguments: [],
		returns: "boolean",
		id: "net_allow_out_of_sync"
	},
	{
		symbol: "net_distributed_always",
		name: "net_distributed_always",
		arguments: [],
		returns: "boolean",
		id: "net_distributed_always"
	},
	{
		symbol: "net_distributed_never",
		name: "net_distributed_never",
		arguments: [],
		returns: "boolean",
		id: "net_distributed_never"
	},
	{
		symbol: "net_matchmaking_no_gather",
		name: "net_matchmaking_no_gather",
		arguments: [],
		returns: "boolean",
		id: "net_matchmaking_no_gather"
	},
	{
		symbol: "net_matchmaking_no_search",
		name: "net_matchmaking_no_search",
		arguments: [],
		returns: "boolean",
		id: "net_matchmaking_no_search"
	},
	{
		symbol: "net_matchmaking_observer_enabled",
		name: "net_matchmaking_observer_enabled",
		arguments: [],
		returns: "boolean",
		id: "net_matchmaking_observer_enabled"
	},
	{
		symbol: "net_matchmaking_fail_arbitration",
		name: "net_matchmaking_fail_arbitration",
		arguments: [],
		returns: "boolean",
		id: "net_matchmaking_fail_arbitration"
	},
	{
		symbol: "net_matchmaking_4_box_testing_enabled",
		name: "net_matchmaking_4_box_testing_enabled",
		arguments: [],
		returns: "boolean",
		id: "net_matchmaking_4_box_testing_enabled"
	},
	{
		symbol: "net_connectivity_model_enabled",
		name: "net_connectivity_model_enabled",
		arguments: [],
		returns: "boolean",
		id: "net_connectivity_model_enabled"
	},
	{
		symbol: "net_matchmaking_nat_check_enabled",
		name: "net_matchmaking_nat_check_enabled",
		arguments: [],
		returns: "boolean",
		id: "net_matchmaking_nat_check_enabled"
	},
	{
		symbol: "net_prerelease_settings",
		name: "net_prerelease_settings",
		arguments: [],
		returns: "boolean",
		id: "net_prerelease_settings"
	},
	{
		symbol: "net_event",
		name: "net_event",
		arguments: [],
		returns: "boolean",
		id: "net_event"
	},
	{
		symbol: "net_event_display",
		name: "net_event_display",
		arguments: [],
		returns: "network_event",
		id: "net_event_display"
	},
	{
		symbol: "net_event_log",
		name: "net_event_log",
		arguments: [],
		returns: "network_event",
		id: "net_event_log"
	},
	{
		symbol: "net_event_log_remote",
		name: "net_event_log_remote",
		arguments: [],
		returns: "network_event",
		id: "net_event_log_remote"
	},
	{
		symbol: "net_status_memory",
		name: "net_status_memory",
		arguments: [],
		returns: "boolean",
		id: "net_status_memory"
	},
	{
		symbol: "net_status_link",
		name: "net_status_link",
		arguments: [],
		returns: "boolean",
		id: "net_status_link"
	},
	{
		symbol: "net_status_sim",
		name: "net_status_sim",
		arguments: [],
		returns: "boolean",
		id: "net_status_sim"
	},
	{
		symbol: "net_status_channels",
		name: "net_status_channels",
		arguments: [],
		returns: "boolean",
		id: "net_status_channels"
	},
	{
		symbol: "net_status_connections",
		name: "net_status_connections",
		arguments: [],
		returns: "boolean",
		id: "net_status_connections"
	},
	{
		symbol: "net_status_message_queues",
		name: "net_status_message_queues",
		arguments: [],
		returns: "boolean",
		id: "net_status_message_queues"
	},
	{
		symbol: "net_status_observer",
		name: "net_status_observer",
		arguments: [],
		returns: "boolean",
		id: "net_status_observer"
	},
	{
		symbol: "net_status_sessions",
		name: "net_status_sessions",
		arguments: [],
		returns: "boolean",
		id: "net_status_sessions"
	},
	{
		symbol: "net_status_leaderboard",
		name: "net_status_leaderboard",
		arguments: [],
		returns: "boolean",
		id: "net_status_leaderboard"
	},
	{
		symbol: "net_status_leaderboard_mask",
		name: "net_status_leaderboard_mask",
		arguments: [],
		returns: "long",
		id: "net_status_leaderboard_mask"
	},
	{
		symbol: "net_sim",
		name: "net_sim",
		arguments: [],
		returns: "boolean",
		id: "net_sim"
	},
	{
		symbol: "net_sim_latency",
		name: "net_sim_latency",
		arguments: [],
		returns: "long",
		id: "net_sim_latency"
	},
	{
		symbol: "net_sim_latency_wander",
		name: "net_sim_latency_wander",
		arguments: [],
		returns: "long",
		id: "net_sim_latency_wander"
	},
	{
		symbol: "net_sim_latency_period",
		name: "net_sim_latency_period",
		arguments: [],
		returns: "long",
		id: "net_sim_latency_period"
	},
	{
		symbol: "net_sim_latency_random",
		name: "net_sim_latency_random",
		arguments: [],
		returns: "long",
		id: "net_sim_latency_random"
	},
	{
		symbol: "net_sim_spike_chance",
		name: "net_sim_spike_chance",
		arguments: [],
		returns: "long",
		id: "net_sim_spike_chance"
	},
	{
		symbol: "net_sim_spike_amount",
		name: "net_sim_spike_amount",
		arguments: [],
		returns: "long",
		id: "net_sim_spike_amount"
	},
	{
		symbol: "net_sim_spike_duration",
		name: "net_sim_spike_duration",
		arguments: [],
		returns: "long",
		id: "net_sim_spike_duration"
	},
	{
		symbol: "net_sim_drop",
		name: "net_sim_drop",
		arguments: [],
		returns: "long",
		id: "net_sim_drop"
	},
	{
		symbol: "net_sim_dropspike_chance",
		name: "net_sim_dropspike_chance",
		arguments: [],
		returns: "long",
		id: "net_sim_dropspike_chance"
	},
	{
		symbol: "net_sim_dropspike_amount",
		name: "net_sim_dropspike_amount",
		arguments: [],
		returns: "long",
		id: "net_sim_dropspike_amount"
	},
	{
		symbol: "net_sim_dropspike_duration",
		name: "net_sim_dropspike_duration",
		arguments: [],
		returns: "long",
		id: "net_sim_dropspike_duration"
	},
	{
		symbol: "net_sim_bandwidth_down_rate",
		name: "net_sim_bandwidth_down_rate",
		arguments: [],
		returns: "long",
		id: "net_sim_bandwidth_down_rate"
	},
	{
		symbol: "net_sim_bandwidth_up_rate",
		name: "net_sim_bandwidth_up_rate",
		arguments: [],
		returns: "long",
		id: "net_sim_bandwidth_up_rate"
	},
	{
		symbol: "net_sim_bandwidth_down_buffer",
		name: "net_sim_bandwidth_down_buffer",
		arguments: [],
		returns: "long",
		id: "net_sim_bandwidth_down_buffer"
	},
	{
		symbol: "net_sim_bandwidth_up_buffer",
		name: "net_sim_bandwidth_up_buffer",
		arguments: [],
		returns: "long",
		id: "net_sim_bandwidth_up_buffer"
	},
	{
		symbol: "net_test",
		name: "net_test",
		arguments: [],
		returns: "boolean",
		id: "net_test"
	},
	{
		symbol: "net_test_rate",
		name: "net_test_rate",
		arguments: [],
		returns: "long",
		id: "net_test_rate"
	},
	{
		symbol: "net_test_update_server",
		name: "net_test_update_server",
		arguments: [],
		returns: "boolean",
		id: "net_test_update_server"
	},
	{
		symbol: "net_test_update_client",
		name: "net_test_update_client",
		arguments: [],
		returns: "boolean",
		id: "net_test_update_client"
	},
	{
		symbol: "net_test_replication_scheduler",
		name: "net_test_replication_scheduler",
		arguments: [],
		returns: "boolean",
		id: "net_test_replication_scheduler"
	},
	{
		symbol: "net_test_debug_spheres",
		name: "net_test_debug_spheres",
		arguments: [],
		returns: "boolean",
		id: "net_test_debug_spheres"
	},
	{
		symbol: "net_test_matchmaking_playlist_index",
		name: "net_test_matchmaking_playlist_index",
		arguments: [],
		returns: "long",
		id: "net_test_matchmaking_playlist_index"
	},
	{
		symbol: "net_voice_diagnostics",
		name: "net_voice_diagnostics",
		arguments: [],
		returns: "boolean",
		id: "net_voice_diagnostics"
	},
	{
		symbol: "sim_status_world",
		name: "sim_status_world",
		arguments: [],
		returns: "boolean",
		id: "sim_status_world"
	},
	{
		symbol: "sim_status_views",
		name: "sim_status_views",
		arguments: [],
		returns: "boolean",
		id: "sim_status_views"
	},
	{
		symbol: "sim_entity_validate",
		name: "sim_entity_validate",
		arguments: [],
		returns: "boolean",
		id: "sim_entity_validate"
	},
	{
		symbol: "sim_disable_aim_assist",
		name: "sim_disable_aim_assist",
		arguments: [],
		returns: "boolean",
		id: "sim_disable_aim_assist"
	},
	{
		symbol: "sim_bandwidth_eater",
		name: "sim_bandwidth_eater",
		arguments: [],
		returns: "long",
		id: "sim_bandwidth_eater"
	},
	{
		symbol: "debug_player_teleport",
		name: "debug_player_teleport",
		arguments: [],
		returns: "boolean",
		id: "debug_player_teleport"
	},
	{
		symbol: "debug_players",
		name: "debug_players",
		arguments: [],
		returns: "boolean",
		id: "debug_players"
	},
	{
		symbol: "display_vibration_status_lines",
		name: "display_vibration_status_lines",
		arguments: [],
		returns: "boolean",
		id: "display_vibration_status_lines"
	},
	{
		symbol: "debug_resource_predition",
		name: "debug_resource_predition",
		arguments: [],
		returns: "boolean",
		id: "debug_resource_predition"
	},
	{
		symbol: "generate_prediction_scripts",
		name: "generate_prediction_scripts",
		arguments: [],
		returns: "boolean",
		id: "generate_prediction_scripts"
	},
	{
		symbol: "geometry_cache_graph",
		name: "geometry_cache_graph",
		arguments: [],
		returns: "boolean",
		id: "geometry_cache_graph"
	},
	{
		symbol: "geometry_cache_list",
		name: "geometry_cache_list",
		arguments: [],
		returns: "boolean",
		id: "geometry_cache_list"
	},
	{
		symbol: "geometry_cache_status",
		name: "geometry_cache_status",
		arguments: [],
		returns: "boolean",
		id: "geometry_cache_status"
	},
	{
		symbol: "geometry_cache_block_warning",
		name: "geometry_cache_block_warning",
		arguments: [],
		returns: "boolean",
		id: "geometry_cache_block_warning"
	},
	{
		symbol: "geometry_cache_never_block",
		name: "geometry_cache_never_block",
		arguments: [],
		returns: "boolean",
		id: "geometry_cache_never_block"
	},
	{
		symbol: "geometry_cache_debug_display",
		name: "geometry_cache_debug_display",
		arguments: [],
		returns: "boolean",
		id: "geometry_cache_debug_display"
	},
	{
		symbol: "director_camera_switch_fast",
		name: "director_camera_switch_fast",
		arguments: [],
		returns: "boolean",
		id: "director_camera_switch_fast"
	},
	{
		symbol: "debug_recording",
		name: "debug_recording",
		arguments: [],
		returns: "boolean",
		id: "debug_recording"
	},
	{
		symbol: "debug_recording_newlines",
		name: "debug_recording_newlines",
		arguments: [],
		returns: "short",
		id: "debug_recording_newlines"
	},
	{
		symbol: "cinematic_letterbox_style",
		name: "cinematic_letterbox_style",
		arguments: [],
		returns: "long",
		id: "cinematic_letterbox_style"
	},
	{
		symbol: "run_game_scripts",
		name: "run_game_scripts",
		arguments: [],
		returns: "boolean",
		id: "run_game_scripts"
	},
	{
		symbol: "vehicle_status_display",
		name: "vehicle_status_display",
		arguments: [],
		returns: "boolean",
		id: "vehicle_status_display"
	},
	{
		symbol: "biped_meter_display",
		name: "biped_meter_display",
		arguments: [],
		returns: "boolean",
		id: "biped_meter_display"
	},
	{
		symbol: "debug_menu_enabled",
		name: "debug_menu_enabled",
		arguments: [],
		returns: "boolean",
		id: "debug_menu_enabled"
	},
	{
		symbol: "catch_exceptions",
		name: "catch_exceptions",
		arguments: [],
		returns: "boolean",
		id: "catch_exceptions"
	},
	{
		symbol: "debug_first_person_hide_base",
		name: "debug_first_person_hide_base",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_hide_base"
	},
	{
		symbol: "debug_first_person_hide_movement",
		name: "debug_first_person_hide_movement",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_hide_movement"
	},
	{
		symbol: "debug_first_person_hide_jitter",
		name: "debug_first_person_hide_jitter",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_hide_jitter"
	},
	{
		symbol: "debug_first_person_hide_overlay",
		name: "debug_first_person_hide_overlay",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_hide_overlay"
	},
	{
		symbol: "debug_first_person_hide_pitch_turn",
		name: "debug_first_person_hide_pitch_turn",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_hide_pitch_turn"
	},
	{
		symbol: "debug_first_person_hide_ammo",
		name: "debug_first_person_hide_ammo",
		arguments: [],
		returns: "boolean",
		id: "debug_first_person_hide_ammo"
	},
	{
		symbol: "global_playtest_mode",
		name: "global_playtest_mode",
		arguments: [],
		returns: "boolean",
		id: "global_playtest_mode"
	},
	{
		symbol: "render_comment_flags",
		name: "render_comment_flags",
		arguments: [],
		returns: "boolean",
		id: "render_comment_flags"
	},
	{
		symbol: "render_comment_flags_text",
		name: "render_comment_flags_text",
		arguments: [],
		returns: "boolean",
		id: "render_comment_flags_text"
	},
	{
		symbol: "render_comment_flags_look_at",
		name: "render_comment_flags_look_at",
		arguments: [],
		returns: "boolean",
		id: "render_comment_flags_look_at"
	},
	{
		symbol: "enable_controller_flag_drop",
		name: "enable_controller_flag_drop",
		arguments: [],
		returns: "boolean",
		id: "enable_controller_flag_drop"
	},
	{
		symbol: "override_player character type",
		name: "override_player character type",
		arguments: [],
		returns: "long",
		id: "override_player character type"
	},
	{
		symbol: "e3",
		name: "e3",
		arguments: [],
		returns: "boolean",
		id: "e3"
	},
	{
		symbol: "banshee_maximum_trick_frequency",
		name: "banshee_maximum_trick_frequency",
		arguments: [],
		returns: "real",
		id: "banshee_maximum_trick_frequency"
	},
	{
		symbol: "banshee_loop_trick_duration",
		name: "banshee_loop_trick_duration",
		arguments: [],
		returns: "real",
		id: "banshee_loop_trick_duration"
	},
	{
		symbol: "banshee_roll_trick_duration",
		name: "banshee_roll_trick_duration",
		arguments: [],
		returns: "real",
		id: "banshee_roll_trick_duration"
	},
	{
		symbol: "banshee_zero_gravity_speed",
		name: "banshee_zero_gravity_speed",
		arguments: [],
		returns: "real",
		id: "banshee_zero_gravity_speed"
	},
	{
		symbol: "banshee_full_gravity_speed",
		name: "banshee_full_gravity_speed",
		arguments: [],
		returns: "real",
		id: "banshee_full_gravity_speed"
	},
	{
		symbol: "banshee_strafe_boost_scale_factor",
		name: "banshee_strafe_boost_scale_factor",
		arguments: [],
		returns: "real",
		id: "banshee_strafe_boost_scale_factor"
	},
	{
		symbol: "banshee_finger_off_stick_deceleration_factor",
		name: "banshee_finger_off_stick_deceleration_factor",
		arguments: [],
		returns: "real",
		id: "banshee_finger_off_stick_deceleration_factor"
	},
	{
		symbol: "banshee_cruising_throttle",
		name: "banshee_cruising_throttle",
		arguments: [],
		returns: "real",
		id: "banshee_cruising_throttle"
	},
	{
		symbol: "debug_tag_dependencies",
		name: "debug_tag_dependencies",
		arguments: [],
		returns: "boolean",
		id: "debug_tag_dependencies"
	},
	{
		symbol: "disable_network_hopper_download",
		name: "disable_network_hopper_download",
		arguments: [],
		returns: "boolean",
		id: "disable_network_hopper_download"
	},
	{
		symbol: "disable_network_configuration_download",
		name: "disable_network_configuration_download",
		arguments: [],
		returns: "boolean",
		id: "disable_network_configuration_download"
	},
	{
		symbol: "disable_message_of_the_day_download",
		name: "disable_message_of_the_day_download",
		arguments: [],
		returns: "boolean",
		id: "disable_message_of_the_day_download"
	},
	{
		symbol: "check_system_heap",
		name: "check_system_heap",
		arguments: [],
		returns: "boolean",
		id: "check_system_heap"
	},
	{
		symbol: "always_dirty_structure_objects",
		name: "always_dirty_structure_objects",
		arguments: [],
		returns: "boolean",
		id: "always_dirty_structure_objects"
	},
	{
		symbol: "ui_time_scale",
		name: "ui_time_scale",
		arguments: [],
		returns: "real",
		id: "ui_time_scale"
	},
	{
		symbol: "ui_display_memory",
		name: "ui_display_memory",
		arguments: [],
		returns: "boolean",
		id: "ui_display_memory"
	},
	{
		symbol: "editor_strip_dialogue_sounds",
		name: "editor_strip_dialogue_sounds",
		arguments: [],
		returns: "boolean",
		id: "editor_strip_dialogue_sounds"
	},
	{
		symbol: "data_mine_player_update_interval",
		name: "data_mine_player_update_interval",
		arguments: [],
		returns: "long",
		id: "data_mine_player_update_interval"
	},
	{
		symbol: "data_mine_debug_menu_interval",
		name: "data_mine_debug_menu_interval",
		arguments: [],
		returns: "long",
		id: "data_mine_debug_menu_interval"
	},
	{
		symbol: "force_player_walking",
		name: "force_player_walking",
		arguments: [],
		returns: "boolean",
		id: "force_player_walking"
	},
	{
		symbol: "unit_animation_report_missing_animations",
		name: "unit_animation_report_missing_animations",
		arguments: [],
		returns: "boolean",
		id: "unit_animation_report_missing_animations"
	},
	{
		symbol: "data_mine_delete_uploaded_zip_files",
		name: "data_mine_delete_uploaded_zip_files",
		arguments: [],
		returns: "boolean",
		id: "data_mine_delete_uploaded_zip_files"
	},
	{
		symbol: "font_cache_status",
		name: "font_cache_status",
		arguments: [],
		returns: "boolean",
		id: "font_cache_status"
	},
	{
		symbol: "ui_force_long_save_progress",
		name: "ui_force_long_save_progress",
		arguments: [],
		returns: "boolean",
		id: "ui_force_long_save_progress"
	},
	{
		symbol: "force_multiplayer_maps_unlocked",
		name: "force_multiplayer_maps_unlocked",
		arguments: [],
		returns: "boolean",
		id: "force_multiplayer_maps_unlocked"
	},
	{
		symbol: "force_campaign_maps_unlocked",
		name: "force_campaign_maps_unlocked",
		arguments: [],
		returns: "boolean",
		id: "force_campaign_maps_unlocked"
	},
	{
		symbol: "net_bandwidth_profiler",
		name: "net_bandwidth_profiler",
		arguments: [],
		returns: "boolean",
		id: "net_bandwidth_profiler"
	},
	{
		symbol: "coop_speed_up",
		name: "coop_speed_up",
		arguments: [],
		returns: "real",
		id: "coop_speed_up"
	},
	{
		symbol: "lruv_lirp_enabled",
		name: "lruv_lirp_enabled",
		arguments: [],
		returns: "boolean",
		id: "lruv_lirp_enabled"
	},
	{
		symbol: "allow_sound_cache_file_editing",
		name: "allow_sound_cache_file_editing",
		arguments: [],
		returns: "boolean",
		id: "allow_sound_cache_file_editing"
	},
	{
		symbol: "halt_on_stack_overflow",
		name: "halt_on_stack_overflow",
		arguments: [],
		returns: "boolean",
		id: "halt_on_stack_overflow"
	},
	{
		symbol: "disable_progress_screen",
		name: "disable_progress_screen",
		arguments: [],
		returns: "boolean",
		id: "disable_progress_screen"
	},
	{
		symbol: "force_crash_uploads",
		name: "force_crash_uploads",
		arguments: [],
		returns: "boolean",
		id: "force_crash_uploads"
	},
	{
		symbol: "log_cinematic_times",
		name: "log_cinematic_times",
		arguments: [],
		returns: "boolean",
		id: "log_cinematic_times"
	},
	{
		symbol: "smooth_anim_enabled",
		name: "smooth_anim_enabled",
		arguments: [],
		returns: "boolean",
		id: "smooth_anim_enabled"
	},
	{
		symbol: "debug_sound_transmission",
		name: "debug_sound_transmission",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_transmission"
	},
	{
		symbol: "debug_effect_names",
		name: "debug_effect_names",
		arguments: [],
		returns: "boolean",
		id: "debug_effect_names"
	},
	{
		symbol: "debug_effect_names_distance",
		name: "debug_effect_names_distance",
		arguments: [],
		returns: "real",
		id: "debug_effect_names_distance"
	},
	{
		symbol: "debug_sound_channels_filters",
		name: "debug_sound_channels_filters",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_filters"
	},
	{
		symbol: "debug_sound_channels_type",
		name: "debug_sound_channels_type",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_type"
	},
	{
		symbol: "debug_sound_channels_sound_class",
		name: "debug_sound_channels_sound_class",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_sound_class"
	},
	{
		symbol: "debug_sound_channels_short_names",
		name: "debug_sound_channels_short_names",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_short_names"
	},
	{
		symbol: "debug_sound_channels_tag_id",
		name: "debug_sound_channels_tag_id",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_tag_id"
	},
	{
		symbol: "debug_sound_channels_position",
		name: "debug_sound_channels_position",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_position"
	},
	{
		symbol: "debug_sound_channels_levels",
		name: "debug_sound_channels_levels",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_channels_levels"
	},
	{
		symbol: "debug_sound_stereo_weapon_fire_force_3d",
		name: "debug_sound_stereo_weapon_fire_force_3d",
		arguments: [],
		returns: "boolean",
		id: "debug_sound_stereo_weapon_fire_force_3d"
	},
	{
		symbol: "debug_sound_stereo_weapon_fire_left_scale",
		name: "debug_sound_stereo_weapon_fire_left_scale",
		arguments: [],
		returns: "real",
		id: "debug_sound_stereo_weapon_fire_left_scale"
	},
	{
		symbol: "debug_sound_stereo_weapon_fire_right_scale",
		name: "debug_sound_stereo_weapon_fire_right_scale",
		arguments: [],
		returns: "real",
		id: "debug_sound_stereo_weapon_fire_right_scale"
	},
	{
		symbol: "debug_ice_cream_flavor_status_arbiter_envy",
		name: "debug_ice_cream_flavor_status_arbiter_envy",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_arbiter_envy"
	},
	{
		symbol: "debug_ice_cream_flavor_status_grunt_birthday_party",
		name: "debug_ice_cream_flavor_status_grunt_birthday_party",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_grunt_birthday_party"
	},
	{
		symbol: "debug_ice_cream_flavor_status_assassins",
		name: "debug_ice_cream_flavor_status_assassins",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_assassins"
	},
	{
		symbol: "debug_ice_cream_flavor_status_famine",
		name: "debug_ice_cream_flavor_status_famine",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_famine"
	},
	{
		symbol: "debug_ice_cream_flavor_status_i_would_have_been_your_daddy",
		name: "debug_ice_cream_flavor_status_i_would_have_been_your_daddy",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_i_would_have_been_your_daddy"
	},
	{
		symbol: "debug_ice_cream_flavor_status_blind",
		name: "debug_ice_cream_flavor_status_blind",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_blind"
	},
	{
		symbol: "debug_ice_cream_flavor_status_ghost",
		name: "debug_ice_cream_flavor_status_ghost",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_ghost"
	},
	{
		symbol: "debug_ice_cream_flavor_status_black_eye",
		name: "debug_ice_cream_flavor_status_black_eye",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_black_eye"
	},
	{
		symbol: "debug_ice_cream_flavor_status_catch",
		name: "debug_ice_cream_flavor_status_catch",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_catch"
	},
	{
		symbol: "debug_ice_cream_flavor_status_sputnik",
		name: "debug_ice_cream_flavor_status_sputnik",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_sputnik"
	},
	{
		symbol: "debug_ice_cream_flavor_status_mythic",
		name: "debug_ice_cream_flavor_status_mythic",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_mythic"
	},
	{
		symbol: "debug_ice_cream_flavor_status_anger",
		name: "debug_ice_cream_flavor_status_anger",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_anger"
	},
	{
		symbol: "debug_ice_cream_flavor_status_thunderstorm",
		name: "debug_ice_cream_flavor_status_thunderstorm",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_thunderstorm"
	},
	{
		symbol: "debug_ice_cream_flavor_status_iron",
		name: "debug_ice_cream_flavor_status_iron",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_iron"
	},
	{
		symbol: "debug_ice_cream_flavor_status_thats_just_wrong",
		name: "debug_ice_cream_flavor_status_thats_just_wrong",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_thats_just_wrong"
	},
	{
		symbol: "debug_ice_cream_flavor_status_bandanna",
		name: "debug_ice_cream_flavor_status_bandanna",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_bandanna"
	},
	{
		symbol: "debug_ice_cream_flavor_status_boom",
		name: "debug_ice_cream_flavor_status_boom",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_boom"
	},
	{
		symbol: "debug_ice_cream_flavor_status_eye_patch",
		name: "debug_ice_cream_flavor_status_eye_patch",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_eye_patch"
	},
	{
		symbol: "debug_ice_cream_flavor_status_fog",
		name: "debug_ice_cream_flavor_status_fog",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_fog"
	},
	{
		symbol: "debug_ice_cream_flavor_status_foreign",
		name: "debug_ice_cream_flavor_status_foreign",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_foreign"
	},
	{
		symbol: "debug_ice_cream_flavor_status_grunt_funeral",
		name: "debug_ice_cream_flavor_status_grunt_funeral",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_grunt_funeral"
	},
	{
		symbol: "debug_ice_cream_flavor_status_pinata",
		name: "debug_ice_cream_flavor_status_pinata",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_pinata"
	},
	{
		symbol: "debug_ice_cream_flavor_status_recession",
		name: "debug_ice_cream_flavor_status_recession",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_recession"
	},
	{
		symbol: "debug_ice_cream_flavor_status_malfunction",
		name: "debug_ice_cream_flavor_status_malfunction",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_malfunction"
	},
	{
		symbol: "debug_ice_cream_flavor_status_streaking",
		name: "debug_ice_cream_flavor_status_streaking",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_streaking"
	},
	{
		symbol: "debug_ice_cream_flavor_status_jacked",
		name: "debug_ice_cream_flavor_status_jacked",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_jacked"
	},
	{
		symbol: "debug_ice_cream_flavor_status_scarab",
		name: "debug_ice_cream_flavor_status_scarab",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_scarab"
	},
	{
		symbol: "debug_ice_cream_flavor_status_styx",
		name: "debug_ice_cream_flavor_status_styx",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_styx"
	},
	{
		symbol: "debug_ice_cream_flavor_status_feather",
		name: "debug_ice_cream_flavor_status_feather",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_feather"
	},
	{
		symbol: "debug_ice_cream_flavor_status_bonded_pair",
		name: "debug_ice_cream_flavor_status_bonded_pair",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_bonded_pair"
	},
	{
		symbol: "debug_ice_cream_flavor_status_masterblaster",
		name: "debug_ice_cream_flavor_status_masterblaster",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_masterblaster"
	},
	{
		symbol: "debug_ice_cream_flavor_status_so_angry",
		name: "debug_ice_cream_flavor_status_so_angry",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_so_angry"
	},
	{
		symbol: "debug_ice_cream_flavor_status_prophet_birthday_party",
		name: "debug_ice_cream_flavor_status_prophet_birthday_party",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_prophet_birthday_party"
	},
	{
		symbol: "debug_ice_cream_flavor_status_they_come_back",
		name: "debug_ice_cream_flavor_status_they_come_back",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_status_they_come_back"
	},
	{
		symbol: "debug_ice_cream_flavor_force_coop",
		name: "debug_ice_cream_flavor_force_coop",
		arguments: [],
		returns: "boolean",
		id: "debug_ice_cream_flavor_force_coop"
	},
	{
		symbol: "g_sound_use_remastered",
		name: "g_sound_use_remastered",
		arguments: [],
		returns: "boolean",
		id: "g_sound_use_remastered"
	}
];

export default H2Functions;

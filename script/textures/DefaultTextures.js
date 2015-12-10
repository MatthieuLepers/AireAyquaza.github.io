function DefaultTextures()
{
	//General
	this.texturesLocation = 'images/';
	this.none = new Texture('none.gif', 1, 1);
	
	//Ship
	//new Texture(texturePath, width, height)
	this.ship_idle = new Texture('ship_idle.gif', 32, 15);
	this.ship_up = new Texture('ship_up.gif', 32, 15);
	this.ship_down = new Texture('ship_down.gif', 32, 15);
	this.ship_up_to_idle = new Texture('ship_up-to_idle.gif', 32, 15);
	this.ship_down_to_idle = new Texture('ship_down-to_idle.gif', 32, 15);
	this.ship_explosion = new Texture('ship_explosion.gif', 32, 28);
	this.ship_acceleration = new Texture('acceleration.gif', 32, 32);
	this.ship_shoot_bullet = new Texture('shoot_bullet.gif', 14, 12);
	this.ship_bullet = new Texture('bullet.gif', 16, 4);
	this.ship_charge_beam = new Texture('charge_beam.gif', 32, 32);
	this.ship_shoot_charged = new Texture('shoot_charged.gif', 36, 22);
	this.ship_charged_beam_15 = new Texture('charged_beam_15.gif', 16, 12);
	this.ship_charged_beam_25 = new Texture('charged_beam_25.gif', 32, 12);
	this.ship_charged_beam_50 = new Texture('charged_beam_50.gif', 48, 14);
	this.ship_charged_beam_75 = new Texture('charged_beam_75.gif', 64, 14);
	this.ship_charged_beam_90 = new Texture('charged_beam_90.gif', 80, 16);
	
	//Module
	this.module_tier0 = new Texture('module_t0.gif', 20, 32);
	this.module_tier1_front = new Texture('module_t1_front.gif', 27, 32);
	this.module_tier1_back = new Texture('module_t1_back.gif', 27, 32);
	this.module_tier2 = new Texture('module_t2.gif', 31, 32);
	
	//Bit Module
	this.bit_module_top = new Texture('bit_module_top.gif', 16, 16);
	this.bit_module_bottom = new Texture('bit_module_bottom.gif', 16, 16);
	this.bit_module_shoot_bullet = new Texture('bit_module_charge.gif', 16, 14);
	
	//Upgrades
	this.upgrade_speed = new Texture('upgrade_speed.gif', 24, 20);
	this.upgrade_laser = new Texture('upgrade_laser.gif', 20, 18);
	this.upgrade_dna = new Texture('upgrade_dna.gif', 20, 18);
	this.upgrade_fire = new Texture('upgrade_fire.gif', 20, 18);
	this.upgrade_rockets = new Texture('upgrade_rockets.gif', 21, 18);
	
	//Projectiles
	this.projectile_module = new Texture('module_shot.gif', 16, 4);
	this.projectile_blue_dna_bullet = new Texture('dna_blue.gif', 32, 4);
	this.projectile_red_dna_bullet = new Texture('dna_red.gif', 32, 4);
	this.projectile_rocket = new Texture('rocket.gif', 12, 4);
	this.projectile_rocket_trail = new Texture('rocket_trail.gif', 14, 12);
	this.projectile_red_laser = new Texture('red_laser.gif', 48, 4);
	this.projectile_shot = new Texture('shot.gif', 7, 6);
	
	//Ennemies
	this.patapata = new Texture('patapata.gif', 21, 24);
	this.mid = new Texture('mid.gif', 32, 22);
	this.powarmor_fly = new Texture('powarmor_fly.gif', 32, 32);
	
	//Explosions
	this.explosion = new Texture('explosion.gif', 32, 32);
}
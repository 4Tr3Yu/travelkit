// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { SupabaseClient, Session } from "@supabase/supabase-js";
declare global {
	declare namespace App {
		interface Locals {
			supabase: SupabaseClient;
			safeGetSession: () => Promise<{ session: Session | null; user: User | null }>;
		}
		interface PageData {
			user: User | null;
			session: Session | null;
		}
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}

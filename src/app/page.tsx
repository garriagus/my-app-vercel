import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Stars from "@/components/stars";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Sitio en Construcción</h2>

        {/* Estrellas y auroras con fondo detrás */}
        <div className="aurora" style={{ zIndex: -1 }}></div>
        <div className="aurora" style={{ zIndex: -1 }}></div>
        <div className="aurora" style={{ zIndex: -1 }}></div>
        <div className="aurora" style={{ zIndex: -1 }}></div>
        <div className="stars" id="stars" style={{ zIndex: -1 }}></div>

        <Stars></Stars>
      </main>
    </>
  );
}

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function GratitudeMsg() {

    useEffect(() => {
        let end = Date.now() + (3 * 1000);
        let colors = ['#004AAD', '#CB6CE6'];

        const frame = () => {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
                position: 'absolute',
                zIndex: 9999
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
                position: 'absolute',
                zIndex: 9999
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    return (
        <div className="section-heading">
            <span>Gracias por contactarme!!!<br />Me pondré en contacto contigo lo más pronto posible.</span>
        </div>

    )
}

export default GratitudeMsg;
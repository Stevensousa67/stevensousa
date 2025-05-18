const MY_NAME = "Steven Sousa";
const CURRENT_YEAR = new Date().getFullYear();

export default function Copyright() {
    return (
        <div>
            <p className="text-primary">© {CURRENT_YEAR} {MY_NAME}. All rights reserved.</p>
            <p className="text-lg text-gray-500">Built with love and passion.</p>
        </div>
    );
}
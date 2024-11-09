
import conn from '@app/database'

export const POST = async (req, res) => {
    const { title, body } = await req.json();

    conn.query("INSERT INTO public.posts (title, body) VALUES ($1, $2)", [title, body]);

    return new Response('0', {status: 201});
}
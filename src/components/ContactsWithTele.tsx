import React from 'react';
import type { ContactItem } from '../constants';

type Props = {
  items: Array<ContactItem>;
};

export const ContactsWithTele: React.FC<Props> = ({ items }) => (
  <div className="flex items-center justify-center">
    <ul className="text-xl">
      {items.map((i) => (
        <li className="flex justify-between gap-2" key={i.name}>
          {i.name}:{' '}
          <div>
            <span className="mr-1">📞</span>
            <a href={`tel:${i.tele}`} className="font-bold underline">
              {i.displayTele}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
